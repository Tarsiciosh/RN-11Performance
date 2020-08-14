import example from './AppPomodoro'
export default example

/*

import * as React from 'react'
import AppNavigator from './AppNavigator'
//import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
//import { PersistGate } from 'redux-persist/integration/react'

import PureButtonScreen from './PureButtonScreen'

import store from './redux/store'

export default function App () {
  return (
    <Provider store={store}>
        <AppNavigator/>
    </Provider>
  )
}

*/

/* EXAMPLE OF PURE BUTTON:
export default function App () {
  return (
    <Provider store={store}>
        <PureButtonScreen/>
    </Provider>
  )
}
*/

/* ORIGINAL TEMPLATE:

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/