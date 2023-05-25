import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { responsiveHeight } from 'react-native-responsive-dimensions';
const Dashboard = ({navigation}) => {
    const [data, setData] = useState([]);

    const Getdata = async () => {
        const response = await axios.get("http://192.168.18.151:4001/get")
        setData(response.data.length)
    }
    useEffect(() => {
        Getdata()
    }, []);
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
            <ImageBackground source={require('../../src/Images/dash.jpg')} style={{ width:'100%',
        height:'100%',}}>
             <TouchableOpacity onPress={() => navigation.navigate('Productview')} style={{
                backgroundColor: '#000', height: '10%', marginVertical: 20,marginHorizontal: 10,
                width: '50%', justifyContent: 'center', alignSelf:'center', borderRadius:50,marginTop:responsiveHeight(30)
            }}>

                <Text style={{ alignSelf: 'center',color:'#fff',fontSize:20,fontWeight:500}}>View Product</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Sellerhome')} style={{
                backgroundColor: '#000', height: '10%', marginVertical: 20, marginHorizontal: 10,
                width: '50%', justifyContent: 'center',alignSelf:'center',borderRadius:50
            }}>

                <Text style={{ alignSelf: 'center',color:'#fff',fontSize:20,fontWeight:500 }}>Add New Product</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: '#000', height: '10%',alignSelf:'center', marginVertical: 20, marginHorizontal: 9,
                width: '50%', justifyContent: 'center',borderRadius:50
            }}>

                <Text style={{ alignSelf: 'center',color:'#fff',fontSize:20,fontWeight:500 }}>Total Product  {data}</Text>

            </TouchableOpacity>
            </ImageBackground>
           
          

        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({})