# React Native Starter App

This is light weight starting point for building a React Native app. It show cases [Redux](https://github.com/reactjs/redux), navigation using
NavigationExperimental (via [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)) and [offline storage](https://github.com/rt2zz/redux-persist).
It also includes [redux-thunk](https://github.com/gaearon/redux-thunk) middleware for async Redux actions but does not example this.

The app is a basic counter with offline storage & has an example of navigation.

> Only use this if you're experienced with React & React Native.

## Setup

```
git clone https://github.com/teamfa/react-native-starter-app.git
npm install / yarn
react-native run-ios / run-android
```

This project also takes advantage of [Flow](https://flowtype.org/), so it needs to be installed.

## FAQs

### Modules loading without relative paths

Components such as `CounterActions` & `Button` can be imported without specifying their relative path. This is possible as we've got [Flow](https://flowtype.org/)
running `haste` (`module.system=haste` in `.flowconfig`). With `src/` directory added in the flow config, we can take advantage of Flow's `@providesModule`.

Modules with the following code blocks are now provided as "global" like components:

```
/**
* @providesModule MyComponent
* @flow
*/

```

### Navigation

Navigating in an app is bread and butter stuff. NavigationExperimental is currently under heavy development so using it isn't wise... However it is much more performant and
Redux like compared to the current stable navigation methods.

The library [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) uses it's own stable fork of NavigationExperimental and works behind the scenes with a Flux setup.
 It also provides handy Action functions which make navigation a breeze. See the `src/scenes.js` & `scenes/` file/directory for how it's been implemented here.

#### Custom Toolbar/Navigation Bar

By default the library provides a "native" like Toolbar, which uses the Scenes `key` as the title and provides native "back" functionality. This is great for a basic app, but more complex and UI heavy
apps will want this to be custom. The [docs do mention it](https://github.com/aksonov/react-native-router-flux/blob/master/docs/OTHER_INFO.md#custom-nav-bar-for-individual-scene-or-even-different-state-of-scene-new-feature)
but it's not too clear. Your scene component needs to provide a static `renderNavigationBar` method, like so:

```javascript
class MyScene extends Component {

   static renderNavigationBar() {
      return <MyCustomToolbar title={'My Scene'} />;
    }

  ...
}
```

### Offline Storage

By default, reducer state won't be saved when the user closes the app. Using [redux-persist](https://github.com/rt2zz/redux-persist) we're able to very easily solve this.
Using the React Native `AsyncStorage` module, we're able to use it as the redux-persist storage driver (see `src/store/setup`).

Now simply add your reducer key name to the `src/store/whitelist` array and that reducers state will be saved offline and re-injected when the user re-opens the app.

> Setting up the store is an **asynchronous** task. Ensure you handle this within your `src/main` render method.
