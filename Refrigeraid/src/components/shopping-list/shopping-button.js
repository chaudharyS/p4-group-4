import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShoppingButton = ({text, icon, onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textFont}>
                    {text}
                </Text>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onPress}>
                    {icon}
                </TouchableOpacity> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: windowHeight * 0.005,
        marginHorizontal: windowWidth * 0.02,
        borderRadius: 15,
        flexDirection:'row',
        backgroundColor:'white',
        height: windowHeight/15,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    textContainer:{
        flex: 8,
        marginLeft: windowWidth * 0.05,
    },
    iconContainer:{
        flex:1,
        marginRight: windowWidth * 0.01,
    },
    textFont:{
        color: '#858C94',
        fontSize: 16,
        fontFamily: 'SourceSansPro_400Regular',
    }
    

})

export default ShoppingButton;