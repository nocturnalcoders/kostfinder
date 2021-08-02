import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/AuthScreen/SignUpScreen';
import SignInScreen from '../screens/AuthScreen/SignInScreen';
import SplashScreen from '../screens/AuthScreen/SplashScreen';


const Stack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </Stack.Navigator>
);

export default RootStackScreen;