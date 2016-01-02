import alt from '../alt';
import StatusBarAndroid from 'react-native-android-statusbar';
import { COLOR } from 'react-native-material-design';

class AppActions {

    updateRouteName(name) {
        return name;
    }

    updateTheme(name) {
        StatusBarAndroid.setHexColor(COLOR[`${name}700`].color);
        return name;
    }

}

export default alt.createActions(AppActions);