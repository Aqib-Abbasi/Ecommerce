import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../common/CartItem';
import { addToWishlist, removeFromCart } from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
  const navigation =useNavigation()
  // const[cartlist,setCartList]=useState([]);
  const cartData = useSelector(state => state.reducer);
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (
        <FlatList data={cartData} renderItem={({ item, index }) => {
          return (
            <CartItem item={item} onRemoveCart={() => {
              dispatch(removeFromCart(index))

            }} onAddWishlist={() => {
              dispatch(addToWishlist(item))
            }} />
          )
        }} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Item Found In Cart</Text>
        </View>
      )}

      {/* ---------Checkout---------- */}
      {
        cartData.length > 0 ? (
          <View style={{ marginBottom: 71 }}>
            <CommonButton title={'Checkout'} bgcolor={'green'} textColor={'#fff'}
             onPress={()=>navigation.navigate('Checkout')}/>
          </View>
        ) : null
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})