import { BackAndroid } from 'react-native';

let routes = null;

try {
	routes = require('../routes').default;
} catch (e) {
}

export default class Navigate {

	/**
	* Gets the initial root props
	* Accepts a parent route name and finds that routes props
	*    OR - Finds the first parent route with 'initialRoute' set to true.
	*    OR FINALLY - Returns the first parent route.
	* @param path
	* @param customRoutes
	* @returns {{path: *}}
	*/
	static getInitialRoute = (path, customRoutes) => {
		if (customRoutes) {
			routes = customRoutes;
		}
		if (!routes) {
			console.warn(`[Navigate.getInitialRoute()] No routes found. Add routes to src/routes.js.`);
			return null;
		}
		if (path) {
			return {
				path,
				...routes[path]
			}
		} else {
			let initial;
			for (const route in routes) {
				if (routes[route].initialRoute) {
					initial = {path: route, ...routes[route]};
					break;
				}
			}
			return initial || {
				path,
				...routes[Object.keys(routes)[0]]
			}
		}
	};

	constructor(navigator) {
		this.navigator = navigator;
		this.savedInstanceStates = new Map();
		this.currentRoute = null;
		this.previousRoute = null;
		this.isChild = false;
		BackAndroid.addEventListener('hardwareBackPress', this._hardwareBackPress);
	}

	/**
	* Generates a pretty name based off the last item in a route path.
	* Mainly for titles
	* @param path
	* @returns {string}
	* @private
	*/
	_getPathPrettyName = (path) => {
		path = path.split('.');
		if (path.length === 1) {
			path = path[0]
		} else {
			path = path[path.length - 1];
		}
		return path.charAt(0).toUpperCase() + path.slice(1);
	};

	/**
	* Handle hardware back press
	* @returns {boolean}
	*/
	_hardwareBackPress = () => {
		if (this.navigator.getCurrentRoutes()[0].path == Navigate.getInitialRoute().path) {
			BackAndroid.exitApp();
			return false;
		} else {
			if (!this.isChild) {
				route = Navigate.getInitialRoute();
				this.currentRoute = route;
				this.navigator.replace(route);
				return true;
			} else {
				this.back();
				return true;
			}
		}
	};

	/**
	* Deep get an object without passing in the 'children' key
	* @param path
	* @returns object
	* @private
	*/
	_getRouteObject = (path) => {
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

	// TODO
	_saveInstanceState = (path, instanceState) => {
		if (instanceState) {
			this.savedInstanceStates.set(path, instanceState);
		}
	};

	// TODO
	_recoverInstanceState = (path) => {
		const instanceState = this.savedInstanceStates.get(path);
		if (instanceState) {
			this.savedInstanceStates.delete(path);
		}
		return instanceState || null;
	};
	/**
	* Jump to a component at a certain path defined in routes
	* @param path
	* @param title
	* @param props
	*/
	to = (path, title, props) => {
		if (!path) {
			console.warn(`[Navigate.to(undefined)] A route path is required to navigate to`);
		} else {
			const obj = this._getRouteObject(path);

			if (!obj || !obj.component) {
				console.warn(`[Navigate.to(${path})] No component exists at this path`);
			} else {
				this.isChild = path.split('.').length > 1;
				const route = {
					title: title ? title : (obj.title ? obj.title : path),
					path,
					component: obj.component,
					props
				};
				this.previousRoute = this.currentRoute;
				this.currentRoute = route;
				this.navigator.replace(route);
			}
		}
	};

	/**
	* Go back to the parent of the current component
	* @param title
	* @param props
	*/
	back = (title, props) => {
		const current = this.navigator.getCurrentRoutes()[0].path;
		const path = current.substr(0, current.lastIndexOf('.'));
		const obj = this._getRouteObject(path);
		const savedInstance = this._recoverInstanceState(path); // TODO

		if (!obj) {
			console.warn(`[Navigate.back()] No component exists for the parent of ${current}`);
		} else {
			this.isChild = path.split('.').length > 1;
			const route = {
				// title: title ? title : (obj.title || this._getPathPrettyName(path)),
				title: title ? title : (this.previousRoute ? this.previousRoute.title : (obj.title || this._getPathPrettyName(path))),
				path,
				component: obj.component,
				props
			};

			this.currentRoute = route;
			this.navigator.replace(route);
		}
	};

	/**
	* Go forward to a defined child component of the current route or the first child that exists
	* @param {String} child [Optional] Specify the name of the child to go to.
	* @param {String} title [Optional] Override the routes default title.
	* @param {Object} props [Optional] Send additional props that'll get bootstrapped onto the route
	* @param {Object} savedInstanceState [Optional] Send additional props that'll get bootstrapped onto the route
	*/
	forward = (child, title, props, savedInstanceState) => {
		const current = this.navigator.getCurrentRoutes()[0].path;
		const currentObject = this._getRouteObject(current);

		if (!currentObject.children || !Object.keys(currentObject.children).length) {
			console.warn(`[Navigate.forward()] No child components exists for ${current}`);
		} else {
			this.isChild = true;
			if (child) {
				const obj = this._getRouteObject(`${current}.${child}`);
				if (!obj) {
					console.warn(`[Navigate.forward(${child})] Child component ${child} does not exist on ${current}`);
				} else {
					const route = {
						title: title ? title : (obj.title || this._getPathPrettyName(`${current}.${child}`)),
						path: `${current}.${child}`,
						component: obj.component,
						props
					};
					this.previousRoute = this.currentRoute;
					this.currentRoute = route;
					this.navigator.replace(route);
				}
			} else {
				const path = `${current}.${Object.keys(currentObject.children)[0]}`;
				const obj = this._getRouteObject(path);
				const route = {
					title: title ? title : (obj.title ? obj.title : this._getPathPrettyName(path)),
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
	* Returns the current route config.
	* @returns {*|makeAction}
	*/
	getRoutes = () => {
		return routes;
	};

	setRoutes = (newRoutes) => {
		// todo deep clone?
		routes = newRoutes;
	};

};
