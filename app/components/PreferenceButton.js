import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'

// unused component for future implementation

const PreferenceButton = () => {
    var [isPress, setIsPress] = useState(false)

    const touchableProperties = {
        activeOvalColor: 1,
        underlayColor: '#78AEF5',
        style: isPress ? styles.buttonPressed : styles.buttonUnpressed,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('TESTING PRESSED'),
    }
 
    return (
    <View style={styles.container}>
        <TouchableHighlight {...touchableProperties}>
            <Text
            style={ isPress ? styles.buttonTextPressed : styles.buttonTextUnpressed }
            >Press me!</Text>
        </TouchableHighlight>
    </View>
  )
}

export default PreferenceButton

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        flex: 1,
        alignItems: 'center',
        
    },
    buttonUnpressed: {
        borderColor: '#78AEF5',
        borderWidth: 1,
        borderRadius: 10, // round corners
        height: 30,
        width: 120,
        backgroundColor: '#f0f0f0',
        
    },
    buttonPressed: {
        borderColor: '#f0f0f0',
        backgroundColor: '#78AEF5',
        borderWidth: 1,
        borderRadius: 10, // round corners
        height: 30,
        width: 120,
    },
    buttonTextUnpressed: {
        color: '#78AEF5',
        fontSize: 20,
        textAlign: 'center',
    },
    buttonTextPressed: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
})