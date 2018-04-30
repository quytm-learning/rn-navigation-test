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
import EventItem from "./EventItem";


export default class EventList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventArray: [],
        };

        for (let i = 0; i < 20; i++) {
            this.state.eventArray.push(
                {title: `Event ${i}`, description: `This is event description ${i}`}
            );
        }
    }

    navigateTo = () => {
        this.props.navigation.navigate('EventDetails');
    };

    render() {
        let eventItemList = this.state.eventArray.map((val, key) => {
            return <EventItem
                key={key}
                eventKey={key}
                eventValue={val}
                openEventDetails={this.navigateTo}
            />
        });

        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollContainer}>
                    {eventItemList}
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
