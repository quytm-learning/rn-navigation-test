import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import HomeTab from "../navigator/HomeTab";
import NotificationTab from "../navigator/NotificationTab";
import ProfileTab from "../navigator/ProfileTab"

export default class MainScreen extends React.Component {

    static navigationOptions = {
        // headerLeft: <Image />,
        title: 'Screen',
        // headerRight: (
        //     <Icon name={'ios-send-outline'}/>
        // )
    };

    render() {
        return (
            <AppTabNavigator/>
        );
    }
}

const AppTabNavigator = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab
        },
        NotificationTab: {
            screen: NotificationTab
        },
        ProfileTab: {
            screen: ProfileTab
        }
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: "#000",
            inactiveTintColor: "#999696",
            showLabel: false,
            showIcon: true
        }
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
