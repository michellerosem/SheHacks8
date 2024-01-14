import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking, Alert, ImageBackground } from 'react-native';
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
    <ImageBackground
      source={require('./greyMap.jpg')} // Specify the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Account Info')}>
        <Text style={styles.buttonText}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCallFootPatrol}>
          <Text style={styles.buttonText}>Foot Patrol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSendEmergencySMS}>
          <Text style={styles.buttonText}>Emergency Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigate')}>
          <Text style={styles.buttonText}>Navigate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuickQuestion')}>
          <Text style={styles.buttonText}>Quick Question</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different image resizing options
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#5a37b9', // Set a color for the button
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8, // Add border radius for a rounded appearance
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainPage;