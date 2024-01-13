import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AccountInfo = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([]);
    const [homeAddress, setHomeAddress] = useState('');
    const [carModel, setCarModel] = useState('');

    //adds new emergency contact
    const addEmergencyContact = (contact) => {
        setEmergencyContacts([...emergencyContacts, contact]);
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

export default AccountInfo;
