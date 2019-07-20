import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
const PHOTOS_DIR = FileSystem.documentDirectory + 'photos2';

export default class GalleryScreen extends React.Component {
  state = {
    faces: {},
    images: {},
    photos: '',
    selected: [],
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos: photos[0] });
    console.log('state_photos', this.state.photos)
    console.log('photos', photos)

  };



  saveToGallery = async () => {
    const photos = this.state.selected;

    if (photos.length > 0) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        throw new Error('Denied CAMERA_ROLL permissions!');
      }

      const promises = photos.map(photoUri => {
        return MediaLibrary.createAssetAsync(photoUri);
      });

      await Promise.all(promises);
      alert('Successfully saved photos to user\'s gallery!');
    } else {
      alert('No photos to save!');
    }
  };

  renderPhoto = fileName =>
    <Photo
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
    />;

  render() {
    return (
      <View style={styles.container}>
        {this.renderPhoto(this.state.photos)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
