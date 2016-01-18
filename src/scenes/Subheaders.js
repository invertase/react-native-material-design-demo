import React, { Component, View, Text } from 'react-native';
import { Subheader, Ripple } from 'react-native-material-design';

export default class Subheaders extends Component {

    render() {
        return (
            <View>
                <Subheader text="Normal Subheader"/>
                <Subheader text="Normal Subheader with color" color="paperRed" />
                <Subheader text="Normal Subheader" inset />
                <Subheader text="Normal Subheader with color" color="paperOrange" inset />

                <View style={{ flex: 1, height: 50, margin: .2 }}>
                    <Ripple>
                        <View style={{ flex: 1 }}>
                            <Text>Test</Text>
                        </View>
                    </Ripple>
                </View>
            </View>
        );
    }
}
