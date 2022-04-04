import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'
import Header from '../components/home/Header'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { STOCK } from '../../data/stockdata'
import Stock from '../components/home/Stock'
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}>
            <Header/>
            <ScrollView>
                {
                    STOCK.map((stock, index) => (
                        <Stock stock={stock} key={index}/>
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
    }
})

export default HomeScreen