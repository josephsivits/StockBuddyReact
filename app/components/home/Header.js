import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontWeight:'bold', fontSize:25}}>Happy Trading!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        flexDirection:'row',
        width:'100%',
        paddingBottom:20,
        paddingTop:15,
        backgroundColor:'#b86cd9'
    },
})