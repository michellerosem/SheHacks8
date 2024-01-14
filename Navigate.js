// Navigate.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navigate = () => {
  // const handleOpenAddress = () => {
  //   latitude: 43.009597,
  //   longitude: -81.273734,

  //   // Encode the hardcoded address
  //   const address = encodeURIComponent('1151 Richmond St, London, ON N6A 3K7');
  //   // Create the URL for Google Maps
  //   const url = Platform.select({
  //     ios: `maps:0,0?q=${address}`,
  //     android: `geo:0,0?q=${address}`
  //   });
  //   // Open the URL
  //   Linking.openURL(url);
  // };

  const navigation = useNavigation();

  const HomeLocation = {
    latitude: 43.0017, // Example latitude
    longitude: 81.2732, // Example longitude
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
  Alert.alert('Car location not available.');
}
};
    
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={HomeLocation}
      />
      <Button
        title="Class"
        onPress={() => navigation.navigate('ClassPage')}
      />

        <Button
        title="Car"
        onPress={() => navigation.navigate('CarPage')}
      />
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
