import { View, Text,StyleSheet,Image, Modal, Button } from 'react-native'
import {Divider} from 'react-native-elements' // after doing the npm install react-native-elements

import React, {useState} from 'react'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler';



const Stock = ({stock}) => {
  const [visible, setVisible] = useState(false);

  const StockRating = ({stock}) => (

    <TouchableOpacity onPress={() => setVisible(true)}>
    <View style={{width:75, height:75}}>
            <Image 
            source={{uri: stock.rating}} 
            style={{height:'100%', resizeMode:'cover'}} 
            />
            {/*} <StockInfoModal stock={stock}/> {*/}
        </View>
        
      </TouchableOpacity>
      
  )

const StockInfoModal = ({stock}) => (
  <Modal
    animationType={'fade'}
    visible={visible}
    onRequestClose={() => setVisible(false)}
  >
    <View style={styles.modalView}>
      <Text>Modal Test</Text>
      <Text>{stock.name}</Text>
      <Button title="Click here to close" onPress={() => setVisible(false)} />
    </View>

  </Modal>
)
  return (
    <View style={{flexDirection:'row', margin:10}}>
      <Divider width={1} orientation='horizontal' color='#232124'/>
      <StockRating stock={stock}/>
      <StockData stock={stock}/>
      <StockInfoModal stock={stock} />
    </View>
  )
}

const StockData = ({stock}) => (
  <View>
  {/*}
    <Text style={{fontWeight:'bold', paddingLeft:'1em'}}>{stock.name}</Text>
    <Text style={{color:'#170c14', fontWeight:'bold', paddingLeft:'1em'}}>${stock.ticker}{'   '}{stock.marketCap}</Text>
    <Text style={{fontStyle:'italic', paddingLeft:'1em'}}>{stock.sector}</Text>
    {*/}
    <Text style={[styles.stockInfo, {fontWeight:'bold'}]}>{stock.name}</Text>
    <Text style={[styles.stockInfo, {fontWeight:'bold'}]}>${stock.ticker}</Text>
    <Text style={[styles.stockInfo, {fontStyle:'italic'}]}>{stock.sector}</Text>
  </View>
)

const styles = StyleSheet.create({
  stockGrade: {
    width:20,
    height:20,
  },
  stockInfo: {
    marginLeft:10,
    marginRight:10,
  },
  modalView: {
    width:300,
    height: 240,
    backgroundColor: "#FFFFFF",
    justifyContent:'center',
    alignContent:'center',
    borderRadius:10,
  }
})

export default Stock