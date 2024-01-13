import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AccountInfo = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([]);
    const [homeAddress, setHomeAddress] = useState('');

    const addEmergencyContact = (contact) => {
        setEmergencyContacts([...emergencyContacts, contact]);
      };

    return (
        <View>
            <Text>Emergency Contacts:</Text>
        </View>
    );
};
export default AccountInfo;