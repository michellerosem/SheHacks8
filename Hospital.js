import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';

const Hospital = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      getCurrentLocation();
    } else {
      Alert.alert('Permission Required', 'Location permission is required to find the nearest hospital.');
    }
  };

  const getCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    } catch (err) {
      Alert.alert('Error', 'Unable to obtain current location.');
      console.error(err);
    }
  };

  const openHospital = async () => {
    if (!currentLocation) {
      await requestLocationPermission();
      return;
    }

    const { latitude, longitude } = currentLocation.coords;
    const hospitalUrl = `https://www.google.com/maps/search/?api=1&query=hospitals&ll=${latitude},${longitude}`;
    Linking.openURL(hospitalUrl).catch(err => {
      console.error("Failed to open URL: ", err);
      Alert.alert('Error', 'Failed to open map.');
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Find Nearest Hospital" onPress={openHospital} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default Hospital;
