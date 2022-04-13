import { StyleSheet, Text, View, Image, Modal, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'
import * as WebBrowser from 'expo-web-browser';
import AboutModal from '../AboutModal';


// for signout button, future implementation
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
    const [visible, setVisible] = useState(false);

    const makeRedirect = () => {
      navigation.navigate('Login');
    }

    // making the icon components
    const Icon = ({icon}) => {
        var currentIcon = (activeTab === icon.name) ? icon.active : icon.inactive
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            
            {activeTab === 'Information' ? [setVisible(true), setActiveTab('Home')] : null}
                <View>
                    <AboutModal visible={visible} setVisible={setVisible}/>
                </View>
              {activeTab === 'Logout' ? console.log('Logout Pressed') : null}
                <Image source={currentIcon} style={styles.icon} />
            </TouchableOpacity>
        )
    }

    // returning a container with icons
  return (
    <View>
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