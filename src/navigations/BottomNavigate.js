import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BookingScreen from '../screens/BookingScreen';
import SearchScreen from '../screens/SearchScreen';
import {HomeStackNavigate} from './HomeStackNavigate';
import { ProfileStackNavigate } from './ProfileStackNavigate';
import { ChatStackNavigate } from './ChatStackNavigate';
import { SearchStackNavigate } from './SearchStackNavigate';
import {AuthStackScreen} from './AuthStackNavigate';
import SignInScreen from '../screens/AuthScreen/SignInScreen';

const Tab = createBottomTabNavigator();

const BottomNavigate = props => {
  return (
    // <Stack.Navigator>
    //   {
    //     state.userToken == null ? (
    //       <Stack.Screen
    //         name="SignIn"
    //         component={SignInScreen}
    //     )
    //   }
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#66a5ad',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Explore" component={HomeStackNavigate} />
      <Tab.Screen name="Search" component={SearchStackNavigate} />
      <Tab.Screen name="Chat" component={ChatStackNavigate} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileStackNavigate} />
    </Tab.Navigator>
    // </Stack.Navigator>
    
  );
};

export default BottomNavigate;

//192.168.100.3