import React, { Component, View, Text, WebView } from 'react-native';

export default class Avatars extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    This component is an example of a nested route. It is a child of 'welcome'.
                </Text>
                <Text style={styles.text}>
                    The top menu trigger has been swapped out with a back arrow, which will take us to the
                    parent of this route.
                </Text>
                <WebView
                    ref={"webViewAndroidSample"}
                    automaticallyAdjustContentInsets={false}
                    url={"http://google.com"}
                    javaScriptEnabledAndroid
                    scalesPageToFit
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        margin: 16
    }
};