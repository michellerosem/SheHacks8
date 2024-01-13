import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';

const ClassPage = ({ navigation }) => {
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    // Prompt for the class title
    Alert.prompt(
      'Enter Class Title',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: title => {
            // Prompt for location
            Alert.prompt(
              'Enter Location',
              '',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: location => {
                    setClasses([...classes, { title, location }]);
                  },
                },
              ],
              'plain-text',
            );
          },
        },
      ],
      'plain-text',
    );
  };

  const openLocation = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open this URL: " + url);
      }
    });
  };

  return (
    <View style={styles.container}>
      {classes.map((classItem, index) => (
        <Button
          key={index}
          title={classItem.title}
          onPress={() => openLocation(classItem.location)}
        />
      ))}
      <Button title="Add Class" onPress={handleAddClass} />
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
  button: {
    marginBottom: 20,
    width: '100%',
  },
});

export default ClassPage;
