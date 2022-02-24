import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Cookie from '../assets/foodIcons/cookie.svg';
import Egg from '../assets/foodIcons/egg.svg';
import Bread from '../assets/foodIcons/bread.svg';
import Apple from '../assets/foodIcons/apple.svg';
import Pasta from '../assets/foodIcons/pasta.svg';
import Person1 from '../assets/icons/person1.svg';
import Person2 from '../assets/icons/person2.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Tutorial for swipe found: 
// https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/

export const STATUS = {
  GOOD: 'Good',
  EXPIRED: 'Expired',
  EXPIRING: 'Expiring',
};

export default (
  props,
) => {
  const pageStatus = props.pageStatus || 'Good';
  const [foodData, setFoodData] = useState(
    {
      'Good':
      [
        { foodName: 'Cookies', purchaseDate: '2/1/22', expireTime: 'Expire: 3 weeks', numPeople: 2, isFrozen: false, icon: <Cookie />},
        { foodName: 'Apples', purchaseDate: '2/2/22', expireTime: 'Expire: 3 weeks', numPeople: 1, isFrozen: false, icon: <Apple />}
      ],
      'Expiring': 
      [
        { foodName: 'Bread', purchaseDate: '2/2/22', expireTime: 'Expire: 2 days', numPeople: 1, isFrozen: false, icon: <Bread />},
        { foodName: 'Eggs', purchaseDate: '2/2/22', expireTime: 'Expire: 2 days', numPeople: 1, isFrozen: false, icon: <Egg />},
      ],
      'Expired': 
      [
        { foodName: 'Pasta', purchaseDate: '2/1/22', expireTime: 'Expired', numPeople: 2, isFrozen: false, icon: <Pasta />},
      ]
    },
  );

  const Separator = () => <View style={styles.itemSeparator} />;
  const leftSwipeActions = (foodName, isFrozen) => {
    if (pageStatus === STATUS.EXPIRED) {
      return <View />;
    }
    if (isFrozen && pageStatus) {
      return (
        <TouchableOpacity
          style={{ backgroundColor: '#FFA800', justifyContent: 'center', alignItems: 'flex-start' }}
          onPress={() => {
            // find index corresponding to food in foodData and remove it
            const ind = foodData[pageStatus].findIndex(food => food.foodName === foodName);
            const foodDataCopy = {...foodData};
            const unfrozenExpireText = pageStatus === STATUS.GOOD ? 'Expire: 3 weeks' : 'Expire: 2 days';
            foodDataCopy[pageStatus][ind] = {...foodData[pageStatus][ind], expireTime: unfrozenExpireText, isFrozen: false};
            setFoodData(foodDataCopy);
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              paddingHorizontal: 10,
              fontWeight: '600',
              paddingHorizontal: 30,
              paddingVertical: 20,
            }}
          >
            Unfreeze
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{ backgroundColor: '#96DAF8', justifyContent: 'center', alignItems: 'flex-start' }}
        onPress={() => {
          // find index corresponding to food in foodData and remove it
          const ind = foodData[pageStatus].findIndex(food => food.foodName === foodName);
          const foodDataCopy = {...foodData};
          foodDataCopy[pageStatus][ind] = {...foodData[pageStatus][ind], expireTime: 'Frozen Item', isFrozen: true};
          setFoodData(foodDataCopy);
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Freeze
        </Text>
      </TouchableOpacity>
    );
  };
  const rightSwipeActions = (foodName) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#FE5D26',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
        onPress={() => {
          // find index corresponding to food in foodData and remove it
          const ind = foodData[pageStatus].findIndex(food => food.foodName === foodName);
          const foodDataCopy = {...foodData};
          if (ind !== -1) {
            foodDataCopy[pageStatus].splice(ind, 1);
          }
          setFoodData(foodDataCopy);
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            paddingHorizontal: 10,
            fontWeight: '600',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    );
  };
  const ListItem = ({ foodName, purchaseDate, expireTime, numPeople, isFrozen, icon }) => (
    <Swipeable
      renderLeftActions={() => leftSwipeActions(foodName, isFrozen)}
      renderRightActions={() => rightSwipeActions(foodName)}
    >
      <View style={styles.itemContainer}>
        <View style={styles.imageTextIcons}>
          <View style={styles.imageAndText}>
            <View>
              {icon}
            </View>
            <View style={styles.foodDescription}>
              <Text style={styles.foodText}>{foodName}</Text>
              <Text style={styles.purchasedText}>Purchased on {purchaseDate}</Text>
              <Text 
                style={
                  isFrozen ? styles.frozenText 
                  : (pageStatus === STATUS.GOOD ? styles.expireTextGood 
                  : (pageStatus === STATUS.EXPIRING ? styles.expireTextExpiring
                  : styles.expireTextExpired))
                }>
                  {expireTime}
              </Text>
            </View>
          </View>
          {numPeople == 2 ?
              <View style={styles.peopleIcons}>
                <Person1 />
                <Person2 />
                
              </View>
                :
              <View style={styles.peopleIcons}>
                <Person1 />
              </View>
            }
        </View>
      </View>
    </Swipeable>
  );

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginVertical: 20, fontFamily: 'SourceSansPro_300Light_Italic', color: '#858C94' }}>
          {pageStatus === STATUS.EXPIRED ? 'Swipe left to delete' : 'Swipe left to delete and right to freeze/unfreeze item'}
        </Text>
        {foodData[pageStatus].length > 0 ?
          <FlatList
            data={foodData[pageStatus]}
            keyExtractor={(item) => item.foodName}
            renderItem={({ item }) => <ListItem {...item} />}
            ItemSeparatorComponent={() => <Separator />}
          />
          :
          <View style={styles.noItems}>
            <Text style={styles.noItemsText}>No {pageStatus.toLowerCase()} items!</Text>
          </View>
        }
        
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    height: windowHeight * 0.13,
    marginHorizontal: windowWidth * 0.02,
    borderRadius: 20,
    justifyContent: 'center',

    shadowColor: '#5A6CEA',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
  },
  noItems: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  noItemsText: {
    alignSelf: 'center',
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
  }, 
  imageTextIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: windowWidth * 0.03,
  },
  closeButton: {
    position: 'absolute',
    right: windowWidth * 0.04,
    top: windowHeight * 0.015,
  },
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: windowHeight * 0.01,
  },
  peopleIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: windowWidth * 0.07,
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
  expireTextGood: {
    color: '#7EBC89',
    fontSize: 18,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  expireTextExpiring: {
    color: '#F2C078',
    fontSize: 18,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  expireTextExpired: {
    color: '#FE5D26',
    fontSize: 18,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  frozenText: {
    color: '#96DAF8',
    fontSize: 18,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  imageAndText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  foodDescription: {
    flexDirection: 'column',
    marginLeft: windowWidth * 0.04,
    justifyContent: 'space-between',
  }
});
