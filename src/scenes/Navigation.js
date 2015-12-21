import React, { Component, PropTypes, View, Text, Image } from 'react-native';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    changeScene = (name, title) => {
        const { drawer, navigator } = this.context;

        if (AppStore.getState().routeName !== name) {
            try {
                let component;

                switch (name) {
                    case 'Welcome':
                        component = require('./Welcome').default;
                        break;
                    case 'Avatars':
                        component = require('./Avatars').default;
                        break;
                    case 'Buttons':
                        component = require('./Buttons').default;
                        break;
                    case 'Checkboxes':
                        component = require('./Checkboxes').default;
                        break;
                    case 'Dividers':
                        component = require('./Dividers').default;
                        break;
                    case 'List':
                        component = require('./List').default;
                        break;
                    case 'RadioButtons':
                        component = require('./RadioButtons').default;
                        break;
                    case 'Subheaders':
                        component = require('./Subheaders').default;
                        break;
                    case 'Themes':
                        component = require('./Themes').default;
                        break;
                    default:
                        console.warn('No scene found');
                        break;
                }

                if (component) {
                    AppActions.updateRouteName(title || name);
                    navigator.replace({ name, component: component });
                    drawer.closeDrawer();
                }

            } catch (e) {
                console.warn('An error occurred loading the scene:', e);
            }
        } else {
            drawer.closeDrawer();
        }
    };

    render() {
        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar size={80} src="http://facebook.github.io/react-native/img/opengraph.png?2"/>
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>React Native Material Design</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Item
                    icon="home"
                    value="Welcome"
                    onPress={() => this.changeScene('Welcome')}
                />
                <Drawer.Subheader value="Components" />
                <Drawer.Item
                    icon="face"
                    value="Avatars"
                    onPress={() => this.changeScene('Avatars')}
                />
                <Drawer.Item
                    icon="label"
                    value="Buttons"
                    onPress={() => this.changeScene('Buttons')}
                />
                <Drawer.Item
                    icon="check-box"
                    value="Checkboxes"
                    onPress={() => this.changeScene('Checkboxes')}
                />

                <Drawer.Item
                    icon="label"
                    value="Dividers"
                    onPress={() => this.changeScene('Dividers')}
                />
                <Drawer.Item
                    icon="radio-button-checked"
                    value="RadioButtons"
                    onPress={() => this.changeScene('RadioButtons')}
                />

                <Drawer.Item
                    icon="label"
                    value="Subheaders"
                    onPress={() => this.changeScene('Subheaders')}
                />
                <Divider />
                <Drawer.Subheader value="Config" />
                <Drawer.Item
                    icon="invert-colors"
                    value="Change Theme"
                    onPress={() => this.changeScene('Themes', 'Change Theme')}
                />
            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};