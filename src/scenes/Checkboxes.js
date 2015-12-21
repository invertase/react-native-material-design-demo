import React, { Component, View } from 'react-native';
import { Subheader, CheckboxGroup, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Checkboxes extends Component {

    render() {
        const theme = AppStore.getState().theme;

        return (
            <View>
                <Subheader text="Light Theme" />
                <CheckboxGroup
                    primary={theme}
                    checked={[1, 3]}
                    items={[{
                        value: 1, label: 'Checked by default'
                    }, {
                        value: 2, label: 'Default'
                    }, {
                        value: 3, label: 'Checked but disabled', disabled: true
                    }, {
                        value: 4, label: 'Disabled', disabled: true
                    }, {
                        value: 5
                    }]}
                />
                <Subheader text="Dark Theme" />
                <View style={{ backgroundColor: COLOR.paperGrey900.color }}>
                    <CheckboxGroup
                        primary={theme}
                        theme="dark"
                        checked={[1, 3]}
                        items={[{
                            value: 1, label: 'Checked by default'
                        }, {
                            value: 2, label: 'Default'
                        }, {
                            value: 3, label: 'Checked but disabled', disabled: true
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
