import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import styles from '../../config/styles'

const Stock = () => {
  return (
    <View>
      <Text>Stock</Text>
    </View>
  )
}

const StockData = ({stock}) => (

)

const StockRating = ({stock}) => (
    <View>
        <Image style={styles.stockGrade} source={{uri: stock.stockUrl}} />
    </View>
)

const styles = StyleSheet.create({

})

export default Stock