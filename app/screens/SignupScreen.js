import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const SB_LOGO = 'https://i.imgur.com/pYiVtix.png'

const SignupScreen = ({navigation}) => (
  <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: SB_LOGO, height: 100, width: 100 }}/>
      </View>
      <SignupForm navigation={navigation}/>
    </View>
)

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
})

export default SignupScreen