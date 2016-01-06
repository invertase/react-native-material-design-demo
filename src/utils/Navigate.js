import { BackAndroid } from 'react-native';
import routes from '../routes';

export default class Navigate {

    static init = function(path) {
        return {
            path,
            ...routes[path]
        }
    };

    constructor(navigator) {
        this.navigator = navigator;
        this.currentRoute = null;
        this.isChild = false;

        BackAndroid.addEventListener('hardwareBackPress', this.hardwareBackPress);
    };

    /**
     * Handle hardware back press
     * @returns {boolean}
     */
    hardwareBackPress = () => {
        if (!this.isChild) {
            BackAndroid.exitApp();
            return false;
        } else {
            this.back();
            return true;
        }
    };

    /**
     * Deep get an object without passing in the 'children' key
     * @param path
     * @returns object
     * @private
     */
    _deepGet = (path) => {
        let obj = routes;
        const properties = path.replace(/\./g, '.children.').split('.');
        if (properties.length === 1) return obj[path];
        properties.forEach(function (key) {
            if (!obj || !hasOwnProperty.call(obj, key)) {
                obj = undefined;
                return;
            }
            obj = obj[key];
        });
        return obj;
    };

    /**
     * Jump to a component at a certain path defined in routes
     * @param path
     * @param name
     * @param props
     */
    to = (path, name, props) => {
        if (!path) {
            console.warn(`[Navigate.to(undefined)] A route path is required to navigate to`);
        } else {
            const obj = this._deepGet(path);

            if (!obj || !obj.component) {
                console.warn(`[Navigate.to(${path})] No component exists at this path`);
            } else {
                this.isChild = path.split('.').length > 1;
                const route = {
                    name: name ? name : (obj.name ? obj.name : path),
                    path,
                    component: obj.component,
                    props
                };
                this.currentRoute = route;
                this.navigator.replace(route);
            }
        }
    };

    /**
     * Go back to the parent of the current component
     * @param name
     * @param props
     */
    back = (name, props) => {
        const current = this.navigator.getCurrentRoutes()[0].path;
        const path = current.substr(0, current.lastIndexOf('.'));
        const obj = this._deepGet(path);

        if (!obj) {
            console.warn(`[Navigate.back()] No component exists for the parent of ${current}`);
        } else {
            this.isChild = path.split('.').length > 1;
            const route = {
                name: name ? name : obj.name,
                path,
                component: obj.component,
                props
            };
            this.currentRoute = route;
            this.navigator.replace(route);
        }
    };

    /**
     * Go forward to a defined child component or the first one which exists
     * @param child
     * @param name
     * @param props
     */
    forward = (child, name, props) => {
        const current = this.navigator.getCurrentRoutes()[0].path;
        const currentObject = this._deepGet(current);

        if (!currentObject.children || !Object.keys(currentObject.children).length) {
            console.warn(`[Navigate.forward()] No child components exists for ${current}`);
        } else {
            this.isChild = true;
            if (child) {
                const obj = this._deepGet(`${current}.${child}`);

                if (!obj) {
                    console.warn(`[Navigate.forward(${child})] Child component ${child} does not exist on ${current}`);
                } else {
                    const route = {
                        name: name ? name : obj.name,
                        path: `${current}.${child}`,
                        component: obj.component,
                        props
                    };
                    this.currentRoute = route;
                    this.navigator.replace(route);
                }
            } else {
                const path = `${current}.${Object.keys(currentObject.children)[0]}`;
                const obj = this._deepGet(path);
                const route = {
                    name: name ? name : (obj.name ? obj.name : path),
                    path,
                    component: obj.component,
                    props
                };
                this.currentRoute = route;
                this.navigator.replace(route);
            }
        }
    }

}