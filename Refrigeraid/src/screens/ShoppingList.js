import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from '../components/shopping-list/Header';
import ListItem from '../components/shopping-list/ListItem';
import AddItem from '../components/shopping-list/AddItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShoppingList = () => {
  const [items, setItems] = useState([
  ]);
  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  }

  const editItem = (id, text) => {
    let editItems = items.map((item) => {
      if (item.id == id) {
        item.text = text
      }
      return item;
    })
    setItems(editItems);
    setEdit(false);
  }

  const deleteItem = (id) => {
    // return Alert.alert(
    //   "Confirm Deletion",
    //   "Are you sure you want to delete this item?",
    //   [
    //     {
    //       text: "Yes",
    //       onPress: () => {
    //         setItems(prevItems => {
    //           return prevItems.filter(item => item.id != id);
    //         });
    //       },
    //     },
    //     {
    //       text: "No"
    //     }
    //   ]

    // );
    setItems(prevItems => {
        return prevItems.filter(item => item.id != id);
      });

  }

  const addItem = (text) => {
    if (!text) {
      // Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
    }
    else {
      setItems(prevItems => {
        return [{id: uuid(), text},...prevItems];
      });
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.notepad}>
        <View>
        <FlatList 
            style={styles.list}
            data={items} 
            inverted={true}
            contentContainerStyle={{
              flexGrow: 1, justifyContent: 'flex-end',
            }}
            renderItem={({item}) => <ListItem item={item}
            addItem={addItem}
            handleEditChange={handleEditChange}
            editItem={editItem}
            editId={editId}
            inputValue={inputValue}
            setInputValue={setInputValue}
            deleteItem={deleteItem}
        />}
        />
          <AddItem style={styles.list} inputValue={inputValue} handleEditChange={handleEditChange} addItem={addItem}/>
        </View>

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

export default ShoppingList;