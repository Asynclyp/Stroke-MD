import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={[styles.header, { fontWeight: "bold", textDecorationLine: "underline" }]}>NEI / Thrombectomy Disposition / Bed Placement</Text>
                <Text></Text>
                <Text style={styles.subText}>For acute stroke patients who go to NEI suite:</Text>
                <Text style={styles.subTextList}>1)	Patients who undergo an attempted thrombectomy (whether successful or not) will go to the ICU (typically NeuroICU or SICU if no beds in NeuroICU). 3<Text style={styles.superScript}>rd</Text> floor PACU should be the destination only if there is a compelling safety reason or if there is no ICU bed available (regardless of intubation status).</Text>
                <Text style={styles.subTextList}>2)	Patients who get an angiogram, but who don't have any attempted thrombectomy, would <Text style={{ textDecorationLine: "underline" }}>not</Text> need to go to the ICU. If this is the case, the resident will need to notify the TCC resident to change the bed assignment from ICU to the appropriate stepdown or floor status bed. This may require going back to the ED if the stepdown or floor bed is not yet available.</Text>
                <Text style={styles.subTextList}>3) Overflow patients  Stroke patients (ischemic or hemorrhagic) who are admitted to the stroke service but ‘overflow’ to other units solely due to lack of bed availability (including cerebral hemorrhage or post thrombectomy patients) are to be staffed and followed by the stroke service</Text>


            </View>
        );
    }
}
