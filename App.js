import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RouterComp from './src/router';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <RouterComp />
            </View>
        )
    }
}
