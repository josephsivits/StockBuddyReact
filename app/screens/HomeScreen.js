import { StyleSheet, SafeAreaView,View } from 'react-native'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'
import Header from '../components/home/Header'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { STOCK } from '../../data/stockdata'
import Stock from '../components/home/Stock'
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs'
import SearchBar from '../components/searchBar/SearchBar'
import { Divider } from 'react-native-elements'


const HomeScreen = ({navigation}) => {
    const [searchPhrase, setSearchPhrase] = React.useState('') // using strings in a hook
    const [on, setOn] = React.useState(false)

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



            <View>
            <Divider/>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                on={on}
                setOn={setOn}
            />
            </View>
            <BottomTabs icons={bottomTabIcons}  />
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