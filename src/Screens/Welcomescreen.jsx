import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native'
import React from 'react'
import CommonButton from '../common/CommonButton'
const Welcomescreen = ({ navigation }) => {
    return (
        <View >
            <ImageBackground source={(require('../../src/Images/back2.jpg'))} style={styles.imge}>
                <View style={styles.container}>
                    <CommonButton title={'Login as Seller'} bgcolor={'#000'} textColor={'#fff'} fontWeight={'bold'} onPress={() => navigation.navigate('Dashboard')} />


                    <CommonButton title={'Login as Buyer'} bgcolor={'#000'} textColor={'#fff'} fontWeight={'bold'} onPress={() => navigation.navigate('Login')}  />
                </View>
            </ImageBackground>
        </View >
    )
}

export default Welcomescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imge:{
        width:'100%',
        height:'100%',
    }

})