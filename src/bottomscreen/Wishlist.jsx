import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../common/CartItem';
import { addItemToCart, removeFromWishlist } from '../redux/actions/Actions';

const Wishlist = () => {
  const cartData=useSelector(state=>state.reducer2);
  const dispatch = useDispatch()
  return (
    <View style={{flex:1}}>
      {cartData.length?(
        <FlatList data={cartData} renderItem={({item,index})=>{
          return(
            <CartItem item={item} isWishlist={'aaa'} onRemoveFromWishlist={()=>{
              dispatch(removeFromWishlist(index))
            }} onAddToCart={()=>{
              dispatch(addItemToCart(item))
            }}/>
          )
        }}/>
      ):(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>No Item Found In Wishlist</Text>
      </View>
      )}
      
      
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({})