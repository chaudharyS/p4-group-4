import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListItem = ({item, addItem, editItem, deleteItem, inputValue, setInputValue}) => {
  const [text, setText] = useState('');
  return (
    // <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          {/* <Text style={styles.listItemText}>{item.text}</Text> */}
          <TextInput 
            placeholder="type to add" 
            style={styles.input} 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            onSubmitEditing={() => editItem(text)}>
              {item.text}
          </TextInput>
          <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
      </View>
    // </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderBottomWidth: 0,
        borderColor: '#eee',
    },
    listItemView: {
        padding: 10,
        borderBottomWidth: 0,
        borderColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
      fontFamily: 'SourceSansPro_400Regular',
      fontSize:  windowWidth * 0.06,
    }
});

export default ListItem;