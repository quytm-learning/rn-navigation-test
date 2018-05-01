import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "native-base";
import NotificationDetails from "../components/notification/NotificationDetails";
import {StackNavigator} from "react-navigation";
import NotificationList from "../components/notification/NotificationList";

export default class HomeTab extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}}/>
        )
    };

    render() {
        return (
            <EventStackNavigator/>
        );
    }
}

const EventStackNavigator = StackNavigator({

    NotificationList: {
        screen: NotificationList
    },
    NotificationDetails: {
        screen: NotificationDetails
    }
}, {
    headerMode: 'none'
});
