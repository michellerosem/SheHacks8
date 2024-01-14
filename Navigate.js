// Navigate.js
import React from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Hospital from './Hospital'; // Import the Hospital component

const Navigate = () => {
  const navigation = useNavigation();

  const HomeLocation = {
    latitude: 43.009597,
    longitude: -81.273734,
  };

  const openHomeLocation = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${HomeLocation.latitude},${HomeLocation.longitude}`;
    Linking.openURL(url).catch(err => {
      console.log("Don't know how to open this URL: " + url);
      Alert.alert('Error', 'Failed to open map.');
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={openHomeLocation} />
      <Button title="Class" onPress={() => navigation.navigate('ClassPage')} />
      <Button title="Car" onPress={() => navigation.navigate('CarPage')} />
      <Hospital /> {/* Use the Hospital component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
});

export default Navigate;
