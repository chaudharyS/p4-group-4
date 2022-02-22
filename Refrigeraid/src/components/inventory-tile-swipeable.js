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
import Person1 from '../assets/icons/person1.svg';
import Person2 from '../assets/icons/person2.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Tutorial for swipe found: 
// https://blog.logrocket.com/react-native-gesture-handler-swipe-long-press-and-more/


export default () => {
  const [foodData, setFoodData] = useState([
    { foodName: 'test name', purchaseDate: '2/1/22', expireTime: 'Expire: 3 weeks', numPeople: 2, isFrozen: false},
    { foodName: 'test name2', purchaseDate: '2/2/22', expireTime: 'Expire: 3 weeks', numPeople: 1, isFrozen: false}
  ]);

  const Separator = () => <View style={styles.itemSeparator} />;
  const leftSwipeActions = (foodName, isFrozen) => {
    if (isFrozen) {
      return (
        <TouchableOpacity
          style={{ backgroundColor: '#FFA800', justifyContent: 'center', alignItems: 'flex-start' }}
          onPress={() => {
            // find index corresponding to food in foodData and remove it
            const ind = foodData.findIndex(food => food.foodName === foodName);
            const foodDataCopy = [...foodData];
            foodDataCopy[ind] = {...foodData[ind], expireTime: 'Expire: 3 weeks', isFrozen: false};
            console.log(foodDataCopy);
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
          const ind = foodData.findIndex(food => food.foodName === foodName);
          const foodDataCopy = [...foodData];
          foodDataCopy[ind] = {...foodData[ind], expireTime: 'Frozen Item', isFrozen: true};
          console.log(foodDataCopy);
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
          const ind = foodData.findIndex(food => food.foodName === foodName);
          const foodDataCopy = [...foodData];
          if (ind !== -1) {
            foodDataCopy.splice(ind, 1);
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
  const ListItem = ({ foodName, purchaseDate, expireTime, numPeople, isFrozen }) => (
    <Swipeable
      renderLeftActions={() => leftSwipeActions(foodName, isFrozen)}
      renderRightActions={() => rightSwipeActions(foodName)}
    >
      <View style={styles.itemContainer}>
        <View style={styles.imageTextIcons}>
          <View style={styles.imageAndText}>
            <View>
              <Cookie height={70} width={70} />
            </View>
            <View style={styles.foodDescription}>
              <Text style={styles.foodText}>{foodName}</Text>
              <Text style={styles.purchasedText}>Purchased on {purchaseDate}</Text>
              <Text style={!isFrozen ? styles.expireText : styles.frozenText}>{expireTime}</Text>
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
          Swipe right to delete and left to freeze/unfreeze item
        </Text>
        <FlatList
          data={foodData}
          keyExtractor={(item) => item.foodName}
          renderItem={({ item }) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
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
  expireText: {
    color: '#7EBC89',
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
