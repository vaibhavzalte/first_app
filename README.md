Initialize a New React Native Project: `npx @react-native-community/cli init firstApp` 
Go to that folder `cd firstApp` or directly open that folder in vscode `code -r firstApp`

Set Up Your Environment : [link](https://reactnative.dev/docs/set-up-your-environment)
cle

adb devices `adb devices`
run app `npx react-native run-android`

How to install npm package 
- e.g.`npm install react-native-webview` after this command re run the application using `npx react-native run-android`

## Navigation
- refer https://reactnavigation.org/
- `npm install @react-navigation/native`
-  install dependencies for emulator  `npm install react-native-screens react-native-safe-area-context`

    ## Navigation type
    -   stack navigation:
        - `npm install @react-navigation/native-stack`
    -   drawer navigation,
    -   tab navigation
        - `npm install @react-navigation/bottom-tabs`
- during this any error try this `npm start --clean-cache`
- after run this `npx react-native run-android`


# api calls
- API Call | Fetch Rest API
- List with API Data | Get List with 
- FlatList with API Data | use flat list with API

# Fetch data from JSON server 
- run local server with ip
    - first run this command in json-server folder `json-server --host 0.0.0.0 db.json`
    - then check ip (`ipconfig`) enter ip:3000 in url and check 
- `http://10.0.2.2:3000/users` for emulator (it connect ip and emulator)
