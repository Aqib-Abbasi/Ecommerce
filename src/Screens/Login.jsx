import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInputText from '../common/CustomInputText'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bademail, setbadEmail] = useState(false)
    const [badpassword, setbadpassword] = useState(false)

    const navigation = useNavigation()

    const login = () => {
        // navigation.navigate('Home')
        if (email == '') {
            setbadEmail(true)
        } else {
            setbadEmail(false)

            if (password == '') {
                setbadpassword(true)
            } else {
                setbadpassword(false)
                getData();
            }
        }
    }
    // const Validate = () => {
    //     if (email == '') {
    //         setbadEmail(true)
    //     } else {
    //         setbadEmail(false)
    //     }
    //     if (password == '') {
    //         setbadpassword(true)
    //     } else {
    //         setbadpassword(false)
    //     }
    //     getData();
    // }
    const getData = async () => {
        const mEmail = await AsyncStorage.getItem('Email');
        const mPassword = await AsyncStorage.getItem('Password');
        if(email==mEmail&&password==mPassword){
            navigation.navigate('Home')
        }else if(email!==mEmail){
            alert('You Enter Wrong Email')
        }else{
            alert('You Enter wrong Password ')
        }
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image source={require('../Images/logo.png')}
                style={{
                    width: 70, height: 70, alignSelf: 'center',
                    marginTop: 100,borderRadius:50
                }} />
            <Text style={{
                marginTop: 24, alignSelf: 'center',
                fontSize: 24, fontWeight: '600'
                , color: '#000'
            }}>
                Login
            </Text>
            <CustomInputText placeholder={'Enter Email Id'} icon={require('../Images/mail.png')} value={email} onChangeText={txt => setEmail(txt)} />
            {
                bademail === true && (
                    <Text style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>Please Enter Email</Text>
                )
            }
            <CustomInputText placeholder={'Enter Password'} icon={require('../Images/lock.png')} type={'password'} value={password} onChangeText={txt => setPassword(txt)} />
            {
                badpassword === true && (
                    <Text style={{ marginLeft: 30, marginTop: 10, color: 'red' }}>Please Enter Password</Text>
                )
            }
            <CommonButton title={'Login'} bgcolor={'#000'} textColor={'#fff'} onPress={() => { login() }} />

            <Text style={{
                fontSize: 18,
                fontWeight: '800', marginTop: 20,
                alignSelf: 'center', textDecorationLine: 'underline'
            }} onPress={() => navigation.navigate('Signup')} >
                Create New Account
            </Text>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({})