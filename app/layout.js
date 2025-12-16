import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Account from '../screens/Account.js';
import Calendar from '../screens/Calendar.js';
import Whatsapp from '../screens/Whatsapp.js';
import Home from '../screens/Home.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home}> <Ionicons name="home" size={28} color="#000" /> </Drawer.Screen>
      <Drawer.Screen name="Account" component={Account}> <Ionicons name="menu" size={28} color="#000" /> </Drawer.Screen>
      <Drawer.Screen name="Calendar" component={Calendar}> <Ionicons name="home" size={28} color="#000" /> </Drawer.Screen>
      <Drawer.Screen name="Whatsapp" component={Whatsapp}> <Ionicons name="chatbubbles" size={28} color="#000" /> </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;