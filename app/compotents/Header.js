import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text2} > {title}</Text>

        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'

    },

    text2: {
        color: "#fff",
        fontSize: 23,
        textAlign: 'center',
    }


});