import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const AddItems = ({ addItem }) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue)
    return (
        <View>
            <TextInput placeholder='Add Items...' style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}> <FontAwesomeIcon name="plus" size={20} />  Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddItems;

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,

    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },

    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },

});