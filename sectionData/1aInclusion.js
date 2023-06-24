
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subHeader}>Inclusion Criteria:</Text>
                <Text style={styles.subText}>1. Age ≥ 18 years <Text style={styles.superScript}>1</Text></Text>
                <Text style={styles.subText}>2. Clinical diagnosis of ischemic stroke causing a measurable neurological deficit</Text>
                <Text style={styles.subText}>3. Onset of stroke symptoms<Text style={styles.superScript}>2</Text> well established to be less than 4.5 hours before treatment would begin</Text>
            </View >
        );
    }
}