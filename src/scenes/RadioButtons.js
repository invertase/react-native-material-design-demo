import React, { Component, View } from 'react-native';
import { Subheader, RadioButtonGroup, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Checkboxes extends Component {

    render() {
        const theme = AppStore.getState().theme;

        return (
            <View>
                <Subheader text="Light Theme" />
                <RadioButtonGroup
                    primary={theme}
                    selected={1}
                    items={[{
                        value: 1, label: 'Selected by default'
                    }, {
                        value: 2, label: 'Default'
                    }, {
                        value: 3, label: 'Disabled', disabled: true
                    }, {
                        value: 4
                    }]}
                />
                <Subheader text="Dark Theme" />
                <View style={{ backgroundColor: COLOR.paperGrey900.color }}>
                    <RadioButtonGroup
                        primary={theme}
                        theme="dark"
                        selected={1}
                        items={[{
                            value: 1, label: 'Selected by default'
                        }, {
                            value: 2, label: 'Default'
                        }, {
                            value: 4, label: 'Disabled', disabled: true
                        }, {
                            value: 5
                        }]}
                    />
                </View>
            </View>
        );
    }
}
