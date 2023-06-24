import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Post-thrombolytic BP monitoring and complications </Text>
                <Text style={[styles.centered, { fontWeight: "bold", textDecorationLine: "underline" }]}>Blood Pressure Management during and after thrombolytic administration</Text>
                <Text style={styles.centered}>Adapted AHA Guidelines for Stroke. 2018;49(3).  </Text>
                <Text></Text>
                <Text style={styles.subText}>Monitor blood pressure every 15 minutes during treatment and for additional 2 hours after treatment, then every 30 minutes for 6 hours, and then every hour for 16 hours.</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>If Systolic BP >175-230 mm Hg or diastolic BP > 100-120 mm Hg:</Text>
                <Text style={styles.subTextList}>1. <Text style={styles.subTextBold}>Labetalol </Text>10 mg IV, may be followed by continuous IV infusion 2-8 mg/min; or</Text>
                <Text style={styles.subTextList}>2. <Text style={styles.subTextBold}>Nicardipine </Text>5 mg/h IV, titrate up to desired effect by 2.5 mg/h every 5-15 min, maximum 15 mg/h; or</Text>
                <Text style={styles.subTextList}>3. <Text style={styles.subTextBold}>Clevidipine </Text>1-2 mg/h IV, titrate by doubling the dose every 2-5 min until desired BP reached; maximum 21 mg/h</Text>
                <Text style={styles.subTextList}>4.	If BP not controlled or diastolic BP > 140 mm Hg, consider IV <Text style={styles.subTextBold}>sodium nitroprusside</Text></Text>
            </View>
        );
    }
}
