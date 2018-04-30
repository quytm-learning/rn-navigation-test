import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';
import {Icon} from "native-base";


export default class NotificationDetails extends React.Component {

    // navigateTo() {
    //     alert("hello navigate");
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Notification list</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
