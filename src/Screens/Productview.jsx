import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import {responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import axios from 'axios';
const Productview = ({navigation}) => {
    const [data, setData] = useState('');

    const Getdata = async () => {
        const response = await axios.get("http://192.168.18.151:4001/get")
        // console.log(response.data)
        setData(response.data)
    }
    useEffect(() => {
        Getdata()
    }, []);
    const deleteContact = (id) => {
        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this beautiful box?",
            [
                // The "Yes" button
                {
                    text: "Yes",
                    onPress: () => {
                        axios.delete(`http://192.168.18.151:4001/delete/${id}`);
                        setTimeout(() => Getdata(), 500)
                    },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },
            ]
        );

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {data.length > 0 ?(
            <FlatList verticle showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <View style={{
                        marginTop: '5%',
                        width: responsiveWidth(85), height: responsiveHeight(45),
                        borderRadius: 10, elevation: 5, backgroundColor: '#fff',
                        marginBottom: 10
                    }}>
                        <Image source={{ uri: `http://192.168.18.151:4001/upload/${item.image}` }} style={{ width: responsiveWidth(85), height: responsiveHeight(30), borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                        <Text style={{paddingLeft: responsiveWidth(2),marginTop:responsiveHeight(2)}}>{item.productName}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: responsiveWidth(2), paddingRight: 10, marginTop: 10, alignItems: 'center' }}>
                            <Text>{'PKR : ' + item.price}</Text>
                            {/* <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                                onPress={()=>navigation.navigate('Sellerhome',item.id)} >
                                <Text style={{fontWeight:'bold'}}>Edit</Text>
                            </TouchableOpacity> */}
                          
                            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                                onPress={() => deleteContact(item.id)} >
                                <Text style={{fontWeight:'bold'}}>Delete</Text>
                            </TouchableOpacity>
                            
                        </View>

                    </View>

                )} />): (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text>No Item Found Plz Add Some Product</Text>
                    </View>
                  )}
        </View>
    )
}

export default Productview

const styles = StyleSheet.create({})

