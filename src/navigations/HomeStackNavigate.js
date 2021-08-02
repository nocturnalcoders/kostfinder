import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailKostScreen from '../screens/DetailKostScreen';
import GetPayementScreen from '../screens/GetPaymentScreen';
import GetPaymentScreen from '../screens/GetPaymentScreen';
import PaymentDetailScreen from '../screens/PaymentScreen/PaymentDetailScreen';
import SearchScreenPopular from '../screens/SearchScreenPopular';

const Stack = createStackNavigator();

export const HomeStackNavigate = props => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Ekost" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailKostScreen}/>
            <Stack.Screen name="Get Payment" component={GetPaymentScreen}/>
            <Stack.Screen name="Payment Details" component={PaymentDetailScreen}/>
            <Stack.Screen name="SearchScreenPopular" component={SearchScreenPopular}/>
        </Stack.Navigator>
    )
}