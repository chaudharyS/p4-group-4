import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import SwipeableInventoryTile, { STATUS } from '../components/inventory-tile-swipeable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
  const [currentStatus, setCurrentStatus] = useState(STATUS.GOOD);
  const [modalVisible, setModalVisible] = useState(false);
  console.log('testing with icons');
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Inventory</Text>
        <View style={styles.help}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Managing Inventory</Text>
            <Text style={styles.helpText}>• Here you can keep track of what items remain in your fridge/pantry and their freshness</Text>
            <Text style={styles.helpText}>• When you've finished all of some food item, remove it from your inventory by swiping to the left.</Text>
            <Text style={styles.helpText}>• The profile icons next to each item indicate who else it is shared with.</Text>
            <Text style={styles.helpText}>• If you decide to freeze something, mark it frozen by swiping to the right. Swipe right again to unfreeze it. Items marked frozen are stopped in their freshness countdown.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.helpButtonText}>Help</Text>
        </Pressable>
        </View>
      </View>
      <View style={styles.statusBar}>
        <TouchableOpacity 
          style={currentStatus === STATUS.GOOD ? styles.activeStatusButtonGood : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.GOOD)}
        >   
          <Text style={currentStatus === STATUS.GOOD ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            {STATUS.GOOD}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRING ? styles.activeStatusButtonExpiring : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRING)}
        >
          <Text style={currentStatus === STATUS.EXPIRING ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            {STATUS.EXPIRING}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={currentStatus === STATUS.EXPIRED ? styles.activeStatusButtonExpired : styles.inactiveStatusButton}
          onPress={() => setCurrentStatus(STATUS.EXPIRED)}
        >
          <Text style={currentStatus === STATUS.EXPIRED ? styles.activeStatusLabel : styles.inactiveStatusLabel}>
            {STATUS.EXPIRED}
          </Text>
        </TouchableOpacity>
      </View>
      <SwipeableInventoryTile pageStatus={currentStatus} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
    height: windowHeight,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  helpButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonOpen: {
    backgroundColor: "#F2C078",
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: "#7EBC89",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: 'Nunito_700Bold',
    fontSize: 28,
  },
  helpText: {
    marginBottom: 10,
    textAlign: "left",
  },
  help: {
    marginTop: windowHeight * 0.08,
    marginRight: windowWidth * 0.05,
  }
});
