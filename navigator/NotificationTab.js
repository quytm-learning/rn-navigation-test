import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "native-base";
import EventDetails from "../components/event/EventDetails";
import {StackNavigator} from "react-navigation";
import EventList from "../components/event/EventList";

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

    Main: {
        screen: EventList
    },
    EventDetails: {
        screen: EventDetails
    }
}, {
    headerMode: 'none'
});
