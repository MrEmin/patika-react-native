import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; */
import {createDrawerNavigator} from '@react-navigation/drawer';

import Products from './pages/Products';
import Favorites from './pages/Favorites';

/* const Tab = createBottomTabNavigator(); */
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Products">
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
