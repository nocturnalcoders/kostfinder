import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/ProfileScreen/SettingScreen';
import EditProfileScreen from '../screens/ProfileScreen/EditProfileScreen';

const Stack = createStackNavigator();

export const ProfileStackNavigate = props => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Setting" component={SettingScreen}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
        </Stack.Navigator>
    )
}