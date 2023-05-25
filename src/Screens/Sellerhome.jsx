import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import CustomInputText from '../common/CustomInputText'
import React, { useState, useEffect } from 'react'
import CommonButton from '../common/CommonButton'
import axios from 'axios'
import { launchImageLibrary } from 'react-native-image-picker';

const Sellerhome = ({ route }) => {
    const id = route.params;
    const [productName, setPrductName] = useState('')
    const [price, setPrice] = useState('')
    const [uploadimage, setUploadImage] = useState('')
    //////////
    // useEffect(() => {
    //     axios.get(`http://192.168.18.151:4001/get/${id}`)
    //         .then(res => {
    //             setPrductName(res.data[0].productName);
    //             setPrice(res.data[0].price)
    //             setUploadImage(res.data[0].image)
    //         })

    // }, [id])

    // Image Upload code
    const chooseImage = async () => {
        try {
            const options = {
                title: 'Select Image',
                type: 'library',
                options: {
                    maxHeight: 200,
                    maxWidth: 200,
                    selectionLimit: 0,
                    mediaType: 'photo',
                    includeBase64: false,
                },

            };
            const images = await launchImageLibrary(options)
            setUploadImage(images.assets[0])
        } catch (error) {

        }

    };
    const saveData = async () => {

        const formdata = new FormData();
        formdata.append('productName', productName)
        formdata.append('price', price)
        formdata.append('image', {
            uri: uploadimage.uri,
            type: uploadimage.type,
            name: uploadimage.fileName,
        });
        try {
            // if (!id) {
            await axios.post('http://192.168.18.151:4001/insert', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

            })
            setPrice(''),
                setPrductName('');
            setUploadImage('')
            // }
            // // else {
            // //     await axios.put(`http://192.168.18.151:4001/put/${id}`, formdata)

            // // }


        } catch (error) {
            console.log(error)

        }



    }
    return (

        <ScrollView style={{ flex: 1 }}>

            <CustomInputText placeholder={'Enter Product Name'} icon={require('../Images/product.png')}
                value={productName} onChangeText={txt => setPrductName(txt)} />
            <CustomInputText placeholder={'Enter Price'} icon={require('../Images/price.png')}
                value={price} onChangeText={txt => setPrice(txt)} />
            <View style={{
                width: '85%', height: 50,
                borderWidth: 0.5, borderRadius: 10,
                alignSelf: 'center', marginTop: 30,
                flexDirection: 'row', alignItems: 'center',
                paddingLeft: 20, paddingRight: 28, backgroundColor: '#E9E9ED'
            }}>
                <Image source={require('../Images/image.png')} style={{ width: 25, height: 25 }} />
                <TouchableOpacity onPress={chooseImage}
                    style={{ width: '100%' }}>
                    <Text style={{ paddingLeft: 20 }}>{uploadimage ? 'Image Uploaded' : "ChoseImage"}</Text>
                </TouchableOpacity>

            </View>

            <CommonButton title={id ? 'Update' : "Save"} bgcolor={'#000'} textColor={'#fff'} onPress={() => { saveData() }} />



        </ScrollView>

    )
}

export default Sellerhome

const styles = StyleSheet.create({})