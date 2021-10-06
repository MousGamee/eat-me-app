import React from 'react'
import { Image } from 'react-native'
import { Block, Button, Text} from 'expo-ui-kit'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Notification from '../screens/Notification'

const Screens = createStackNavigator()

const MainNavigation = ({ navigation }) => {
    return (
        <Screens.Navigator screenOptions={{
            headerShown : false
        }}
        initialRouteName="Home">
            <Screens.Screen name="Home" component={Home} />
            <Screens.Screen name="Notification" component={Notification} />
        </Screens.Navigator>
    )
}

export default MainNavigation
