import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddress } from '../redux/actions/Actions'

let addressList = []
const MyAddress = () => {
    const addressList = useSelector(state => state.AddressReducer);
    const dispatch=useDispatch()
    // console.log(addressList)
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%', height: 70, justifyContent: 'space-between',
                alignItems: 'center', flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 18, fontWeight: '600', left: 15 }}>Adress</Text>
                <TouchableOpacity style={{
                    marginRight: 15,
                    padding: 5,
                    borderWidth: .2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => navigation.navigate('AddAddress')}>
                    <Text>Add Address</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={addressList}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: '100%',
                            height: 60,
                            borderWidth: .5,
                            borderColor: '#8e8e8e',
                            alignSelf: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View>
                                <Text style={{ marginLeft: 20, }}>{`City : ${item.city}`}</Text>
                                <Text style={{ marginLeft: 20, }}>{`Street# : ${item.street}`}</Text>
                                <Text style={{ marginLeft: 20, marginBottom: 10 }}>{`Zip : ${item.zip}`}</Text>
                            </View>
                            <TouchableOpacity style={{width:40,
                            height:40,marginRight:10,
                            borderRadius:50,
                            backgroundColor:'red',
                            alignSelf:'center',
                            alignItems:'center',
                            justifyContent:'center'}} onPress={()=>{
                                dispatch(deleteAddress(index))
                            }}>
                                <Image source={require('../Images/delete.png')} style={{ width: 23, height: 23 }} />
                            </TouchableOpacity>
                        </View>
                    )
                }} />
        </View>
    )
}

export default MyAddress

const styles = StyleSheet.create({})