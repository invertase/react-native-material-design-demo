import React, { Component, View } from 'react-native';
import { Subheader, Divider } from 'react-native-material-design';

export default class Subheaders extends Component {

    render() {
        return (
            <View>
                <Subheader text="Normal Divider"/>
                <Divider />
                <Subheader text="Divider with inset"/>
                <Divider inset />
            </View>
        );
    }
}
