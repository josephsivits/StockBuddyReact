import { StyleSheet, Text, View, Image, Modal, Button, TouchableOpacity } from 'react-native'
import React, {Fragment, useState} from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import {Divider} from 'react-native-elements'
import SignupScreen from '../../screens/SignupScreen'
import LoginScreen from '../../screens/LoginScreen';
import * as WebBrowser from 'expo-web-browser';

// for signout button
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import AuthNavigation from '../../../AuthNavigation';
import navigation from '../../../navigation'

const handleSignOut = async () => {
try {
    await firebase.auth().signOut()
    console.log('Signed Out')
}
catch (error) {
    console.log(error);
}
}

export const bottomTabIcons = [
    {
        name: 'Home',
        active: require('../../assets/icons/home-on.png'),
        inactive: require('../../assets/icons/home-off.png')
    },
    {
        name: 'Preferences',
        active: require('../../assets/icons/preferences-on.png'),
        inactive: require('../../assets/icons/preferences-off.png')
    },
    {
        name: 'Information',
        active: require('../../assets/icons/info-on.png'),
        inactive: require('../../assets/icons/info-off.png')
    },
    {
        name: 'Logout',
        active: require('../../assets/icons/logout-on.png'),
        inactive: require('../../assets/icons/logout-off.png')
    },
    {
        name: 'Search',
        active: require('../../assets/icons/search-on.png'),
        inactive: require('../../assets/icons/search-off.png')
    },
]



const BottomTabs = ({icons}) => {
    // set the default tab to be home
    const [activeTab, setActiveTab] = useState('Home')

//////////////////////////////////////////////////////////////
      // AboutModal, look into exporting this as its own separate function for DRY
  const [visible, setVisible] = useState(false);

  const AboutModal = ({visible, setVisible}) => (
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
          onPress={() =>  [setActiveTab('Home'), setVisible(false)]}
        />
        </View>
      </View>
    </View>
  </View>
  </Modal>
  )
//////////////////////////////////////////////////////////////

    // making the icon components
    const Icon = ({icon}) => {
        var currentIcon = (activeTab === icon.name) ? icon.active : icon.inactive
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)
            }>
            {activeTab === 'Information' ? setVisible(true) : null}
                <Text>{activeTab}</Text>
                <View>
                    <AboutModal visible={visible} setVisible={setVisible}/>
                </View>
            {activeTab === 'Logout' ? handleSignOut : null}
                <Image source={currentIcon} style={styles.icon} />
            </TouchableOpacity>
        )
    }

    // returning a container with icons
  return (
    <View>
      <Divider width={1} orientation='vertical' color='#78AEF5'/>
        <View style={styles.container}>
            {icons.map((icon,index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
        marginBottom: 10,
    },
    icon: {
        width: 35,
        height: 35,
        resizeMode:'cover'
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