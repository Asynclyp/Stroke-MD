
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Text></Text>
                <Text></Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Required Documentation of Stroke Metrics for Joint Commission and Comprehensive Stroke Center Certification</Text>
                </View>
                <Image source={require('../Images/Section6Image.png')} style={{ height: Dimensions.get("window").height * .8, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />


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
