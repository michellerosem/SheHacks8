import React from 'react';
import { View, Button, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navigate = () => {
  const navigation = useNavigation();

  const HomeLocation = {
    latitude: 43.009597, // Example latitude
    longitude: -81.273734, // Example longitude
  };

  const openHomeLocation = () => {
    if (HomeLocation && HomeLocation.latitude && HomeLocation.longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${HomeLocation.latitude},${HomeLocation.longitude}`;
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open this URL: " + url);
        }
      });
    } else {
      Alert.alert('Home location not available.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={openHomeLocation} />
      <Button title="Class" onPress={() => navigation.navigate('ClassPage')} />
      <Button title="Car" onPress={() => navigation.navigate('CarPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    marginBottom: 20,
    width: '100%',
  }
});

export default Navigate;
