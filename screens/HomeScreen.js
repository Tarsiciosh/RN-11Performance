/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactsStackScreen from './ContactsStackScreen'
import SettingsScreen from './SettingsScreen'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons'

const MainTabs = createBottomTabNavigator()

export default function HomeScreen () {
  return (
    <MainTabs.Navigator
      tabBarOptions = {{
        activeTintColor: '#a41030',
        inactiveTintColor: 'gray'
      }}
    >
      <MainTabs.Screen
        name='Contacts'
        component= {ContactsStackScreen}
        options = {{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={`ios-contact${focused ? '' : 's'}`}
              size={25}
              color={color}
            />
          )
        }}
      />
      <MainTabs.Screen
        name='Settings'
        component ={SettingsScreen}
        options = {{
          title: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={`ios-notifications${focused ? '' : '-outline'}`}
              size={25}
              color={color}
            />
          )
        }}
      />
    </MainTabs.Navigator>
  )
}
