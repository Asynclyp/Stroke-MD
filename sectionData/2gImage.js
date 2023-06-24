
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Text></Text>
                <Text></Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Thrombectomy Plus tPA vs tPA Alone (tPA-Eligible Patients)</Text>
                </View>
                <Image source={require('../Images/section2g.png')} style={{ height: Dimensions.get("window").height * .85, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />

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
