import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import InventoryTile from '../components/inventory-tile';
import ListIcon from '../assets/icons/Invoice.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.statusBar}>
        <TouchableOpacity>
          <Text>Good</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Expired</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Expiring</Text>
        </TouchableOpacity>
      </View>
      <InventoryTile foodName="testing food" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
    height: windowHeight,
  },
  statusBar: {
    marginTop: windowHeight * 0.015,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    height: windowHeight * 0.075,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: windowWidth * 0.005,
  },  
  title: {
    marginTop: windowHeight * 0.05,
    marginLeft: windowWidth * 0.05,
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
  },
});
