// MainPage.js
import { Platform } from 'react-native';
import React from 'react';
import { View, Button, StyleSheet, Linking, Alert } from 'react-native';

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
      

  return (
    <View style={styles.container}>
      <Button
        title="Foot Patrol"
        onPress={handleCallFootPatrol}
      />
      <Button
        title="Account"
        onPress={() => navigation.navigate('Account Info')} // Use the correct route name here
      />
      <Button
        title="Emergency Contacts"
        onPress={() => navigation.navigate('EmergencyContacts')}
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