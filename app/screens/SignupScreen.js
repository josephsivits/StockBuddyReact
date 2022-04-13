import { Image, StyleSheet, View, Modal, Text, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import SignupForm from '../components/signupScreen/SignupForm'
import AboutModal from '../components/AboutModal';
//Package for web linking
import * as WebBrowser from 'expo-web-browser';

const SB_LOGO = 'https://i.imgur.com/pYiVtix.png'

const SignupScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return(
  <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: SB_LOGO, height: 100, width: 100 }}/>
      </View>
      <SignupForm navigation={navigation}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
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
})

export default SignupScreen