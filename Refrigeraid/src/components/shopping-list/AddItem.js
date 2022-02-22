import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    const onDone = () => {
        addItem(text);
        setText("");
    }
    return (
        <View style={styles.listItemView}>
            <TextInput value={text} placeholder="type to add" style={styles.input} 
            onChangeText={onChange} onSubmitEditing={onDone}/>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        fontFamily: 'SourceSansPro_400Regular',
        marginHorizontal: windowHeight * 0.01,
        fontSize:  windowWidth * 0.06,
        padding: 10,
    },
});

export default AddItem;