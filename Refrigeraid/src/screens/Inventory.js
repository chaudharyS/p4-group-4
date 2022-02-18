import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ListIcon from '../assets/icons/Invoice.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  return (
    <View>
      <ListIcon />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight,
  },
});
