import React, { Component, PropTypes, View, Text, Image, IntentAndroid } from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class Welcome extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    };

    render() {
        const { navigator } = this.context;
        const theme = AppStore.getState().theme;

        return (
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('./../img/welcome.jpg')} />}
                        overlay
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Welcome</Text>
                        <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>React Native Material Design</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text>To get started, vist the documentation over at Github! This page is an example of the Card component.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary={theme} text="GO TO GITHUB" onPress={() => IntentAndroid.openURL('https://github.com/react-native-material-design/react-native-material-design')} />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>If you find any issues or potential improvements please submit an issue on the GitHub repository page.</Text>
                    </Card.Body>
                </Card>
                <Button text="Go to child component" primary={theme} onPress={() => { navigator.forward() }} />
            </View>
        );
    }

}