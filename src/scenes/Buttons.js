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
                    <Button value="NORMAL" primary={theme} />
                    <Button value="NORMAL RAISED" primary={theme} raised={true}/>
                    <Button value="DISABLED" primary={theme} disabled={true}/>
                    <Button value="DISABLED RAISED" primary={theme} disabled={true} raised={true}/>
                </View>
                <Subheader text="Dark Theme"/>
                <View style={{
                        backgroundColor: COLOR.paperGrey900.color,
                        padding: 16
                    }}>
                    <Button value="NORMAL FLAT" primary={theme} theme="dark"/>
                    <Button value="DISABLED FLAT" primary={theme} disabled={true} theme="dark"/>
                    <Button value="NORMAL RAISED" primary={theme} theme="dark" raised={true}/>
                    <Button value="DISABLED RAISED" primary={theme} disabled={true} theme="dark" raised={true}/>
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