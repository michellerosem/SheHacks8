// Navigate.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Navigate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Call Foot Patrol"
        onPress={() => console.log('Call Foot Patrol pressed')}
      />
      <Button
        title="Contact Emergency"
        onPress={() => console.log('Contact Emergency pressed')}
      />
      <Button
        title="Home"
        onPress={() => console.log('Home pressed')}
      />
      <Button
        title="Class"
        onPress={() => console.log('Class pressed')}
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
