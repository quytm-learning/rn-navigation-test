import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from 'native-base';
import EventList from "../components/EventList"
import EventDetails from "../components/EventDetails"
import {StackNavigator} from "react-navigation";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
