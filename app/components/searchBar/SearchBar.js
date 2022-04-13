import { StyleSheet, Text, View, TextInput, Button, Keyboard,TouchableOpacity } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import {Feather, Entypo} from '@expo/vector-icons'
//import { TouchableOpacity } from 'react-native-gesture-handler'
//import { Button } from 'react-native-elements'

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
        <View
        style={
            !props.on ? styles.searchBarOff : styles.searchBarOn
        }
        >
            <TextInput
                placeholder='Search for stocks'
                style={styles.input}
                value={props.searchPhrase}
                onChangeText={props.setSearchPhrase}
                onFocus={() => props.setOn(true)}
            />
            </View>
            {props.on && (
                <View>
                    <Button
                        title='Cancel'
                        color={'#8F84F5'}
                        onPress={() => {
                            props.setOn(false);
                            Keyboard.dismiss();
                            props.setSearchPhrase('');
                        }}

                        
                    ></Button>
                </View>
            )
            }
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        margin:10,
        width:'95%',
    },
    searchBarOff: {
        backgroundColor: '#f5f5f5',
        padding:10,
        borderRadius:10,
        alignItems: 'center',
        flexDirection: 'row',
        width:'100%',
        height:40,
    },
    searchBarOn: {
        backgroundColor: '#f5f5f5',
        padding:10,
        borderRadius:10,
        alignItems: 'center',
        flexDirection: 'row',
        width:'80%',
        justifyContent: 'space-between', // change
        height:40,
    },
    searchBarInput: {
        flex:1,
        fontSize:10,
        marginLeft:10,
        width:'90%',
    },
})