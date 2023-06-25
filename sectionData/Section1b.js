import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Blood Pressure Management before thrombolytic administration </Text>
                <Text style={styles.centered}>Adapted AHA Guidelines for Stroke. 2018;49(3)</Text>
                <Text></Text>
                <Text style={styles.subText}>Treat for Systolic BP > 185 mm Hg or Diastolic BP > 110 mm Hg if eligible for acute reperfusion therapy:</Text>
                <Text style={styles.subTextList}><Text style={styles.boldText}>Labetalol</Text><Text style={styles.subText}> 10-20 mg IV over 1 to 2 minutes, wait 5 minutes, may repeat x 1-2; For low heart rate {"<"} 70, may substitute Hydralazine 10-20 mg IV instead of Labetalol; or</Text></Text>
                <Text style={styles.subTextList}><Text style={styles.boldText}>Nicardipine</Text><Text style={styles.subText}> infusion, 5 mg/h IV, titrate up by 2.5 mg/h at 5- to 15-minute intervals, maximum dose 15 mg/h; when desired blood pressure attained, reduce to 3 mg/h; or</Text></Text>
                <Text style={styles.subTextList}><Text style={styles.boldText}>Clevidipine</Text><Text style={styles.subText}> 1-2 mg/h IV, titrate by doubling the dose every 2-5 min until desired BP reached; maximum 21 mg/h</Text></Text>
                <Text style={styles.subTextList}><Text style={styles.boldText}></Text><Text style={styles.subText}>If blood pressure remains >185/110 mm Hg, do not administer thrombolytic.</Text></Text>
                <Text></Text>
                <Text style={styles.subTextList}>Monitor blood pressure every 15 minutes during the antihypertensive therapy.  Observe for hypotension (defined as BP lowering > 25% initial BP measurement on arrival). If neurologic worsening or hypotension occurs, consider IVF bolus, discontinuing nicardipine or clevidipine infusion, and/or reversing antihypertensive effects.</Text>

            </View>
        );
    }
}
