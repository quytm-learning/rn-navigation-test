import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';
import {Icon} from "native-base";
import NotificationItem from "./NotificationItem";


export default class NotificationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notificationArray: [],
        };

        for (let i = 0; i < 20; i++) {
            this.state.notificationArray.push(
                {title: `Notification ${i}`, description: `This is notification description ${i}`}
            );
        }
    }

    navigateTo = () => {
        this.props.navigation.navigate('NotificationDetails');
    };

    render() {
        let notificationItemList = this.state.notificationArray.map((val, key) => {
            return <NotificationItem
                key={key}
                notificationKey={key}
                notificationValue={val}
                openNotificationDetails={this.navigateTo}
            />
        });

        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollContainer}>
                    {notificationItemList}
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scrollContainer: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8
    }
});
