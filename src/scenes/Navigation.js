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
                    case 'IconToggles':
                        component = require('./IconToggles').default;
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
                        <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>React Native Material Design</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Welcome',
                        onPress: () => this.changeScene('Welcome')
                    }]}
                />

                <Drawer.Section
                    title="Components"
                    items={[{
                        icon: 'face',
                        value: 'Avatars',
                        onPress: () => this.changeScene('Avatars')
                    }, {
                        icon: 'label',
                        value: 'Buttons',
                        onPress: () => this.changeScene('Buttons')
                    }, {
                        icon: 'check-box',
                        value: 'Checkboxes',
                        onPress: () => this.changeScene('Checkboxes')
                    }, {
                        icon: 'label',
                        value: 'Dividers',
                        onPress: () => this.changeScene('Dividers')
                    }, {
                        icon: 'label',
                        value: 'Icon Toggles',
                        label: 'NEW',
                        onPress: () => this.changeScene('IconToggles', 'Icon Toggles')
                    }, {
                        icon: 'radio-button-checked',
                        value: 'Radio Buttons',
                        onPress: () => this.changeScene('RadioButtons', 'Radio Buttons')
                    }, {
                        icon: 'list',
                        value: 'List',
                        label: 'NEW',
                        onPress: () => this.changeScene('List', 'List')
                    }, {
                        icon: 'label',
                        value: 'Subheaders',
                        onPress: () => this.changeScene('Subheaders')
                    }]}
                />
                <Divider />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        onPress: () => this.changeScene('Themes', 'Change Theme')
                    }]}
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