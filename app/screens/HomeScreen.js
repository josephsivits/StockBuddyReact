import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'
import Header from '../components/home/Header'
import React from 'react'


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}>
            <Header/>
            <Text style={{color:'black'}}>Test</Text>
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