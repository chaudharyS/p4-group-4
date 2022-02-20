import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Cookie from '../assets/foodIcons/cookie.svg';
import CloseIcon from '../assets/icons/close.svg';
import Person1 from '../assets/icons/person1.svg';
import Person2 from '../assets/icons/person2.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({
    foodName
  }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageAndText}>
          <View>
            <Cookie height={70} width={70} />
          </View>
          <View style={styles.foodDescription}>
            <Text style={styles.foodText}>{foodName}</Text>
            <Text style={styles.purchasedText}>Purchased on [insert date]</Text>
            <Text style={styles.expireText}>Expire: [insert weeks]</Text>
          </View>
          <View style={styles.peopleIcons}>
            <Person1 />
            <Person2 />
          </View>
        </View>
        <TouchableOpacity style={styles.closeButton}>
          <CloseIcon height={12} width={12} />
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight * 0.15,
    marginVertical: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: 20,
    justifyContent: 'center',

    shadowColor: '#5A6CEA',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
  },
  closeButton: {
    position: 'absolute',
    right: windowWidth * 0.04,
    top: windowHeight * 0.015,
  },
  peopleIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: windowWidth * 0.02,
    alignContent: 'center',
  },
  foodText: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 18,
    color: '#09101D',
  },
  purchasedText: {
    color: '#858C94',
    fontSize: 14,
    fontFamily: 'SourceSansPro_400Regular',
  },
  expireText: {
    color: '#7EBC89',
    fontSize: 18,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  imageAndText: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.02,
  },
  foodDescription: {
    flexDirection: 'column',
    marginLeft: windowWidth * 0.03,
    justifyContent: 'space-between',
  }
});