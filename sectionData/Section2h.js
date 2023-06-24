import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={[styles.header, { fontWeight: "bold", textDecorationLine: "underline" }]}>CTA in ED for high-risk TIA, minor stroke</Text>
                <Text></Text>
                <Text style={styles.subText}>After thrombolytic and thrombectomy decision-making, while the patient is still in the CT scanner, consider patient’s candidacy for dual antiplatelet therapy, with goal to initiate therapy within 24 hrs of LKN.</Text>
                <Text></Text>
                <Text style={styles.subText}>If creatinine within the last 6 month or POC creatinine ≤ 1.5mg/dL, consider performing early CTA head/Neck in the ER for:</Text>
                <Text style={styles.subTextList}>•	High risk TIAs (ABCD2 ≥ 4)</Text>
                <Text style={styles.subTextList}>•	Mild stroke (NIHSS ≤ 3)</Text>
                <Text></Text>
                <Text style={styles.subText}>Do not perform CTA for:</Text>
                <Text style={styles.subTextList}>•	Non-TIA / stroke diagnosis</Text>
                <Text style={styles.subTextList}>•  Not a candidate for dual antiplatelet therapy (high or recent bleeding risk, expected requirement for anticoagulation)</Text>
                <Text style={styles.subTextList}>•	 Prior craniocerebral imaging (e.g. CTA, carotid doppler, catheter angiography) within the previous 3 months.</Text>
            </View>
        );
    }
}
