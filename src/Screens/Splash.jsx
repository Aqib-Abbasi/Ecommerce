import { StyleSheet, Text, Image, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            Dataget();
        }, 2000);
    }, []);
    const Dataget = async () => {
        navigation.navigate('Welcome')
        // const email= await AsyncStorage.getItem('Email');
        // if(email !== '' || email!==null || email!=undefined){
        //     navigation.navigate('Home')
        // }else{
        //     navigation.navigate('Login')
        // }
    }
    return (
        <View>
            <View style={styles.container}>
                {/* <View></View> */}
                <Image source={require('../Images/logo.png')} style={styles.logo} />
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}><ActivityIndicator size={50} color="#AA1F1F" /></Text>
                </View>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        height: '100%',
        // flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        resizeMode: 'contain',
        width: responsiveWidth(50),
        height: responsiveHeight(30),
        borderRadius:responsiveWidth(50)
    },
    bottomContainer: {

    },
    bottomText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

