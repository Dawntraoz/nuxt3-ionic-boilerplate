# Nuxtion

[WIP] A boilerplate for creating new Nuxt 3 Ionic applications with some basic functionalities

# Documentation

- [Nuxt 3 docs](https://v3.nuxtjs.org/getting-started/quick-start)

  - [Variable font (Jost)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)

- [Ionic docs](https://ionicframework.com/docs/)

  - [Capacitor docs](https://capacitorjs.com/docs/)

- [Module Nuxt/Ionic(https://ionic.roe.dev/getting-started)

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build  # or  yarn ionic:build
```

### For web

Locally preview production build:

```bash
yarn preview
```

### For iOS

Developing for [iOS, Ionic documentation](https://ionicframework.com/docs/developing/ios).

```bash
# build the ios folder
yarn cap add ios

# if already added, sync the new build with the ios folder
yarn cap sync ios

# preview the app on Xcode
yarn cap open ios
```

### For Android

Developing for [android, Ionic documentation](https://ionicframework.com/docs/developing/android).

```bash
# build the android folder
yarn cap add android

# if already added, sync the new build with the android folder
yarn cap sync android

# preview the app on Android Studio
yarn cap open android
```

## Pre Deployment

To generate the Icon and Splash screen run the following commands:

```bash
# Install cordova-res globally
yarn global add cordova-res

# Run the cordova-res command for both platforms (PWA already made by Nuxt)
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```
