import React, { Component, View } from 'react-native';
import { Subheader } from 'react-native-material-design';

export default class Subheaders extends Component {

    render() {
        return (
            <View>
                <Subheader text="Normal Subheader"/>
                <Subheader text="Normal Subheader with color" color="paperRed" />
                <Subheader text="Normal Subheader" inset />
                <Subheader text="Normal Subheader with color" color="paperOrange" inset />
            </View>
        );
    }
}
