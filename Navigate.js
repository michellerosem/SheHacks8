// Navigate.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Navigate = ({ navigation }) => {
    const handleOpenAddress = () => {
      // Encode the address
      const address = encodeURIComponent('1151 Richmond St, London, ON N6A 3K7');
      // Create the URL for Google Maps
      const url = Platform.select({
        ios: `maps:0,0?q=${address}`,
        android: `geo:0,0?q=${address}`
      });
      // Open the URL
      Linking.openURL(url);
    };
    
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={handleOpenAddress}
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
