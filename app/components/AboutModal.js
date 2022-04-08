import { StyleSheet, Text, View, Modal, Button } from 'react-native'

import React, {useState} from 'react'

//const AboutModal = () => (
const AboutModal = () => {
  //////////////////////////////////////////////////////////////////////////////
  // AboutModal, look into exporting this as its own separate function for DRY
  const [visible, setVisible] = useState(false);

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
        <Text>About This App</Text>
        <Text>The Stock Investment Visualization Interface Tool Software (SIVITS) Mobile Application was designed to allow users to make more educated financial decisions with the aim to allow users to make educated financial decisions by configurating them to a set of criteria deemed appropriate and applicable for stock option investments for the Standard and Poor's 500 (S&P 500).</Text>
        <Text style={styles.disclosureText}>DISCLOSURE</Text>
        <Text>This app should be used in conjunction with broader market knowledge. The suggestions  given on this app is calculated by various different methods, which are not to be taken as literal financial advice. For full documentation,</Text>
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.github.com/')}>
          <Text style={{color:'#78AEF5', fontSize:18, fontWeight:'bold', fontStyle:'italic',paddingBottom:15}}>Tap Here</Text>
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
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderRadius:10,
  },

})