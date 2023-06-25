import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subHeader}>Exclusion Criteria</Text>
                <Text style={styles.subText}>Age > 80</Text>
                <Text style={styles.subText}>Contraindication to MRI (i.e. pacemaker)</Text>
                <Text style={styles.subText}>Pre-morbid mRS 3 or greater </Text>
                <Text style={styles.subText}>Early CT signs of ischemia > 1/3 of the MCA territory</Text>
                <Text style={styles.subText}>Large vessel occlusion and planned thrombectomy</Text>
                <Text style={styles.subText}>NIHSS > 25 </Text>
                <Text style={styles.subText}>Contraindication to IV thrombolytic according to thrombolytic stroke protocol for less than 4.5 hour window</Text>
            </View>
        );
    }
}