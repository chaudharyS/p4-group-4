import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Cookie from '../assets/foodIcons/cookie.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default ({
    foodName
  }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageAndText}>
          <View>
            <Cookie />
          </View>
          <View style={styles.foodDescription}>
            <Text style={styles.foodText}>{foodName}</Text>
            <Text style={styles.purchasedText}>Purchased on [insert date]</Text>
            <Text style={styles.expireText}>Expire: [insert weeks]</Text>
          </View>
        </View> 
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight * 0.15,
    marginVertical: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: 20,
    justifyContent: 'center',
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
  }
});