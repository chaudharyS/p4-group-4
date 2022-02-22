/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import {
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_300Light_Italic,
} from '@expo-google-fonts/source-sans-pro';
import {
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import ListIcon from './src/assets/icons/Invoice.svg';
import ShoppingBag from './src/assets/icons/Shopping-bag.svg';
import ShoppingCart from './src/assets/icons/Shopping-cart.svg';

import Inventory from './src/screens/Inventory';

const Tab = createBottomTabNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_400Regular,
    SourceSansPro_300Light_Italic,
    Inter_700Bold,
    Inter_400Regular,
  });

  return fontsLoaded
    ? (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Shopping List" options={{ tabBarIcon: ({ color }) => { return (<ListIcon width={20} color={color} />); }, tabBarActiveTintColor: '#7EBC89', tabBarInactiveTintColor: '#858C94' }} component={Inventory} />
          <Tab.Screen name="Inventory" options={{ tabBarIcon: () => { return (<ShoppingBag width={20} color="grey" />); }, tabBarActiveTintColor: '#7EBC89' }} component={Inventory} />
          <Tab.Screen name="Shopping Trip" options={{ tabBarIcon: () => { return (<ShoppingCart width={20} color="grey" />); }, tabBarActiveTintColor: '#7EBC89' }} component={Inventory} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
      <Text>
        Loading...
      </Text>
    );
};
