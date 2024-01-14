// Hospital.js
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';

const Hospital = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

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

  const openHospital = () => {
    if (currentLocation) {
      const { latitude, longitude } = currentLocation.coords;
      const hospitalUrl = `https://www.google.com/maps/search/?api=1&query=hospitals&ll=${latitude},${longitude}`;
      Linking.openURL(hospitalUrl).catch(err => {
        console.error("Failed to open URL: ", err);
        Alert.alert('Error', 'Failed to open map.');
      });
    } else {
      Alert.alert('Location not available', 'Current location not available.');
    }
  };

  return (
    <View>
      <Button title="Find Nearest Hospital" onPress={openHospital} />
    </View>
  );
};

export default Hospital;