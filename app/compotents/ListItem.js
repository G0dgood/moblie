import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView} >
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>
                <FontAwesomeIcon name="trash" size={20} color="firebrick"
                    onPress={() => deleteItem(item.id)}></FontAwesomeIcon>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#eee'

    },

    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },

    listItemText: {
        fontSize: 18,
    }


});
export default ListItem;
