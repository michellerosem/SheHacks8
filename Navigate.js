import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
//import StudySpot from './StudySpot';

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
      
      {/* {studySpots.map((spot, index) => (
        <StudySpot key={index} spotName={spot.spotName} address={spot.address} />
      ))} */}
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
