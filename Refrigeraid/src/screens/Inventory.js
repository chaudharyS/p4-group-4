import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import SwipeableInventoryTile from '../components/inventory-tile-swipeable';

const STATUS = {
  GOOD: 'Good',
  EXPIRED: 'Expired',
  EXPIRING: 'Expiring',
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  const [currentStatus, setCurrentStatus] = useState(STATUS.GOOD);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <View style={styles.statusBar}>
        <TouchableOpacity 
          style={currentStatus === STATUS.GOOD ? styles.activeStatusButtonGood : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.GOOD)}
        >   
          <Text style={currentStatus === STATUS.GOOD ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            Good
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRING ? styles.activeStatusButtonExpiring : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRING)}
        >
          <Text style={currentStatus === STATUS.EXPIRING ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            Expiring
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRED ? styles.activeStatusButtonExpired : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRED)}
        >
          <Text style={currentStatus === STATUS.EXPIRED ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            Expired
          </Text>
        </TouchableOpacity>
      </View>
      <SwipeableInventoryTile />
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
    height: windowHeight * 0.07,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: windowWidth * 0.01,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  activeStatusLabel: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
  },
  inactiveStatusLabel: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
  },
  activeStatusButtonGood: {
    height: '80%',
    width: '31%',
    backgroundColor: '#C1DBB3',
    justifyContent: 'center',
    borderRadius: 10,
  },
  activeStatusButtonExpiring: {
    height: '80%',
    width: '31%',
    backgroundColor: '#F2C078',
    justifyContent: 'center',
    borderRadius: 10,
  },
  activeStatusButtonExpired: {
    height: '80%',
    width: '31%',
    backgroundColor: '#FE5D26',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inactiveStatusButton: {
    height: '80%',
    width: '31%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    // borderRadius: 10,
  },
  title: {
    marginTop: windowHeight * 0.06,
    marginLeft: windowWidth * 0.05,
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
  },
});
