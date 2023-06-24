
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Table5d from "../components/tables/Table5d"
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subTextBold}>Criteria for ICU vs. SDU Hospital admission</Text>
                <Text></Text>
                <Table5d></Table5d>
            </View >
        );
    }
}