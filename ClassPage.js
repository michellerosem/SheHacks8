import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ClassPage = ({ navigation }) => {
  const [classes, setClasses] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddClass = () => {
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

  const openLocation = location => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission required', 'Permission to access the camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.container}>
      <View style={styles.coloredButtonContainer}>
        <Button title="Add Class" onPress={handleAddClass} color="#fff" />
      </View>

      {classes.map((classItem, index) => (
        <View key={index} style={styles.classButtonContainer}>
          <Button
            title={classItem.title}
            onPress={() => openLocation(classItem.location)}
            color="#fff"
          />
        </View>
      ))}

      <View style={styles.imageContainer}>
        <Button title="Upload Image" onPress={handlePickImage} color="#fff" />
        {selectedImage && (
          <Image source={{ uri: upload }} style={styles.image} />
        )}
      </View>

      <View style={styles.coloredButtonContainer}>
        <Button title="Upload Schedule" onPress={handlePickImage} color="#fff" />
      </View>
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
  coloredButtonContainer: {
    marginBottom: 15,
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#5a37b9', // Fill color for colored buttons
  },
  classButtonContainer: {
    marginBottom: 15,
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#BDB5D5', // Fill color for class buttons
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default ClassPage;
