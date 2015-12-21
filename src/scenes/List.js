import React, { Component, View, ProgressBarAndroid } from 'react-native';
import { Subheader, Divider, List, COLOR } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class ListExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        const { loading } = this.state;
        const theme = AppStore.getState().theme;

        if (loading) {
            return (
                <View style={styles.progress}>
                    <ProgressBarAndroid styleAttr="Horizontal" color={COLOR[`${theme}300`].color} />
                </View>
            );
        }

        return (
            <View>
                <Subheader text="Text only, single line" color={theme} />
                {data['text-only-single-line'].map((item) => {
                    return <List key={item} primaryText={item} />;
                })}
            </View>
        );

    }
}

const styles = {
    progress: {
        position: 'relative',
        top: -6
    }
};

const data = {
    'text-only-single-line': ['Inbox', 'Starred', 'Sent Mail', 'Drafts']
};