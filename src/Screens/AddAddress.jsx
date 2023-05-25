import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInputText from '../common/CustomInputText';
import CommonButton from '../common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const Addaddress = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [zip, setZip] = useState()

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%', height: 70, justifyContent: 'space-between',
                alignItems: 'center', flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    marginLeft: 25,
                    padding: 5,
                    borderWidth: .2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => navigation.goBack()}>
                    <Image source={require('../Images/back.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>


            </View>
            {/* Add field */}
            <CustomInputText placeholder={'Enter City'}
                icon={require('../Images/buildings.png')} value={city}
                onChangeText={txt => setCity(txt)} />

            {/* ------------------------- */}

            <CustomInputText placeholder={'Enter Street/House#'}
                icon={require('../Images/pin.png')} value={street}
                onChangeText={txt => setStreet(txt)} />

            {/* ------------------------- */}

            <CustomInputText placeholder={'Enter Zip'} keyboardType={'number-pad'}
                icon={require('../Images/zip.png')} value={zip}
                onChangeText={txt => setZip(txt)} />
            <CommonButton title={'Save Address'} bgcolor='#000' textColor={'white'}
                onPress={() => {
                    if (city !== '' && street !== '' && zip !== '') {
                        dispatch(addAddress({ city: city, street: street, zip: zip }))
                    }
                    navigation.goBack();
                }} />
        </View>
    )
}

export default Addaddress

const styles = StyleSheet.create({})