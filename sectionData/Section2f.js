import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Important Contacts for ER / INR</Text>
                <Text></Text>
                <Text style={styles.subText}>ED Trauma Attending: 322-8444</Text>
                <Text style={styles.subText}>Charge Nurse: 758-6914</Text>
                <Text style={styles.subText}>Comm. Center: 758-6787 </Text>
                <Text></Text>
                <Text style={styles.subTextBoldUnderline}>Interventional Neuroradiology (INR) </Text>
                <Text><Text style={styles.boldText}>Reading Room INR Suite (weekday 7AM-5PM): </Text><Text style={styles.subText}> 362-2584 </Text></Text>
                <Text><Text style={styles.boldText}>Angio reception area (weekday 7AM-5PM):  </Text><Text style={styles.subText}> 362-7113</Text></Text>
                <Text><Text style={styles.boldText}>After-hours INR Fellow (5PM-7AM, weekends): </Text><Text style={styles.subText}> 766-4482</Text></Text>
                <Text></Text>
                <Text style={styles.subTextBoldUnderline}>Radiology</Text>
                <Text><Text style={styles.boldText}>NeuroRad Reading: </Text><Text style={styles.subText}> 362-2562 </Text></Text>
                <Text><Text style={styles.boldText}>ED Reading:</Text><Text style={styles.subText}> 758-6895</Text></Text>
                <Text><Text style={styles.boldText}>NeuroRad Fellow (24/7): </Text><Text style={styles.subText}> 508-3767 </Text></Text>
                <Text></Text>
                <Text style={[styles.header, { textDecorationLine: "underline" }]}>CT Scanner Phone Numbers (North / South Campus)</Text>
                <Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText}>South CT Desk:</Text>
                    <Text style={[styles.subText, { fontWeight: "bold", marginLeft: 85 }]}>362-5918</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText}>South CT Charge Tech:</Text>
                    <Text style={[styles.subText, { fontWeight: "bold", marginLeft: 32 }]}>801-3932</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText}>North CT Desk:</Text>
                    <Text style={[styles.subText, { fontWeight: "bold", marginLeft: 86 }]}>747-9696</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText}>North CT Charge Tech:</Text>
                    <Text style={[styles.subText, { fontWeight: "bold", marginLeft: 33 }]}>747-9605</Text>
                </View>
                <Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText}>Diagnostic Neuroradiology Fellow: </Text>
                    <Text style={[styles.subText, { fontWeight: "bold", marginLeft: 0 }]}>508-3767</Text>
                </View>
                <Text></Text><Text></Text>

                <Text style={styles.subText}><Text style={{ fontWeight: "bold" }}>For <Text style={{ textDecorationLine: "underline" }}>North Campus</Text> stroke codes, weekdays M-F 8A - 5P</Text> - Call North Floor Charge: 747-9605; If floor charge not available, all North front desk: 747-9696;  Take patient to Scanner 4 (has RAPID if needed).</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={{ fontWeight: "bold" }}>For <Text style={{ textDecorationLine: "underline" }}>North Campus</Text> stroke codes, after hours M-F 5P - 8A and weekends</Text> - Call South floor charge: 801-3929; If floor charge not available, call South front desk: 362-5918;  South CT tech will come and meet stroke team and patient at North CT.  Take patient to Scanner 4 (has RAPID if needed).</Text>
                <Text></Text><Text></Text>
                <Text style={[styles.header, { textDecorationLine: "underline" }]}>Nursing Phone Numbers:</Text>
                <Text></Text>
                <Text style={[styles.subText]}><Text style={{ fontWeight: "bold" }}>10500 Stroke RN: </Text>299-4876</Text>
                <Text style={[styles.subText]}><Text style={{ fontWeight: "bold" }}>ACT RN North: </Text>561-2366</Text>
                <Text style={[styles.subText]}><Text style={{ fontWeight: "bold" }}>ACT RN South: </Text>801-4088</Text>
                <Text style={[styles.subText]}><Text style={{ fontWeight: "bold" }}></Text></Text>

            </View>
        );
    }
}
