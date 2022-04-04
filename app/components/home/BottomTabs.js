import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Divider} from 'react-native-elements'

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

    // making the icon components
    const Icon = ({icon}) => {
        var currentIcon = (activeTab === icon.name) ? icon.active : icon.inactive
        return (
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image source={currIcon} style={styles.icon} />
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
        paddingTop: 10
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode:'cover'
    }
})