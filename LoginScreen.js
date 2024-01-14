import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, StatusBar, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to the 'MainPage' screen
    navigation.navigate('MainPage');
  };

  return (
    <View style={styles.container}>

    <Image source={require('./logo.png')} style={styles.logo} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

        

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  logo: {
    width: 250, // Set the desired width
    height: 250, // Set the desired height
    resizeMode: 'contain', // Set the image resizeMode
    marginBottom: 140,
  },
});

export default LoginScreen;
