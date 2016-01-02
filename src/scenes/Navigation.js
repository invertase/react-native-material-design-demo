import React, { Component, PropTypes, View, Text, Image } from 'react-native';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: AppStore.getState().routeName
        }
    }

    componentDidMount = () => {
        AppStore.listen(this.handleAppStore);
    };

    componentWillUnmount = () => {
        AppStore.unlisten(this.handleAppStore);
    };

    handleAppStore = (store) => {
        this.setState({
            route: store.routeName
        });
    };

    changeScene = (name, title) => {
        const { drawer, navigator } = this.context;
        const { route } = this.state;

        if (route !== name) {
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
        let { route } = this.state;
        if (!route) {
            route = 'Welcome';
        }

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
                        active: route === 'Welcome',
                        onPress: () => this.changeScene('Welcome'),
                        onLongPress: () => this.changeScene('Welcome')
                    }]}
                />

                <Drawer.Section
                    title="Components"
                    items={[{
                        icon: 'face',
                        value: 'Avatars',
                        label: '12',
                        active: route === 'Avatars',
                        onPress: () => this.changeScene('Avatars'),
                        onLongPress: () => this.changeScene('Avatars')
                    }, {
                        icon: 'label',
                        value: 'Buttons',
                        active: route === 'Buttons',
                        label: '8',
                        onPress: () => this.changeScene('Buttons'),
                        onLongPress: () => this.changeScene('Buttons')
                    }, {
                        icon: 'check-box',
                        value: 'Checkboxes',
                        label: '10',
                        active: route === 'Checkboxes',
                        onPress: () => this.changeScene('Checkboxes'),
                        onLongPress: () => this.changeScene('Checkboxes')
                    }, {
                        icon: 'label',
                        value: 'Dividers',
                        label: '10',
                        active: route === 'Dividers',
                        onPress: () => this.changeScene('Dividers'),
                        onLongPress: () => this.changeScene('Dividers')
                    }, {
                        icon: 'label',
                        value: 'Icon Toggles',
                        label: 'NEW',
                        active: route === 'Icon Toggles',
                        onPress: () => this.changeScene('IconToggles', 'Icon Toggles'),
                        onLongPress: () => this.changeScene('IconToggles', 'Icon Toggles')
                    }, {
                        icon: 'radio-button-checked',
                        value: 'Radio Buttons',
                        label: '8',
                        active: route === 'Radio Buttons',
                        onPress: () => this.changeScene('RadioButtons', 'Radio Buttons'),
                        onLongPress: () => this.changeScene('RadioButtons', 'Radio Buttons')
                    },
                    // {
                        //icon: 'list',
                        //value: 'List',
                        //label: 'NEW',
                        //active: route === 'List',
                        //onPress: () => this.changeScene('List'),
                        //onLongPress: () => this.changeScene('List')
                    // },
                    {
                        icon: 'label',
                        value: 'Subheaders',
                        label: '4',
                        active: route === 'Subheaders',
                        onPress: () => this.changeScene('Subheaders'),
                        onLongPress: () => this.changeScene('Subheaders')
                    }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        label: '24',
                        active: route === 'Change Theme',
                        onPress: () => this.changeScene('Themes', 'Change Theme'),
                        onLongPress: () => this.changeScene('Themes', 'Change Theme')
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