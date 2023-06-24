import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Linking } from 'react-native';
import styles from "../components/styles"

// This file contains all the content from reference doc, but formatting needs
// review and revision
// table in separate file is not currently rendered in code below
export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style = {styles.contentContainer}>
                <Text style = {[styles.header,{ textDecorationLine: "underline" }]}> WU-BJC Participating Telestroke Hospitals</Text>
                <Text></Text>
                <Text style={styles.subTextList}> Alton Memorial Hospital </Text>
                <Text style={styles.subTextList}> Barnes Jewish St. Peters </Text>
                <Text style={styles.subTextList}> Memorial Belleville Hospital </Text>
                <Text style={styles.subTextList}> Memorial East (Shiloh, IL) </Text>
                <Text style={styles.subTextList}> Missouri Baptist Medical Center </Text>
                <Text style={styles.subTextList}> Missouri Baptist Sullivan </Text>
                <Text style={styles.subTextList}> Ozarks Medical Center (West Plains, MO) </Text>
                <Text style={styles.subTextList}> Parkland Bonne Terre </Text>
                <Text style={styles.subTextList}> Parkland Hospital (Also called Parkland Liberty) </Text>
                <Text style={styles.subTextList}> Progress West </Text>
                <Text style={styles.subTextList}> Link to the stroke network app:{" "}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('http://tinyurl.com/bjhdripship3')}>
                        http://tinyurl.com/bjhdripship3
                    </Text>
                </Text>
            </View>
        );
    }
}