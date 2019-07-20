import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default class Photo extends React.Component {
  state = {
    faces: [],
    image: null,
  };
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }


  render() {
    const { uri } = this.props;
    return (
        <TouchableOpacity
          style={styles.pictureWrapper}
          activeOpacity={1}
        >
          <Image
            style={styles.picture}
            source={{ uri }}
          />
        </TouchableOpacity>
      );
  };
}

const styles = StyleSheet.create({
  picture: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});