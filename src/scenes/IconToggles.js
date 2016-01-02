import React, { Component, View, Image } from 'react-native';
import { Avatar, Subheader, COLOR, IconToggle, Icon } from 'react-native-material-design';

export default class IconToggles extends Component {

    render() {
        return (
            <View>
                <Subheader text="Icons"/>
                <View style={styles.avatarContainer}>
                    <IconToggle color="paperGrey900">
                        <Icon
                            name="business"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperGrey900">
                        <Icon
                            name="call"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperGrey900">
                        <Icon
                            name="call-made"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
                </View>
                <Subheader text="Icons with Color"/>
                <View style={styles.avatarContainer}>
                    <IconToggle color="paperRed">
                        <Icon
                            name="chat"
                            color="paperRed"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperBrown">
                        <Icon
                            name="clear-all"
                            color="paperBrown"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperOrange">
                        <Icon
                            name="location-on"
                            color="paperOrange"
                            style={styles.icon}
                        />
                    </IconToggle>
                </View>
                <Subheader text="Contrasting Icons"/>
                <View style={styles.avatarContainer}>
                    <IconToggle color="googleBlue">
                        <Icon
                            name="present-to-all"
                            color="paperGrey"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperPink">
                        <Icon
                            name="speaker-phone"
                            color="paperTeal"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle color="paperAmber">
                        <Icon
                            name="swap-calls"
                            color="paperRed"
                            style={styles.icon}
                        />
                    </IconToggle>
                </View>
                <Subheader text="Icons with a badge"/>
                <View style={styles.avatarContainer}>
                    <IconToggle
                        color="paperGrey900"
                        badge={{ value: 8 }}
                    >
                        <Icon
                            name="live-help"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle
                        color="paperGrey900"
                        badge={{
                            value: 10,
                            backgroundColor: '#000000'
                        }}>
                        <Icon
                            name="import-export"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
                    <IconToggle
                        color="paperGrey900"
                        badge={{
                            value: 10,
                            backgroundColor: '#ffffff',
                            textColor: '#000000'
                        }}
                    >
                        <Icon
                            name="forum"
                            color="paperGrey900"
                            style={styles.icon}
                        />
                    </IconToggle>
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
    },
    icon: {
        margin: 16
    }
};