/*import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';


const Navigate = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  // Hardcoded Home location
  const HomeLocation = {
    latitude: 43.009597,
    longitude: -81.273734,
  };

  // const studySpots = [
  //   { spotName: 'Library', address: '123 Main St, Cityville' },
  //   { spotName: 'Coffee Shop', address: '456 Oak St, Townsville' },
  //   { spotName: 'Quiet Park', address: '789 Pine St, Villagetown' },
  // ];

  // Effect to get the current location of the user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Allow the app to use location service.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);
  // Open the hardcoded Home location in maps
  const openHomeLocation = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${HomeLocation.latitude},${HomeLocation.longitude}`;
    Linking.openURL(url).catch(err => {
      console.log("Don't know how to open this URL: " + url);
      Alert.alert('Error', 'Failed to open map.');
    });
  };
  // Open the nearest hospital based on the current location
  const openHospital = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      const hospitalUrl = `https://www.google.com/maps/search/?api=1&query=hospitals+near+me&query_place_id=${latitude},${longitude}`;
      Linking.openURL(hospitalUrl).catch(err => {
        console.error("Failed to open URL: ", err);
        Alert.alert('Error', 'Failed to open map.');
      });
    } else {
      Alert.alert('Location not available', 'Current location not available.');
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={openHomeLocation} />
      <Button title="Class" onPress={() => navigation.navigate('ClassPage')} />
      <Button title="Car" onPress={() => navigation.navigate('CarPage')} />
      <Button title="Hospital" onPress={openHospital} />

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
export default Navigate;*/


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const Navigate = () => {
  const navigation = useNavigation();
  const [currentLocation, setCurrentLocation] = useState(null);
  // Hardcoded Home location
  const HomeLocation = {
    latitude: 43.009597,
    longitude: -81.273734,
  };

  // Effect to get the current location of the user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Allow the app to use location service.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  // Open the hardcoded Home location in maps
  const openHomeLocation = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${HomeLocation.latitude},${HomeLocation.longitude}`;
    Linking.openURL(url).catch(err => {
      console.log("Don't know how to open this URL: " + url);
      Alert.alert('Error', 'Failed to open map.');
    });
  };

  // Open the nearest hospital based on the current location
  const openHospital = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      const hospitalUrl = `https://www.google.com/maps/search/?api=1&query=hospitals+near+me&query_place_id=${latitude},${longitude}`;
      Linking.openURL(hospitalUrl).catch(err => {
        console.error("Failed to open URL: ", err);
        Alert.alert('Error', 'Failed to open map.');
      });
    } else {
      Alert.alert('Location not available', 'Current location not available.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subheading}>Where To</Text>
      <Text style={styles.goToText}>Go To:</Text>

      <TouchableOpacity style={styles.button} onPress={openHomeLocation}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClassPage')}>
        <Text style={styles.buttonText}>Class</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CarPage')}>
        <Text style={styles.buttonText}>Car</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openHospital}>
        <Text style={styles.buttonText}>Hospital</Text>
      </TouchableOpacity>
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
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goToText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5a37b9',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Navigate;



