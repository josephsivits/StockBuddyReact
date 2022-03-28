import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './app/screens/HomeScreen'


/*
npm install @react-navigation/native
npm install @react-navigation/stack
*/

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
            >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
    </NavigationContainer>
)

export default SignInStack