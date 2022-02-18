/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import ListIcon from './src/assets/icons/Invoice.svg';
import ShoppingBag from './src/assets/icons/Shopping-bag.svg';
import ShoppingCart from './src/assets/icons/Shopping-cart.svg';

import Inventory from './src/screens/Inventory';

const Tab = createBottomTabNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  return fontsLoaded
    ? (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Shopping List" options={{ tabBarIcon: () => { return (<ListIcon width={20} color="grey" />); } }} component={Inventory} />
          <Tab.Screen name="Inventory" options={{ tabBarIcon: () => { return (<ShoppingBag width={20} color="grey" />); } }} component={Inventory} />
          <Tab.Screen name="Shopping Trip" options={{ tabBarIcon: () => { return (<ShoppingCart width={20} color="grey" />); } }} component={Inventory} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <Text>
        Loading...
      </Text>
    );
};
