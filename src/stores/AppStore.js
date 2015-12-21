import { AsyncStorage } from 'react-native';
import alt from '../alt';
import AppActions from '../actions/AppActions';

const THEME = '@Storage:theme';

class AppStore {

    constructor() {
        this.routeName = '';
        this.theme = null;

        this._loadTheme();

        this.bindListeners({
            handleUpdateRouteName: AppActions.UPDATE_ROUTE_NAME,
            handleUpdateTheme: AppActions.UPDATE_THEME
        });
    }

    _loadTheme = () => {
        AsyncStorage.getItem(THEME).then((value) => {
            this.theme = value || 'paperTeal';
        });
    };

    handleUpdateRouteName(name) {
        this.routeName = name;
    }


    handleUpdateTheme(name) {
        this.theme = name;
        AsyncStorage.setItem(THEME, name);
    }

}

export default alt.createStore(AppStore, 'AppStore');
