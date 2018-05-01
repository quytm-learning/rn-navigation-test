import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './screen/MainScreen'
import Login from "./screen/Login";

export default class App extends React.Component {
    render() {
        return (
            <AppStackNavigator/>
        );
    }
}

const AppStackNavigator = StackNavigator({

    MainScreen: {
        screen: MainScreen
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }

}, {
    // initialRouteName: 'MainScreen'
    initialRouteName: 'Login'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
