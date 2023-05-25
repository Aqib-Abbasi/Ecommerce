import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInputText from '../common/CustomInputText'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [mobile, setmobile] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const saveData = async () => {
        await AsyncStorage.setItem('Name', name);
        await AsyncStorage.setItem('Email', email)
        await AsyncStorage.setItem('Mobile', mobile)
        await AsyncStorage.setItem('Password', password)
        navigation.goBack();

    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image source={require('../Images/logo.png')}
                style={{
                    width: 60, height: 60, alignSelf: 'center', marginTop: 5,borderRadius:50
                    // marginTop: 100 marginTop: 24,
                }} />
            <Text style={{
                alignSelf: 'center',
                fontSize: 24, fontWeight: '600'
                , color: '#000'
            }}>
                Signup
            </Text>
            <CustomInputText placeholder={'Enter User Name'} icon={require('../Images/user.png')}
                value={name} onChangeText={txt => setName(txt)} />
            <CustomInputText placeholder={'Enter Email Id'} icon={require('../Images/mail.png')}
                value={email} onChangeText={txt => setEmail(txt)} />
            <CustomInputText placeholder={'Enter Mobile Number'} icon={require('../Images/mobile.png')} value={mobile}
                onChangeText={txt => setmobile(txt)} keyboardType={'number-pad'} />

            <CustomInputText placeholder={'Enter Password'} icon={require('../Images/lock.png')} type={'password'}
                value={password} onChangeText={txt => setPassword(txt)} />
            <CommonButton title={'Signup'} bgcolor={'#000'} textColor={'#fff'} onPress={() => { saveData() }} />

            <Text style={{
                fontSize: 18,
                fontWeight: '800', marginTop: 20,
                alignSelf: 'center', textDecorationLine: 'underline'
            }} onPress={() => navigation.goBack()} >
                Alreday have account
            </Text>
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({})