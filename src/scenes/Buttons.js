import React, { Component, PropTypes, View, Text, IntentAndroid, InteractionManager, Alert, TouchableNativeFeedback } from 'react-native';
import { Button, Subheader, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Buttons extends Component {

    render() {
        const theme = AppStore.getState().theme;

        return (
            <View>
                <Subheader text="Light Theme"/>
                <View style={styles.content}>
                    <Button text="NORMAL" primary={theme} />
                    <Button text="NORMAL RAISED" primary={theme} raised/>
                    <Button text="DISABLED" primary={theme} disabled/>
                    <Button text="DISABLED RAISED" primary={theme} disabled raised/>
                </View>
                <Subheader text="Dark Theme"/>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16
                    }}>
                    <Button text="NORMAL FLAT" primary={theme} theme="dark"/>
                    <Button text="DISABLED FLAT" primary={theme} disabled theme="dark"/>
                    <Button text="NORMAL RAISED" primary={theme} theme="dark" raised/>
                    <Button text="DISABLED RAISED" primary={theme} disabled theme="dark" raised/>
                </View>
            </View>
        );
    }

}

const styles = {
    content: {
        padding: 16
    }
};