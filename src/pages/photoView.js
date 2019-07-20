import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PhotoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> PhotoView </Text>
      </View>
    );
  }
}