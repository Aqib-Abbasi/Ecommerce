import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Main from '../bottomscreen/Main'
import Search from '../bottomscreen/Search'
import Cart from '../bottomscreen/Cart'
import Wishlist from '../bottomscreen/Wishlist'
import Profile from '../bottomscreen/Profile'
import {useSelector} from "react-redux"
const Home = () => {
    const [selectTab, setSelectTab] = useState('')
    const data = useSelector(state=>state)
    // console.log(data)
    return (
        <View style={{ flex: 1 }}>
            {selectTab == 0 ? (<Main />) : selectTab == 1 ? (<Search />) : selectTab == 2 ? (<Cart />) : selectTab == 3 ? (<Wishlist />) : (<Profile />)}
            <View style={{
                width: '100%',
                height: 55,
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => setSelectTab(0)}>
                    <Image source={require('../Images/home.png')} style={{ width: 24, height: 24, tintColor: selectTab == 0 ? '#489689' : '#000' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => setSelectTab(1)}>
                    {/* tintColor: selectTab == 1 ? '#489689' : '#000' */}
                    <Image source={require('../Images/search.png')} style={{ width: 24, height: 24, tintColor: selectTab == 1 ? '#489689' : '#000' }} />
                </TouchableOpacity>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        width: 44,
                        height: 44,
                        backgroundColor: selectTab == 2 ? '#489689' : '#000',
                        borderRadius: 22,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => setSelectTab(2)}>
                        <Image source={require('../Images/cart.png')} style={{ width: 24, height: 24, tintColor: '#fff' }} />

                        <View style={{
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            position: 'absolute',
                            top: 1,
                            justifyContent:'center',
                            alignItems:'center',
                            right: 1,
                            borderRadius: 10
                        }}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>{data.reducer.length}</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={() => setSelectTab(3)}>
                    <Image source={require('../Images/love.png')} style={{ width: 30, height: 30, tintColor: selectTab == 3 ? '#489689' : '#000' }} />

                    <View style={{
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            position: 'absolute',
                            top: 15,
                            justifyContent:'center',
                            alignItems:'center',
                            right: 15,
                            borderRadius: 10
                        }}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>{data.reducer2.length}</Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '20%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => setSelectTab(4)}>
                    <Image source={require('../Images/user.png')} style={{
                        width: 24, height: 24,
                        tintColor: selectTab == 4 ? '#489689' : '#000'
                    }} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})