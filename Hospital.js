// Hospital.js
import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';

const Hospital = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

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
  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Allow the app to use location service.');
      setHasPermission(false);
      return;
    }
    setHasPermission(true);
  };

  const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location);
  };

  const openHospital = () => {
    if (currentLocation) {
@@ -32,10 +35,25 @@ const Hospital = () => {
  };

  return (
    <View>
      <Button title="Find Nearest Hospital" onPress={openHospital} />
    <View style={styles.container}>
      <Button title="Request Location Permission" onPress={requestLocationPermission} />
      {hasPermission && (
        <>
          <Button title="Get Current Location" onPress={getCurrentLocation} />
          <Button title="Find Nearest Hospital" onPress={openHospital} />
        </>
      )}
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