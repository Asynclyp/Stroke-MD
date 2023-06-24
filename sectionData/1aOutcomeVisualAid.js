
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <View style={styles.titleContainer}>
                    <Text></Text>
                    <Text style={styles.title}>TPA for Cerebral Ischemia within 3 Hours of Onset-Changes in Outcome Due to Treatment</Text>
                </View>
                <Image source={require('../Images/tpaImage.png')} style={{ height: Dimensions.get("window").height * .8, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />

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
