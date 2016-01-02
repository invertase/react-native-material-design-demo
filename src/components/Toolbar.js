import React, { Component, PropTypes, Text, View } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import AppStore from '../stores/AppStore';

export default class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: AppStore.getState().routeName,
            theme: AppStore.getState().theme,
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    componentDidMount = () => {
        AppStore.listen(this.handleAppStore);
    };

    componentWillUnmount() {
        AppStore.unlisten(this.handleAppStore);
    }

    handleAppStore = (store) => {
        this.setState({
            title: store.routeName,
            theme: store.theme
        });
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    render() {
        const { title, theme, counter } = this.state;
        const { onIconPress } = this.props;

        return (
            <MaterialToolbar
                title={title || 'Welcome'}
                primary={theme}
                icon='menu'
                onIconPress={onIconPress}
                actions={[{
                    icon: 'warning',
                    badge: { value: counter },
                    onPress: this.increment
                }]}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0
                }}
            />
        );
    }
}
