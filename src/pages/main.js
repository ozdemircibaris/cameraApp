import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={{alignSelf: 'center', alignItems: 'center'}} onPress={() => Actions.cameraScreen()}>
                    <Text style={{ fontSize: 40 }}> Kamerayı aç </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
