// Navigate.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


const Navigate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => console.log('Home pressed')}
      />
      <Button
        title="Class"
        onPress={() => navigation.navigate('ClassPage')}
      />

        <Button
        title="Car"
        onPress={() => navigation.navigate('CarPage')}
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
