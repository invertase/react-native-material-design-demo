export default {

    welcome: {
        name: 'Welcome',
        component: require('./scenes/Welcome').default,

        children: {
            example: {
                name: 'Child Example',
                component: require('./scenes/NestedExample').default
            }
        }
    },

    avatars: {
        name: 'Avatars',
        component: require('./scenes/Avatars').default
    },

    buttons: {
        name: 'Buttons',
        component: require('./scenes/Buttons').default
    },

    checkboxes: {
        name: 'Checkboxes',
        component: require('./scenes/Checkboxes').default
    },

    dividers: {
        name: 'Dividers',
        component: require('./scenes/Dividers').default
    },

    list: {
        name: 'List',
        component: require('./scenes/List').default
    },

    'icon-toggles': {
        name: 'Icon Toggles',
        component: require('./scenes/IconToggles').default
    },

    'radio-buttons': {
        name: 'Radio Buttons',
        component: require('./scenes/RadioButtons').default
    },

    subheaders: {
        name: 'Subheaders',
        component: require('./scenes/Subheaders').default
    },

    themes: {
        name: 'Change Theme',
        component: require('./scenes/Themes').default
    }
}