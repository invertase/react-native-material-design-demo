# React Native Material Design Demo App [Android]

This repository contains a React Native project, implementing the [react-native-material-design](https://github.com/react-native-material-design/react-native-material-design) package.

> Please submit all issues to [react-native-material-design](https://github.com/react-native-material-design/react-native-material-design/issues).

## Installation

### Development

1. Clone this repo.
2. Run `npm install`.
3. Ensure a device, or emulated Android image is connected (`adb devices`).
4. Run `react-native run-android`.

> If running on a device, run `adb reverse tcp:8081 tcp:8081`.

### APK

To download the production/release APK, click [here](https://github.com/react-native-material-design/demo-app/raw/master/app-release.apk)

## Can I use this as a base project?

Of course. Please remember though it is not a "fit all" solution and you'll need to configure it for your own project needs.

To change the name of the project, edit `android/app/src/res/values/strings.xml`.
To change the launcher icon of the project, change all of the `ic_launcher.png` icons within `android/app/src/res/mipmap-XXXX/`.

## How it works

This Android only demo app has been designed to be as minimal and basic as possible, to avoid confusion.

Key points:
- It's only working on Android for now.
- [Alt](http://alt.js.org) is used as a light weight flux implementation to handle application state.
- A custom `Navigate` class has been made to handle route navigation. It's a wrapper around the native 'Navigator' API, and does not force any set ways of working - see below for more information.
- Some aspects are dependant on React's [context](https://facebook.github.io/react/docs/context.html).

Each scene is located within `./src/scenes`, while the Toolbar is global to the entire app and is located within `./src/components`. The main entry point of the app is within `index.android.js`,
here the app undergoes a few cycles of component mounting, wrapping the scenes within a [`Navigator`](https://facebook.github.io/react-native/docs/navigator.html), which is wrapped within a [DrawerLayoutAndroid](https://facebook.github.io/react-native/docs/drawerlayoutandroid.html#content).

The refs for the `drawer` and `navigator` are created as application context, and are available when needed throughout the app. The `navigator` context however is an implementation of a custom `Navigate` class
found in `./src/utils/Navigate`, which allows for navigation around the app, and 'down' children components.

### Navigate

The Navigate class needs to be instantiated on application boot, with a reference to React's `Navigator` API passed. An example of this can be found [here](https://github.com/react-native-material-design/demo-app/blob/master/index.android.js#L39).

Once instantiated, the class exposes a few methods to help with simple app navigation. First however, we must define our routes. The class looks for a `routes.js` file in the root of the `src` directory.

The class also handles `hardwareBackPress` events correctly, only exiting the app if we're on a parent route. Otherwise, it calls the `back()` method.

#### Routes

This is a simple object based pattern of components and their children, an example of which can be found [here](https://github.com/react-native-material-design/demo-app/blob/master/src/routes.js).

Top level objects are considered to be the "parent" scenes of your app, and are defined by object keys. Each object should contain a name and a component property. See below example.

##### Basic Routes Config Example

```javascript
export default {

    parent: {
        title: 'Parent Scene',
        component: require('./scenes/SomeParentScene').default
    }

}
```

You can have as many parent key objects as you like.

If you wish to define some children of this route, simply add a `children` object, with the same pattern as above. See below example.

##### Advanced Routes Config Example

```javascript
export default {

    parent: {
        title: 'Parent Scene',
        initialRoute: true, // this route will be show on app start
        component: require('./scenes/SomeParentScene').default,

        children: {
            child: {
                title: 'Child Scene',
                component: require('./scenes/SomeChildScene').default,
            }
        }
    },
    'Another Parent': { // can be called anything
        // title: 'Another Parent', // title is optional, defaults to the parent object key name 'Another Parent'
        component: require('./scenes/AnotherParentScene').default,

        children: {
            'Another Child': { // can be called anything
                // title: 'Another Child', // title is optional, will default to the parent object key name 'Another Child'
                component: require('./scenes/SomeOtherChildScene').default,
            },
            'Yet Another Child': { // can be called anything
                component: require('./scenes/SomeOtherChildScene').default,
            }
        }
    }

}
```

You can have as many children, and children of children as you like.

#### API

##### `static getInitialRoute([optional] defaultRoute, [optional] routesConfig)`

 - **defaultRoute**: Specify a parent route to return. By default however this will look for the first parent on your routes config with
  `initialRoute: true`, else, if no initial route specified it'll just return the first parent route. 
 - **routesConfig**: Specify the routes config. This is not required if you have a `routes.js` file setup in `/src`.

Can be called without class instantiation, and is used to get an initial starting route to show initially. 

This is handy for configuring initial routes, for example [here](https://github.com/react-native-material-design/demo-app/blob/master/index.android.js#L62).

```javascript
Navigate.getInitialRoute('parent');
```

Optionally you can pass in the routes yourself via `Navigate.getInitialRoute('parent', { ...some routes });`

> This can only be used with parent routes.

##### `to(path, title, props)`

Used to directly access any route from any location.

```javascript
Navigate.to('root.child', 'Custom Title', { some: 'prop' });
```

`path`: <string> Required path to a route.
`title`: <string> Optional title to use for the route. If left blank, the title/route name from the `routes.js` file will be used.
`props`: <object> Option object of props to pass to the next scene.

##### `back(title, props)`

Used when going to the parent of the current route.

```javascript
Navigate.back('Custom Title', { some: 'prop' });
```

`title`: <string> Optional title to use for the route. If left blank, the title/route name from the `routes.js` file will be used.
`props`: <object> Option object of props to pass to the parent scene.

##### `forward(path, title, props)`

Used when going to a child of the current route.

```javascript
// Assuming the current route is "root":
Navigate.forward('child', 'Custom Title', { some: 'prop' });
Navigate.forward(null, 'Custom Title', { some: 'prop' });
```

`path`: <string> Optional path to a child route. If no path is supplied, the first child of the parent defined in `routes.js` will be used.
`title`: <string> Optional name to use for the route. If left blank, the title/route name from the `routes.js` file will be used.
`props`: <object> Option object of props to pass to the next scene.

##### `isChild`

An exposed boolean value on the class updated on route change if applicable.

If `true`, the current route is a child.
If `false`,  the current route has no parent.

##### `currentRoute`

An exposed object which is updated on route change, containing the values of the current route.

##### `navigator`

The initial reference to the `Navigator` API.
