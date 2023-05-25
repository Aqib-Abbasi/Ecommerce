import { StyleSheet, Text, View, FlatList, Image, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CommonButton from '../common/CommonButton';

const Checkout = () => {
  const carData = useSelector(state => state.reducer);
  const addressList = useSelector(state => state.AddressReducer);
  const[selectAddress,setSelectAddress]=useState('')
  const getTotal = () => {
    let tempTotal = ''
    carData.map((product, index) => {
      tempTotal = tempTotal + product.price
    })
    return tempTotal;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList data={carData} renderItem={({ item, index }) => {
            return (
              <View style={{ width: '100%', height: 70, flexDirection: 'row', marginTop: 20 }}>
                <Image source={{ uri: `http://192.168.18.151:4001/upload/${item.image}` }} style={{ width: 70, height: 70, marginLeft: 20 }} />
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <Text style={{ marginTop: 10 }}>{'PKR : ' + item.price}</Text>
                </View>
              </View>
            )

          }} />
        </View>
        {/* -------------Total-------------- */}
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 30,
          borderTopWidth: .5, height: 50, borderTopColor: '#8e8e8e'
        }}>
          <Text>Total :</Text>
          <Text>{'PKR : ' + getTotal()}</Text>
        </View>
        {/* ----------------Address------------- */}

     
                <View>
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
                            alignSelf:'center',
                            alignItems:'center',
                            justifyContent:'center'}} onPress={()=>{
                              setSelectAddress('City :'+item.city + '  Street# :'+ item.street + '  Zip :' + item.zip)

                            }}>
                                <Image source={require('../Images/select.png')} style={{ width: 23, height: 23 }} />
                            </TouchableOpacity>
                        </View>
                    )
                }} />
                </View>
                <Text style={{margin:20,fontSize:18}}>Select Address</Text>
                <Text style={{marginLeft:20,fontSize:16}}>{selectAddress=='' ? 'Please select address from above':selectAddress}</Text>
              <CommonButton bgcolor={'#000'} title={'Place Order'} textColor={'white'} onPress={()=>{}}/>
      </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({})