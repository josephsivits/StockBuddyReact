import { StyleSheet, Text, View, Modal, Button,TouchableOpacity } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import React, {useState} from 'react'

//const AboutModal = () => (
const AboutModal = ({visible, setVisible}) => {
  //////////////////////////////////////////////////////////////////////////////
  // AboutModal, look into exporting this as its own separate function for DRY

  //const [vis, setVis] = useState(false);

  return(
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
        <Text style={styles.aboutApp}>About This App</Text>
        <Text>The Stock Investment Visualization Interface Tool Software (SIVITS) Mobile Application was designed to allow users to make more educated financial decisions with the aim to allow users to make educated financial decisions by configurating them to a set of criteria deemed appropriate and applicable for stock option investments for the NYSE and NASDAQ.</Text>
        <Text style={styles.disclosureText}>DISCLOSURE</Text>
        <Text>This app should be used in conjunction with broader market knowledge. The suggestions  given on this app is calculated by various different methods, which are not to be taken as literal financial advice. For full documentation,</Text>
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://docs.google.com/document/d/1ZZM16B7TIETrq-XjYcYLg2IywMCg3mfI/edit')}>
          <Text style={{color:'#78AEF5', fontSize:18, fontWeight:'bold', fontStyle:'italic',paddingBottom:15, marginTop:10}}>Tap Here</Text>
        </TouchableOpacity>
        <Text style={{paddingTop:30}}>Created by Joseph Sivits for his senior capstone under BatKnights LLC at Concordia University Chicago.</Text>
        <View style={{margin:10}}>
        <Button
          title="CLOSE"
          color="#8F84F5"
          onPress={() =>  setVisible(false)}
        />
        </View>
      </View>
    </View>
  </View>
  </Modal>
  )
}
//////////////////////////////////////////////////////////////
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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderRadius:10,
  },
  aboutApp: {
    color: '#8F84F5',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalContainer: {
    width:'80%',
    backgroundColor: '#FFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  disclosureText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    color: '#ff0000',
  },
})