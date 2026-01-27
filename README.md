This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# React Native Setup Instructions

Please follow the steps below to run the project locally.


## Step 1: Start the Metro bundler with cache reset:

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
npx react-native start --reset-cache
```


## Step 2: Install iOS pods:

```sh
npm run pods-install
```


## Step 3: Run the app on iOS:

```sh
npx react-native run-ios
```


## Step 4: Run the app on Android:

```sh
npx react-native run-android
```




# Backend Service
The backend is hosted at the following URL:

```sh
https://onboarding-api-zgcc.onrender.com
```

## Note:
The backend is hosted on a free-tier service and may go into a sleep state if it is not used for a few minutes. 
If the API appears unresponsive, simply visit the URL in a browser to wake it up before using the app.
