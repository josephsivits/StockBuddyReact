import { View, Text,StyleSheet,Image, Modal, Button, TouchableOpacity } from 'react-native'
import {Divider} from 'react-native-elements' // after doing the npm install react-native-elements

import React, {useState} from 'react'

const Stock = ({stock}) => {
  const [visible, setVisible] = useState(false);

  const StockRating = ({stock}) => (
    <TouchableOpacity onPress={() => setVisible(true)}>
    <View style={{width:75, height:75}}>
            <Image 
            source={{uri: stock.rating}} 
            style={{height:'100%', resizeMode:'cover'}} 
            />
            <StockInfoModal stock={stock}/> 
        </View>    
      </TouchableOpacity>   
  )

const StockInfoModal = ({stock}) => (
  <Modal
    animationType={'fade'}
    visible={visible}
    onRequestClose={() => setVisible(false)}
    transparent={true}
  >
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>
    <View
      alignItems='center'
    >
      <Image 
        source={{uri: stock.rating}} 
        style={{height:105, width:105, resizeMode:'contain'}}
        />
      <Text>{stock.name}</Text>
      <Text>{stock.ticker}</Text>
      <Text>{stock.sector}</Text>
      <Text>{stock.marketCap}{' Market Capitalization'}</Text>
    </View>
      {/*} adding button inside of a view fixes the styling issues{*/}
      <View style={{margin:10}}>            
      <Button 
        title="CLOSE" 
        color="#8F84F5" 
        onPress={() => 
          setVisible(false)} 
        />
      </View>
    </View>
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
  modalContainer: {
    width:'80%',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderRadius:10,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  button:{
    backgroundColor:'#8F84F5',
    padding:10,
    borderRadius:10,
    margin:10,
  }
})

export default Stock