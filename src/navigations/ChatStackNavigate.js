import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import ChatScreen from '../screens/ChatScreen';
import DetailChatScreen from '../screens/ChatScreen/DetailChatScreen';

const Stack = createStackNavigator();

export const ChatStackNavigate = props => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Chat" component={ChatScreen}/>
            <Stack.Screen name="DetailChat" component={DetailChatScreen}/>
        </Stack.Navigator>
    )
}