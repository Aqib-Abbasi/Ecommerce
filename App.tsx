/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import MainContainer from './src/MainContainer';
import store from './src/redux/store/Store';



const App=()=> {
 

  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({});

export default App;
