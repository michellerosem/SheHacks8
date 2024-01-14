import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarPage = ({ carLocation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Car Location: Huron Flats</Text>
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