import React, { Component, View } from 'react-native';
import { Avatar, Subheader, COLOR } from 'react-native-material-design';

export default class Avatars extends Component {

    render() {
        return (
            <View>
                <Subheader text="Avatar with external image"/>
                <View style={styles.avatarContainer}>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg"/>
                    <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg"/>
                </View>

                <Subheader text="Avatar with MaterialIcon"/>
                <View style={styles.avatarContainer}>
                    <Avatar icon="event-note"/>
                    <Avatar icon="folder" backgroundColor="paperLime"/>
                    <Avatar icon="phone" backgroundColor="paperRed" />
                    <Avatar icon="adb" color="paperGrey900" backgroundColor="paperBlueGrey200" />
                </View>
                <Subheader text="Avatar with different sizes"/>
                <View style={styles.avatarContainer}>
                    <Avatar src="http://facebook.github.io/react-native/img/opengraph.png?2"/>
                    <Avatar size={60} src="http://facebook.github.io/react-native/img/opengraph.png?2"/>
                    <Avatar size={80} src="http://facebook.github.io/react-native/img/opengraph.png?2"/>
                    <Avatar size={120} src="http://facebook.github.io/react-native/img/opengraph.png?2"/>
                </View>
            </View>
        );
    }
}

const styles = {
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    }
};