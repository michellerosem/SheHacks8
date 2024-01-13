import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountInfo from './AccountInfo'; //Connects to AccountInfo.js file
import LoginScreen from './LoginScreen';
import Navigate from './Navigate';
import MainPage from './MainPage';
import ClassPage from './ClassPage';
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

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
