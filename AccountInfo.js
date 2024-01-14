/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AccountInfo = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([]);
    const [homeAddress, setHomeAddress] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carLocation, setCarLocation] = useState('');

    //adds new emergency contact
    const addEmergencyContact = (contact) => {
        setEmergencyContacts([...emergencyContacts, contact]);
      };

      const handleSetLocation = () => {
        // Save carLocation to some storage (e.g., AsyncStorage, Redux, etc.)
        setCarLocation(carLocation);
      };

    //JFX
    return ( 
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}> Account Info </Text>

            <Text style={styles.subHeader}> Emergency Contacts:</Text>
            {emergencyContacts.map((contact, index) => (
            <Text key={index}>{contact}</Text>
            ))}

            <TextInput
            style={styles.input}
            placeholder="Add Emergency Contact"
            onChangeText={(text) => setEmergencyContacts([...emergencyContacts, text])}
            />

            <Text style={styles.subHeader}>Home Address: {homeAddress}</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Home Address"
            onChangeText={(text) => setHomeAddress(text)}
            />

            <Text style={styles.subHeader}>Car Model: {carModel}</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Car Model"
            onChangeText={(text) => setCarModel(text)}
            />

            <Text style={styles.subHeader}>Car Location: {carLocation}</Text>
            <TextInput style={styles.input}
            placeholder="Enter Car location"
            //value={carLocation}
            onChangeText={setCarLocation}
            />

            <Button title="Save" onPress={() => console.log('Save button pressed')} />
        </ScrollView>
    );
};

//css styles
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subHeader: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
  });

export default AccountInfo;*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';

const AccountInfo = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [homeAddress, setHomeAddress] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carLocation, setCarLocation] = useState('');

  // Adds new emergency contact
  const addEmergencyContact = (contact) => {
    setEmergencyContacts([...emergencyContacts, contact]);
  };

  const handleSetLocation = () => {
    // Save carLocation to some storage (e.g., AsyncStorage, Redux, etc.)
    setCarLocation(carLocation);
  };

  // JSX
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        {/* Replace 'logo.png' with the actual file path of your logo */}
        <Image source={require('./logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.header}>Account Info</Text>

      <Text style={styles.subHeader}>Emergency Contacts:</Text>
      {emergencyContacts.map((contact, index) => (
        <Text key={index} style={styles.subHeadingText}>
          {contact}
        </Text>
      ))}

      <TextInput
        style={styles.input}
        placeholder="Add Emergency Contact"
        onChangeText={(text) => setEmergencyContacts([...emergencyContacts, text])}
      />

      <Text style={styles.subHeader}>Home Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Home Address"
        onChangeText={(text) => setHomeAddress(text)}
      />

      <Text style={styles.subHeader}>Car Model:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Model"
        onChangeText={(text) => setCarModel(text)}
      />

      <Text style={styles.subHeader}>Car Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car location"
        onChangeText={setCarLocation}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => console.log('Save button pressed')} color="#fff" />
      </View>
    </ScrollView>
  );
};

// CSS styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left', // Left align the text
  },
  subHeadingText: {
    fontSize: 16,
    textAlign: 'left', // Left align the text
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: 'white', // Adjust the input background color if needed
    color: '#5a37b9', // Set a color for the input text
    borderRadius: 8, // Add border radius for a rounded appearance
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#5a37b9', // Rectangle box color
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default AccountInfo;
