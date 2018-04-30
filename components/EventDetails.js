import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';
import {Icon} from "native-base";


export default class EventDetails extends React.Component {

    // navigateTo() {
    //     alert("hello navigate");
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Event list</Text>
                {/*<TouchableOpacity>*/}
                    {/*<Button*/}
                        {/*onPress={() => {alert("hello navigate")}}*/}
                        {/*title="Learn More"*/}
                        {/*color="#841584"*/}
                        {/*accessibilityLabel="Learn more about this purple button"*/}
                    {/*/>*/}
                {/*</TouchableOpacity>*/}
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
