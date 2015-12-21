# React Native Material Design Demo App

This repository contains a React Native project, implementing the `react-native-material-design` package.

> Please submit all issues to `react-native-material-design`.

## Installation

### Development

1. Clone this repo.
2. Run `npm install`.
3. Ensure a device, or emulated Android image is connected (`adb devices`).
4. Run `react-native run-android`.

> If running on a device, run `adb reverse tcp:8081 tcp:8081`.

### APK

Coming soon...

## How it works

This example uses the [Alt](http://alt.js.org) implementation of Flux to handle state.
The main `index.android.js` file wraps the entire app inside the Drawer & Navigator components.

Each "scene" is located within `./src/scenes`, with the Toolbar being global within `./src/components`. To help improve performance, the scenes are loaded as and when they are needed.