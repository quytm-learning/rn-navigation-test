import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class EventItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.props.openEventDetails}>

                    <View key={this.props.eventKey} style={styles.event}>

                        <Text style={styles.eventText}>{this.props.eventValue.title}</Text>
                        <Text style={styles.eventText}>{this.props.eventValue.description}</Text>

                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    event: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    eventText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    }
});
