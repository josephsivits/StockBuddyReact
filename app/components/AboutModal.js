import { StyleSheet, Text, View, Modal, Button } from 'react-native'

import React, {useState} from 'react'

//const AboutModal = () => (
const AboutModal = ({visible, setVisible}) => (

    <Modal
      animationType={'fade'}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent={true}
    >
    <View style={styles.modalBackground}
      visible={visible}
    >
      <View style={styles.modalContainer}>
      <View
        alignItems='center'
      >
        <Text>About</Text>
        <Text>This app was created by:</Text>
        <Text>Michael</Text>
        <Text>Meyer</Text>
        <Text>and</Text>
        <Text>Ryan</Text>
        <Text>Meyer</Text>
        <Text>for the</Text>
        <Text>CSCI E-15</Text>
        <Text>class</Text>
        <Text>at</Text>
        <Text>University of California, Davis</Text>
        <Text>in</Text>
        <Text>Spring 2020</Text>
        <Text>.</Text>
        <Text>This app is a stock market simulator.</Text>
        <Text>The stock market is simulated by a random number generator.</Text>
        <Text>The random number generator is seeded by the current time.</Text>
        <Text>The current time is displayed in the top right corner of the screen.</Text>
        <Text>The stock market is simulated by a random number generator.</Text>
        <Text>The random number generator is seeded by the current time.</Text>
        <Text>The current time is displayed in the top right corner of the screen.</Text>
        <Text>The stock market is simulated by a random number generator.</Text>
        <Text>The random number generator is seeded by the current time.</Text>
      </View>
      
      <Button 
        title="CLOSE" 
        color="#8F84F5" 
        onPress={() => setVisible(false)}
          zIndex={999} 
        />
        </View>
    </View>
    </Modal>
  )
  

export default AboutModal

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalContainer: {
    width:'80%',
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderRadius:10,
  },

})