import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subTextList}>B. Exclusion criteria*</Text>
                <Text style={styles.subTextList2}>1. Pre-morbid disability (mRS ≥ 2) or comorbidities that will affect recovery potential</Text>
                <Text style={styles.subTextList2}>2. Intracranial hemorrhage, mass, or mass effect as cause of stroke symptoms</Text>
                <Text style={styles.subTextList2}>3. Current severe uncontrolled hypertension (e.g. SBP > 185 mmHg or DBP > 110 mmHg) despite reasonable efforts to treat</Text>
                <Text style={styles.subTextList2}>4. Bleeding diathesis**</Text>
                <Text style={styles.subTextList3}>a. Use of warfarin (Coumadin): INR > 3.0</Text>
                <Text style={styles.subTextList3}>b. Use of dabigatran (Pradaxa): TT > 30 sec <Text style={{ textDecorationLine: "underline" }}>and</Text> PTT > 70 sec (wait for manual TT correction to rule out heparin contamination)</Text>
                <Text style={styles.subTextList3}>c. Use of apixiban (Eliquis), rivaroxaban (Xarelto): αFXa > 0.40 U</Text>
                <Text style={styles.subTextList3}>d. Use of edoxaban (Savaysa): αFXa > 0.15 U</Text>
                <Text style={styles.subTextList3}>e. Thrombocytopenia: platelet count {'<'} 30,000/microliter</Text>
            </View>
        );
    }
}


