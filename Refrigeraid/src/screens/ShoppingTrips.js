import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, Alert, Modal } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShoppingTrips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Trips</Text>
      <View style={styles.body}>
        <Text>under construction</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    },
  title: {
    marginTop: windowHeight * 0.07,
    marginLeft: windowWidth * 0.05,
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
  },
  notepad: {
      backgroundColor: '#FAEDCA',
      marginHorizontal: windowHeight * 0.03,
      marginVertical: windowHeight * 0.03,
      height: windowHeight * 0.55,
      justifyContent: 'flex-start',
      borderRadius: 20,
      shadowRadius: 5,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
  },
  list: {
    marginHorizontal: windowHeight * 0.01,
    marginTop: windowHeight * 0.01,
    },
});

export default ShoppingTrips;