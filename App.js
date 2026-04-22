import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';

export default function App() {
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EditPro Max</Text>
      <Text style={styles.subtitle}>Strong & Fast Video Editor</Text>
      
      {!video? (
        <TouchableOpacity style={styles.button} onPress={pickVideo}>
          <Text style={styles.buttonText}>Select Video</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: video }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            shouldPlay
          />
          <TouchableOpacity style={styles.button} onPress={() => setVideo(null)}>
            <Text style={styles.buttonText}>Pick Another Video</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#a855f7',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#a855f7',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    backgroundColor: '#111',
  },
});
