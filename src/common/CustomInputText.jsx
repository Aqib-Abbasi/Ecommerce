import { StyleSheet, TextInput, Image, View } from 'react-native'
import React from 'react'

const CustomInputText = ({ value, onChangeText, placeholder, icon, type,keyboardType }) => {
    return (
        <View style={{
            width: '85%', height: 50,
            borderWidth: 0.5, borderRadius: 10,
            alignSelf: 'center', marginTop: 30,
            flexDirection: 'row', alignItems: 'center',
            paddingLeft: 20, paddingRight: 28
        }}>

            <Image source={icon} style={{ width: 25, height: 25 }} />
            <TextInput placeholder={placeholder} value={value} keyboardType={keyboardType?keyboardType:'default'} onChangeText={txt=>{onChangeText(txt)}}
            secureTextEntry={type ? true:false}
            style={{marginLeft:10}} autoCapitalize='none'/>
        </View>
    )
}

export default CustomInputText

const styles = StyleSheet.create({})