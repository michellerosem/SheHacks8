import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

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

export default Menu;