
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountInfo from './AccountInfo'; 
import LoginScreen from './LoginScreen';
import Navigate from './Navigate';
import MainPage from './MainPage';
import ClassPage from './ClassPage';
import QuickHack from './QuickHack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account Info" component={AccountInfo} />
        <Stack.Screen name="Navigate" component={Navigate} /> 
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ClassPage" component={ClassPage} />
      <Stack.Screen name="QuickHack" component={QuickHack} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
