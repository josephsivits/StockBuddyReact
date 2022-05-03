import { Image, StyleSheet, View, Text, TouchableOpacity,Button, Modal } from 'react-native'
import React, {useState} from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

//Package for web linking
import * as WebBrowser from 'expo-web-browser';

import AboutModal from './../components/AboutModal'

const SB_LOGO = 'https://i.imgur.com/pYiVtix.png'

const LoginScreen = ({navigation}) => {
  //////////////////////////////////////////////////////////////////////////////
  // AboutModal, look into exporting this as its own separate function for DRY
  const [visible, setVisible] = useState(false);
  
  return(
  <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: SB_LOGO, height: 100, width: 100 }}/>
      </View>
      <LoginForm navigation={navigation}/>

      {/*} new stuff for AboutModal{*/}
      <TouchableOpacity onPress={() => setVisible(true)}>
      <Text style={styles.aboutApp}>About This App</Text>
      <View style={{width:75, height:75}}>
      <AboutModal visible={visible} setVisible={setVisible}/>
      </View>
      </TouchableOpacity>

      </View>
  )
}


export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  modalText: {
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  aboutApp: {
    color: '#8F84F5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
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