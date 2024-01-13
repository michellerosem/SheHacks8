import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Linking } from 'react-native';

const CarPage = ({ carLocation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Car Location: {carLocation.text}</Text>
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
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarPage;