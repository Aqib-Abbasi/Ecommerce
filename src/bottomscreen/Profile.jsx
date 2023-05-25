import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

let name = '';
const Profile = () => {
  const navigation=useNavigation();
  useEffect(() => {
    getName();
  }, [])
  const getName = async () => {
    name = await AsyncStorage.getItem('Name')
    // console.log(name)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%', height: 70, justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row'
      }}>
        <Text style={{ fontSize: 18, fontWeight: '600', left: 15 }}>Profile</Text>
        <TouchableOpacity style={{
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../Images/setting.png')} style={{ width: 24, height: 24, right: 15 }} />
        </TouchableOpacity>
      </View>
      <Image source={require('../Images/user1.png')}
        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 30 }} />
      <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}>{name}</Text>

      {/* Adding Address Bar */}
      <TouchableOpacity style={{
        width: '90%', height: 50, alignSelf: 'center',
        borderBottomWidth: .3, marginTop: 20, borderBottomColor: '#8e8e8e',
        justifyContent: 'center'
      }} onPress={()=> navigation.navigate('MyAddress')}>
        <Text>My Address</Text>
      </TouchableOpacity>

      {/* Orders bar */}
      <TouchableOpacity style={{
        width: '90%', height: 50, alignSelf: 'center',
        borderBottomWidth: .3, borderBottomColor: '#8e8e8e',
        justifyContent: 'center'
      }}>
        <Text>My Orders</Text>
      </TouchableOpacity>

      {/* Offers bar */}
      <TouchableOpacity style={{
        width: '90%', height: 50, alignSelf: 'center',
        borderBottomWidth: .3, borderBottomColor: '#8e8e8e',
        justifyContent: 'center'
      }}>
        <Text>Offers</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})