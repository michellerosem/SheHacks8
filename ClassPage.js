import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking } from 'react-native';
import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Linking, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import expo-image-picker

const ClassPage = ({ navigation }) => {
  const [classes, setClasses] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
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
  const handlePickImage = async () => {
    // Request permission to access the photo library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission required', 'Permission to access the camera roll is required!');
      return;
    }

    // Launch the image picker
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    // Set the selected image
    setSelectedImage({ localUri: pickerResult.uri });
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
      <Button title="Upload Schedule" onPress={handlePickImage} /> {/* New button for uploading images */}
      {selectedImage && <Image source={{ uri: selectedImage.localUri }} style={styles.image} />} {/* Display the selected image */}
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
    image: { // Style for the image
      width: 300, // or the size you need
      height: 200, // or the size you need
      resizeMode: 'contain',
      marginTop: 20,
    },
  });

export default ClassPage;
