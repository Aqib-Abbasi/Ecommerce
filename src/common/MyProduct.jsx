import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const MyProduct = ({ item, onAddToCart, onAddWishlist }) => {
    return (
        <View style={{
            width: '90%', height: 200,
            borderRadius: 10, elevation: 5, backgroundColor: '#fff',
            marginLeft: 20, marginBottom: responsiveHeight(10)
        }}>
            <Image source={{ uri: `http://192.168.18.151:4001/upload/${item.image}` }} style={{ width: '100%', height: '60%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <Text style={{marginLeft:'5%'}}>{item.productName}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10, alignItems: 'center' }}>
                <Text>{'PKR: ' + item.price}</Text>
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
                    onPress={() => { onAddToCart(item) }}>
                    <Text>Add to cart{item.pro}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: 'absolute',
                top: 10, right: 10, justifyContent: 'center', alignItems: 'center'
            }} onPress={() => { onAddWishlist(item) }}>
                <Image source={require('../Images/love.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
        </View>
    )
}

export default MyProduct

const styles = StyleSheet.create({})