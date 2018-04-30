import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class NotificationItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.props.openNotificationDetails}>

                    <View key={this.props.notificationKey} style={styles.notification}>

                        <Text style={styles.notificationText}>{this.props.notificationValue.title}</Text>
                        <Text style={styles.notificationText}>{this.props.notificationValue.description}</Text>

                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notification: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    notificationText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    }
});
