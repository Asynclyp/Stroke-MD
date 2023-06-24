import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Endovascular eligibility criteria</Text>
                <Text></Text>
                <Text style={[styles.header, { textDecorationLine: "underline" }]}>Guidelines for Acute Endovascular Intervention (Thrombectomy)</Text>
                <Text style={[styles.centered, { textDecorationLine: "underline" }]}>All potential cases should be discussed with stroke fellow or stroke attending</Text>
                <Text></Text>
                <Text style={styles.subTextBoldUnderline}>Selection criteria for endovascular intervention</Text>
                <Text style={styles.subTextList}>A. Inclusion criteria</Text>
                <Text style={styles.subTextList2}>1. Age ≥ 18 years </Text>
                <Text style={styles.subTextList2}>2. NIHSS ≥ 6 if {"<"} 16 hours from time since last well [TSLW], OR NIHSS ≥ 10 if 16-24 hours from TSLW</Text>
                <Text style={styles.subTextList2}>3. Ability to initiate endovascular treatment in appropriate time window, defined as 24 hours based on currently available data</Text>
                <Text style={styles.subTextList2}>4. For posterior circulation: treatment time-window is at the discretion of the attending physician</Text>
            </View>
        );
    }
}
