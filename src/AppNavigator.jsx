import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress'
import Checkout from './Screens/Checkout';
import Welcomescreen from './Screens/Welcomescreen';
import Sellerhome from './Screens/Sellerhome';
import Productview from './Screens/Productview';
import Dashboard from './Screens/Dashboard';
//
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="MyAddress" component={MyAddress} options={{headerShown:false}}/>
        <Stack.Screen name="AddAddress" component={AddAddress} options={{headerShown:false}}/>
        <Stack.Screen name="Checkout" component={Checkout} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={Welcomescreen} options={{headerShown:false}}/>
        <Stack.Screen name="Sellerhome" component={Sellerhome} options={{headerShown:false}}/>
        <Stack.Screen name="Productview" component={Productview} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>




      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})