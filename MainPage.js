// MainPage.js
import { Platform } from 'react-native';
import React from 'react';
import { View, Button, StyleSheet, Linking, Alert } from 'react-native';
import * as Location from 'expo-location';

const MainPage = ({ navigation }) => {
    const handleCallFootPatrol = () => {
        let phoneNumber = '';
      
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${5196613650}`;
        } else {
          phoneNumber = `telprompt:${5196613650}`;
        }
      
        Linking.canOpenURL(phoneNumber)
          .then(supported => {
            if (!supported) {
              Alert.alert('Phone number is not available');
            } else {
              return Linking.openURL(phoneNumber);
            }
          })
          .catch(err => console.log(err));
      };
  
      const handleSendEmergencySMS = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const message = `Assistance needed at my location. Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}. Feeling unsafe. Please help or alert authorities.`;
        const phoneNumber = '2265591895';
        const smsLink = `sms:${phoneNumber}&body=${encodeURIComponent(message)}`;

        Linking.canOpenURL(smsLink)
          .then(supported => {
            if (!supported) {
              Alert.alert('Unable to send SMS message');
            } else {
              return Linking.openURL(smsLink);
            }
          })
          .catch(err => console.log(err));
    };

  return (
    <View style={styles.container}>
      <Button
        title="Foot Patrol"
        onPress={handleCallFootPatrol}
      />
      <Button
        title="Quick Question"
        onPress={() => navigation.navigate('QuickQuestion')}
      />
      {/* <Button
        title="Quick Hack Question"
        onPress={() => navigation.navigate('QuickHack')}
      /> */}
      <Button
        title="Account"
        onPress={() => navigation.navigate('Account Info')} // Use the correct route name here
      />
      <Button
        title="Emergency Contacts"
        onPress={handleSendEmergencySMS}
      />
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Navigate')}
      />
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

export default MainPage;
