import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { MyContext } from '../../App';


const Login: React.FC = () => {
    const navigation = useNavigation();
    const { infor, setInfor } = useContext(MyContext)
    const { email } = infor;
    const { password } = infor;
    const { isLogin } = infor;

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handle = () => {
        if (emailInput !== '' && passwordInput !== '') {
            setInfor({ ...infor, email: emailInput, password: passwordInput, isLogin: true })
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.Header}>Sign In</Text>
            <Text style={styles.Title}> Email ID </Text>
            <TextInput value={emailInput} onChangeText={(text) => setEmailInput(text)} placeholder='Nhập email' style={styles.TextInput} />
            <Text style={styles.Title}> Password </Text>
            <TextInput value={passwordInput} onChangeText={(text) => setPasswordInput(text)} placeholder='nhập mât khẩu' style={styles.TextInput} secureTextEntry />
            <TouchableOpacity style={styles.TouchSignIn}
                onPress={() => (
                    handle()
                )}
            >
                <Text style={styles.TextSignIn}> Sign In </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    Title: {
        marginTop: 15,
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    TextInput: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginHorizontal: 12,
        marginTop: 5,
        borderRadius: 5,
    },
    TextForGot: {
        color: 'blue',
        textAlign: 'right',
        marginTop: 10
    },
    TouchSignIn: {
        height: 60,
        backgroundColor: 'red',
        marginHorizontal: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    TextSignIn: {
        color: 'white',
        textAlign: 'center',

    },
    TextSignOr: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default Login;