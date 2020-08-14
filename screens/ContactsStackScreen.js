/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ContactListScreen from './ContactListScreen'
import AddContactScreen from './AddContactScreen'
import ContactDetailsScreen from './ContactDetailsScreen'

const ContactsStack = createStackNavigator()

export default function ContactsStackScreen () {
  return (
    <ContactsStack.Navigator
      initialRouteName={'Home'}
      screenOptions= {{
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerTintColor: '#a41034',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <ContactsStack.Screen
        name='ContactList'
        component={ContactListScreen}
      />

      <ContactsStack.Screen
        name='AddContact'
        component={AddContactScreen}
      />

      <ContactsStack.Screen
        name= 'ContactDetails'
        component= {ContactDetailsScreen}
      />
    </ContactsStack.Navigator>
  )
}
