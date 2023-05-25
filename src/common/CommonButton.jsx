import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({ onPress, title, bgcolor,textColor,fontWeight }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: bgcolor,
                justifyContent: 'center',
                alignItems: 'center',
                width:'85%',
                height:50,
                borderRadius:50,
                alignSelf:'center',
                marginTop:50,
            }} onPress={()=>{
                onPress();
            }}>
            <Text style={{color:textColor,fontWeight:fontWeight}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({})