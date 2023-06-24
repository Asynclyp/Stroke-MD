
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Text></Text>
                <Text></Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Acute Stroke Decision-Making Flow-Chart</Text>
                </View>
                {/* <Image source={require('../Images/Section0image1.png')} style={{ height: Dimensions.get("window").height * .3, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} /> */}
                {/* <Image source={require('../Images/Section0image2.png')} style={{ height: Dimensions.get("window").height * .3, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} /> */}
                <Image source={require('../Images/section0image1.png')} style={{ height: Dimensions.get("window").height * .3, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                <Image source={require('../Images/section0image2(new).png')} style={{ height: Dimensions.get("window").height * .3, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
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
