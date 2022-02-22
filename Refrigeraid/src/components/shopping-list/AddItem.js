import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    return (
        <View style={styles.listItemView}>
            <TextInput placeholder="type to add" style={styles.input} 
            onChangeText={onChange} onSubmitEditing={() => addItem(text)}/>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        fontFamily: 'Cochin',
        height: 60,
        padding: 10,
        fontSize: 16,
    },
});

export default AddItem;