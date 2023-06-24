import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>IV thrombolytic Eligibility Criteria for wake-up or unwitnessed stroke</Text>
                <Text style={styles.subHeader}>Inclusion Criteria</Text>
                <Text style={styles.subText}>Clinical signs of acute stroke with disabling stroke deficit</Text>
                <Text style={styles.subText}>Patient is > 4.5 hr from last known normal (LKN) time</Text>
                <Text style={styles.subText}>Patient can get a Hyperacute MRI (hMRI) and be treated with IV thrombolytic in less than 4.5 hr from symptom discovery</Text>
            </View>
        );
    }
}
