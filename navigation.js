import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './app/screens/HomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import SignupScreen from './app/screens/SignupScreen'

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
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} />
            </Stack.Navigator>
    </NavigationContainer>
)

export default SignInStack