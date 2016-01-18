import React, { Component, View, ScrollView, ProgressBarAndroid, Image } from 'react-native';
import { Subheader, Divider, List, Icon, Avatar, COLOR, IconToggle } from 'react-native-material-design';

import AppStore from '../stores/AppStore';

export default class ListExample extends Component {

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <Subheader text='Basic Text Example' />
                {data['text'].map((text, i) => (
                    <List
                        key={i}
                        primaryText={text}
                    />
                ))}
                {data['text-secondary'].map((list, i) => (
                    <List
                        key={i}
                        primaryText={list.primaryText}
                        secondaryText={list.secondaryText}
                    />
                ))}
                <Subheader text='Left Avatar' />
                {data['avatar-text'].map((item, i) => (
                    <List
                        key={i}
                        primaryText={item.primaryText}
                        secondaryText={item.secondaryText}
                        leftAvatar={<Avatar image={<Image source={{ uri: item.avatar }} />} />}
                    />
                ))}
                <List
                    leftComponent={
                        <IconToggle color="paperGrey900">
                            <Icon
                                name="business"
                                color="paperGrey900"
                            />
                        </IconToggle>
                    }
                    primaryText="Some component"
                />
            </ScrollView>
        );
    };
}

const data = {
    text: ['Inbox', 'Sent Items'],
    'text-secondary': [{
        primaryText: 'Spam',
        secondaryText: 'Any items here have been considered junk'
    }, {
        primaryText: 'Drafts',
        secondaryText: 'View any unsent emails'
    }],
    'avatar-text': [
        {primaryText: 'Jsa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
        {primaryText: 'Pixeliris', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'},
        {primaryText: 'Ok', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'},
        {primaryText: 'Marcosmoralez', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'}
    ],

    //
    //single: {
    //    text: [
    //        {
    //
    //        },
    //        {
    //            primaryText: 'Starred'
    //        },
    //    ],
    //    iconText: [
    //        {
    //            primaryText: 'Inbox',
    //            leftIcon: 'inbox'
    //        },
    //        {
    //            primaryText: 'Outbox',
    //            leftIcon: 'outbox'
    //        },
    //        {
    //            primaryText: 'Trash',
    //            leftIcon: 'delete'
    //        },
    //        {
    //            primaryText: 'Spam',
    //            leftIcon: 'block-helper'
    //        }
    //    ],
    //    avatarText: [
    //        {primaryText: 'Jsa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
    //        {primaryText: 'Pixeliris', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg'},
    //        {primaryText: 'Ok', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'},
    //        {primaryText: 'Marcosmoralez', secondaryText: 'Supporting text',  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'},
    //    ]
    //},
    //two: {
    //    text: [
    //        {
    //            primaryText: 'Profile photo',
    //            secondaryText: 'Change your Google+ profile photo'
    //        },
    //        {
    //            primaryText: 'Show your status',
    //            secondaryText: 'Your status is visible to everyone you use with'
    //        }
    //    ],
    //    iconText: [
    //        {
    //            leftIcon: 'phone',
    //            primaryText: '(650) 555-1234',
    //            secondaryText: 'Mobile',
    //            rightIcon: 'message-text'
    //        },
    //        {
    //            primaryText: '(323) 555-6789',
    //            secondaryText: 'Work',
    //            rightIcon: 'message-text'
    //        },
    //        {
    //            leftIcon: 'email',
    //            primaryText: 'being99@qq.com',
    //            secondaryText: 'Personal',
    //        },
    //        {
    //            primaryText: 'benzhao1988@gmail.com',
    //            secondaryText: 'Work',
    //        }
    //    ],
    //    avatarText: [
    //        {
    //            name: 'Pixeliris',
    //            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg',
    //            subject: 'Brunch this Weekend?',
    //            body: 'Hello！ I’ll be your neighbourhood. How about we have branch together in my home this weekend.'
    //        },
    //        {
    //            name: 'Jsa',
    //            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    //            subject: 'Verify Email',
    //            body: 'Hey Ben Zhao,Please click the link below to verify your account: '
    //        },
    //        {
    //            name: 'Ok',
    //            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
    //            subject: 'Please confirm your email',
    //            body: 'Hi Ben,Thanks so much for joining Pinterest! To finish signing up, you just need to confirm that we got your email right.'
    //        },
    //        {
    //            name: 'Marcosmoralez',
    //            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg',
    //            subject: '开始使用Airbnb',
    //            body: 'Airbnb欢迎您,在Airbnb，您可以向世界上任何一个地方的当地人预订房间、民宅、甚至城堡。'
    //        },
    //        {
    //            name: 'Sindresorhus',
    //            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
    //            subject: 'Welcome to Genymotion - User account activation',
    //            body: 'Hi benzhao,Your user account with the e-mail address benzhao1988@gmail.com has been created. '
    //        }
    //    ],
    //    avatarIconText: [
    //        {
    //            name: 'Folders',
    //            files: [
    //                {
    //                    name: 'Photos',
    //                    time: 'Jan 9, 2014',
    //                    icon: 'folder'
    //                },
    //                {
    //                    name: 'Recipes',
    //                    time: 'Jan 17, 2014',
    //                    icon: 'folder'
    //                },
    //                {
    //                    name: 'Work',
    //                    time: 'Jan 28, 2014',
    //                    icon: 'folder'
    //                }
    //            ]
    //        },
    //        {
    //            name: 'Files',
    //            files: [
    //                {
    //                    name: 'Vacation itinerary',
    //                    time: 'Jan 20, 2014',
    //                    icon: 'file-document-box',
    //                    color: COLOR.paperBlue500.color
    //                },
    //                {
    //                    name: 'Kitchen remodel',
    //                    time: 'Jan 10, 2014',
    //                    icon: 'book',
    //                    color: COLOR.paperYellow500.color
    //                }
    //            ]
    //        }
    //    ]
    //},
    //three: {
    //    textIcon: [
    //        {
    //            primaryText: 'Notifications',
    //            secondaryText: 'Notify me about updates of app or games I downloaded'
    //        },
    //        {
    //            primaryText: 'Sound',
    //            secondaryText: 'Auto-update apps at anytime. Data charges my apply'
    //        }
    //    ]
    //}

};