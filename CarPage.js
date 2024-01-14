import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';

const CarPage = () => {
    const carLocation = {
        latitude: 43.0017, // Example latitude
        longitude: 81.2732, // Example longitude
      };
    const openCarLocation = () => {
        if (carLocation && carLocation.latitude && carLocation.longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${carLocation.latitude},${carLocation.longitude}`;
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open this URL: " + url);
        }
      });
    } else {
      Alert.alert('Car location not available.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Open Car Location on Google Maps" onPress={openCarLocation} />
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
});

export default CarPage;
