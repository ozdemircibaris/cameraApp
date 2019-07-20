import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CameraScreen from './pages/cameraScreen';
import Main from './pages/main';
import PhotoView from './pages/photoView';
export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar key="root">
                    <Scene key="main">
                        <Scene key="mainApp" component={Main} />
                        <Scene key="cameraScreen" component={CameraScreen} />
                        <Scene key="photoView" component={PhotoView} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}
