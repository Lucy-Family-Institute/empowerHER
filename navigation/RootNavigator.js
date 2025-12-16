import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home.js';
import Account from '../screens/Account.js';
import Calendar from '../screens/Calendar.js';
import Whatsapp from '../screens/Whatsapp.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        // options={{
        //   drawerIcon: ({ color }) => (
        //     <Ionicons name="menu" size={28} color={"red"} />
        //   ),
        // }}
        />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Whatsapp" component={Whatsapp} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;