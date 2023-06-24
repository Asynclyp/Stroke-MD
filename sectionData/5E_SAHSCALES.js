import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Image source={require('../Images/5e1.png')} style={{ height: Dimensions.get("window").height * .55, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                <Image source={require('../Images/5e2.png')} style={{ height: Dimensions.get("window").height * .55, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                <Image source={require('../Images/5e3.png')} style={{ height: Dimensions.get("window").height * .55, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />

            </View >
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
