import React, { Component, View, ProgressBarAndroid, Image } from 'react-native';
import { Subheader, Divider, List, Icon, Avatar, COLOR } from 'react-native-material-design';

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
                <Subheader text="Single Line" color={theme} />
                {data['single-line'].map((item, i) => {
                    return (
                        <List
                            key={i}
                            primaryText={item}
                        />
                    );
                })}

                <Subheader text="Single Line with Icon" color={theme} />
                {data['single-line-with-icon'].map((item, i) => {
                    return (
                        <List
                            key={i}
                            primaryText={item.text}
                            leftIcon={{
                                icon: item.icon
                            }}
                        />
                    );
                })}

                <Subheader text="Single Line with Avatar & Icon" color={theme} />
                {data['single-line-with-avatar-and-icon'].map((item, i) => {
                    return (
                        <List
                            key={i}
                            primaryText={item.text}
                            leftAvatar={
                                <Avatar image={<Image source={{ uri: 'http://facebook.github.io/react-native/img/opengraph.png?2' }} />} />
                            }
                            rightIcon={{
                                icon: item.icon,
                                onPress: () => {}
                            }}
                        />
                    );
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
    'single-line': ['Inbox', 'Starred', 'Sent Mail', 'Drafts'],
    'single-line-with-icon': [
        {
            text: 'Inbox', icon: 'inbox'
        }, {
            text: 'Starred', icon: 'star'
        }, {
            text: 'Sent Mail', icon: 'send'
        }, {
            text: 'Drafts', icon: 'drafts'
        }
    ],
    'single-line-with-avatar-and-icon': [
        {
            text: 'Inbox', icon: 'inbox'
        }, {
            text: 'Starred', icon: 'star'
        }, {
            text: 'Sent Mail', icon: 'send'
        }, {
            text: 'Drafts', icon: 'drafts'
        }
    ]
};