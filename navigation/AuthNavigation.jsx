import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from './OnBoarding'
import SignIn from '../screens/SignIn'
import SingUp from '../screens/SingUp'
import Otp from '../screens/Otp'
import ForgotPassword from '../screens/ForgotPassword'

const AuthStack = createStackNavigator()
const AuthNavigation = () => {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown : false
        }}>
            <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
            <AuthStack.Screen name="SignIn" component={SignIn} />
            <AuthStack.Screen name="SignUp" component={SingUp} />
            <AuthStack.Screen name="Otp" component={Otp} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation
