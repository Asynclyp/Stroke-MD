import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={[styles.header,{ textDecorationLine: "underline" }]}>IV thrombolytic Eligibility Criteria for wake-up or unwitnessed stroke</Text>
                <Text style={styles.subHeader}>Inclusion Criteria</Text>
                <Text style={styles.subText}> - Clinical signs of acute stroke with disabling stroke deficit</Text>
                <Text style={styles.subText}> - Patient is > 4.5 hr from last known normal (LKN) time</Text>
                <Text style={styles.subText}> - Patient can get a Hyperacute MRI (hMRI) and be treated with IV thrombolytic in less than 4.5 hr from symptom discovery</Text>
                <Text style={styles.subHeader}>Exclusion Criteria</Text>
                <Text style={styles.subText}> - Age > 80</Text>
                <Text style={styles.subText}> - Contraindication to MRI (i.e. pacemaker)</Text>
                <Text style={styles.subText}> - Pre-morbid mRS 3 or greater </Text>
                <Text style={styles.subText}> - Early CT signs of ischemia > 1/3 of the MCA territory</Text>
                <Text style={styles.subText}> - Large vessel occlusion and planned thrombectomy</Text>
                <Text style={styles.subText}> - NIHSS > 25 </Text>
                <Text style={styles.subText}> - Contraindication  to IV thrombolytic according to thrombolytic stroke protocol for less than 4.5 hour window</Text>
            </View>
        );
    }
}
