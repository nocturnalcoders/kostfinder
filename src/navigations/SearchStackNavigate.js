import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailKostScreen from '../screens/DetailKostScreen';
import GetPayementScreen from '../screens/GetPaymentScreen';
import GetPaymentScreen from '../screens/GetPaymentScreen';
import PaymentDetailScreen from '../screens/PaymentScreen/PaymentDetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export const SearchStackNavigate = props => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Details" component={DetailKostScreen}/>
        </Stack.Navigator>
    )
}