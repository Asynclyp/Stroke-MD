import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subTextBold}>To order thrombolytic for inpatients (the ER will order in the ER as always):</Text>
                <Text style={styles.subTextList}>1.	Select appropriate order set (ED Stroke TIA and Thrombolytic, NEU Thrombolytic for Stroke and Post Thrombolytic Care Admission, or NEU Inpatient Code Stroke)</Text>
                <Text style={styles.subTextList}>2.	Select the order for IV thrombolytic - the dose will be calculated based off Epic-recorded weight</Text>
                <Text style={styles.subTextList}>3.	Select a post-thrombolytic BP regimen - either hydralazine/labetalol combo, or nicardipine</Text>
                <Text style={styles.subTextList}>4. Sign the orders</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>To document an acute stroke assessment:</Text>
                <Text style={styles.subTextList}>1.	In a patient’s chart click the ‘more’ tab on the L hand menu.</Text>
                <Text style={styles.subTextList}>2.	Select ‘Stroke evaluation’ (you can save this to the sidebar as a favorite by clicking the star next to it on the ‘more’ menu)</Text>
                <Text style={styles.subTextList}>3.	Complete the fields as you would for a regular ER acute stroke page - N.B. some will be completed by nursing and some by neurology.</Text>
                <Text style={styles.subTextList}>4. Complete a consult note <Text style={styles.subTextBold}>using “.acutestrokenote” template in EPIC </Text></Text>
                <Text style={styles.subTextList}>5.	Include responses to:  pager activation time, evaluation time, thrombolytic decision time, thrombolytic bolus time, itemized NIHSS, as well as reasons for not giving thrombolytic any reasons for delay in thrombolytic administration for treatment times longer than 30 minutes after thrombolytic pager activation.</Text>
                <Text style={styles.subTextList}></Text>
                <Text style={styles.subTextList}></Text>
            </View>
        );
    }
}
