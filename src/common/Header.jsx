import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{width:'100%',height:70,justifyContent:'space-between',alignItems:'center',
    flexDirection:'row',borderBottomWidth:0.2,borderBottomColor:'#8e8e8e',backgroundColor:'#fff'}}>
      <Text style={{fontWeight:'600',color:'#000',fontSize:20,marginLeft:20}}> Choosy n cozy </Text>

      <TouchableOpacity style={{marginRight:20,justifyContent:'center',alignItems:'center',width:50,height:30}}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})