import React from 'react';
import _ from 'lodash';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,



    AsyncStorage
} from 'react-native';

import {NavigationActions} from 'react-navigation';

export default class Login extends React.Component {

    static navigationOptions = {};

    constructor(props) {
        super(props);
        if (AsyncStorage.getItem('isLogin') == 'yes') this.props.navigation.navigate('MainScreen');

        this.state = {
            username: '',
            password: ''
        }
    }

    // verifyInput = () => {
    //     // Todo: Login logic
    //     if (_.isEmpty(this.state.username) || _.isEmpty(this.state.password)) return false;
    //     else return true;
    // };

    verifyInput = () => {
        // Todo: verify
        if (_.isEmpty(this.state.username) || _.isEmpty(this.state.password)) return false;

        return true;
    };

    onSubmit = () => {
        if (this.verifyInput()) {
            // alert('Đăng nhập thành công');
            this.props.navigation.navigate('MainScreen');
            // Todo: send to server
            // fetch ... -> promise
            {// after login success
                AsyncStorage.setItem('isLogin', 'yes');

                // Reset Stack in Navigation
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'MainScreen'})
                    ]
                });
                this.props.navigation.dispatch(resetAction);

            }
        } else {
            alert('Tài khoản đăng nhập không đúng');
        }
    };

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/ic_logo.png')}
                    />
                </View>

                <View style={styles.formContainer}>

                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


                        <TextInput
                            style={styles.input}
                            // placeholderTextColor='rgba(0,0,0,0.5)
                            returnKeyType='go'
                            placeholder='Username or Email'
                            onChangeText={(username) => this.setState({username: username})}
                        />
                        <TextInput
                            style={styles.input}
                            returnKeyType='go'
                            secureTextEntry
                            placeholder='Password'
                            onChangeText={(password) => this.setState({password: password})}
                        />

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.onSubmit}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center'
    },
    formContainer: {
        flexGrow: 1,
        padding: 20
    },
    logo: {
        width: 100,
        height: 100
    },
    input: {
        height: 40,
        // backgroundColor: '#bdc3c7',
        color: '#34495e',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
