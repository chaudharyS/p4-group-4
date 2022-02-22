import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
    title: 'Wishlist'
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#2874A6'
  },
  text: {
    fontFamily: 'Cochin',
    fontStyle: 'italic',
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Header;