import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import InventoryTile from '../components/inventory-tile';

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
          style={currentStatus === STATUS.GOOD ? styles.activeStatusButton : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.GOOD)}
        >   
          <Text style={currentStatus === STATUS.GOOD ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            Good
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRED ? styles.activeStatusButton : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRED)}
        >
          <Text style={currentStatus === STATUS.EXPIRED ? styles.activeStatusLabel : styles.inactiveStatusLabel}>Expired</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRING ? styles.activeStatusButton : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRING)}
        >
          <Text style={currentStatus === STATUS.EXPIRING ? styles.activeStatusLabel : styles.inactiveStatusLabel}>Expiring</Text>
        </TouchableOpacity>
      </View>
      <InventoryTile foodName="testing food" purchaseDate="2/12/22" expireTime="1 week" numPeople={2} />
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
  activeStatusButton: {
    height: '80%',
    width: '31%',
    backgroundColor: '#C1DBB3',
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
    marginTop: windowHeight * 0.05,
    marginLeft: windowWidth * 0.05,
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
  },
});
