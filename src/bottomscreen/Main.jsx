import { StyleSheet, Text, Image, FlatList, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { products } from '../Products'
import MyProduct from '../common/MyProduct'
import { useDispatch } from 'react-redux'
import { addItemToCart, addToWishlist } from '../redux/actions/Actions'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { responsiveHeight } from 'react-native-responsive-dimensions'
const Main = () => {
  const [data, setData] = useState('');

  const Getdata = async () => {
      const response = await axios.get("http://192.168.18.151:4001/get")
      // console.log(response.data)
      setData(response.data)
  }
  useEffect(() => {
      Getdata()
  }, []);
  const dispatch = useDispatch();
  const [categorylist, setcategoryList] = useState([]);
  const [tshirt, setTShirt] = useState([]);
  const [slippers, setSlippers] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jacket, setJacket] = useState([]);


  useEffect(() => {
    // console.log(products)
    let tempCategoty = [];
    products.category.map(item => {
      tempCategoty.push(item)
    });
    setcategoryList(tempCategoty);
    setTShirt(products.category[0].data)
    setSlippers(products.category[1].data)
    setShoes(products.category[2].data)
    setJacket(products.category[3].data)


  }, []);
  // const data=useSelector(state=>state)
  // console.log(data)

  return (
    <ScrollView style={{flex:1}}>
      <View style={{flex:1}}>
      <Header />

      <Image source={require('../Images/banner.jpg')}
        style={{
          width: '94%',
          height: 200,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 10
        }} />

      <View style={{ marginTop: 20 }}>
        <FlatList data={categorylist} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ padding: 10, borderRadius: 20, borderWidth: 1, marginLeft: 20, }}>
              <Text>{item.category}</Text>
            </TouchableOpacity>
          )
        }} />
      </View>
      {/* Category 1 */}
      {/* <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontWeight: '600', fontSize: 16 }}>New T Shirt</Text> */}

      {/* List of Product */}

      <View style={{ marginTop: 10 }}>
        {data.length > 0 ? (
        <FlatList data={data} verticle  renderItem={({ item, index }) => {
          return (
            <MyProduct item={item} onAddWishlist={(x)=>dispatch(addToWishlist(x))} onAddToCart={(x)=>{
              dispatch(addItemToCart(x))

            }} />
          )
        }} />  ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:responsiveHeight(15) }}>
            <Text>No Item Found In App</Text>
          </View>
        )}
      </View>
      {/* Category 2 */}
      {/* //////////////////////// cross */}
      {/* <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontWeight: '600', fontSize: 16 }}>Slippers</Text>

      {/* List of Product */}

      {/* <View style={{ marginTop: 20 }}>
        <FlatList data={slippers} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <MyProduct item={item} onAddWishlist={(x)=>dispatch(addToWishlist(x))} onAddToCart={(x)=>{
              dispatch(addItemToCart(x))

            }}/>
          )
        }} />
      </View> */}
      {/* Category 3 */}
      {/* <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontWeight: '600', fontSize: 16 }}>Shoes</Text> */}

      {/* List of Product */}
{/* 
      <View style={{ marginTop: 20 }}>
        <FlatList data={shoes} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <MyProduct item={item} onAddWishlist={(x)=>dispatch(addToWishlist(x))}  onAddToCart={(x)=>{
              dispatch(addItemToCart(x))

            }} />
          )
        }} />
      </View> */}
      {/* Category 4 */}
      {/* <Text style={{ marginTop: 20, marginLeft: 20, color: 'black', fontWeight: '600', fontSize: 16 }}>Jacket</Text> */}

      {/* List of Product */}

      {/* <View style={{ marginTop: 20 }}>
        <FlatList data={jacket} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
          return (
            <MyProduct item={item} onAddWishlist={(x)=>dispatch(addToWishlist(x))} onAddToCart={(x)=>{
              dispatch(addItemToCart(x))
            }}/>
          )
        }} />
      </View>  */}
      {/* ///////////////////// cross */}

      </View>
    </ScrollView >
  )
}

export default Main

const styles = StyleSheet.create({})