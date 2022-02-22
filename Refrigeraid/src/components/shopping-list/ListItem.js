import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderBottomWidth: 0,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontFamily: 'Cochin',
        fontSize: 18,
    }
});

export default ListItem;