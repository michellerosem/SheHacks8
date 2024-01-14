/*import React, { useState } from 'react';
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

export default LoginScreen;*/


import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to the 'MainPage' screen
    navigation.navigate('MainPage');
  };

  return (
    <ImageBackground
      source={require('./login.png')} // Specify the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#3498db" // Set a color for the placeholder text
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#3498db" // Set a color for the placeholder text
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust alpha value for darkness
    paddingBottom: 250, // Adjust the padding bottom to your preference
  },
  inputContainer: {
    width: '80%', // Adjust the width to your preference
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#5a37b9', // Set a color for the border
    marginBottom: 10,
    backgroundColor: 'white', // Adjust the input background color if needed
    color: '#5a37b9', // Set a color for the input text
    borderRadius: 8, // Add border radius for a rounded appearance
  },
  loginButton: {
    backgroundColor: '#5a37b9', // Set a color for the login button
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8, // Add border radius for a rounded appearance
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
