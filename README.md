# React Native Material Design Demo App

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

This APK is in Debug mode for now. Will move it into **Production mode**(which means, it will be faster and more optimized) soon.

[Download APK](https://github.com/react-native-material-design/react-native-material-design/demo-app.apk)

## How it works

This example uses the [Alt](http://alt.js.org) implementation of Flux to handle state.
The main `index.android.js` file wraps the entire app inside the Drawer & Navigator components.

Each "scene" is located within `./src/scenes`, with the Toolbar being global within `./src/components`. To help improve performance, the scenes are loaded as and when they are needed.