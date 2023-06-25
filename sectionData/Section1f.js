import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
        <Text style={styles.subTextBold}>
          Abbreviated thrombolytic (tenecteplase) mixing/administration instructions:
        </Text>
        <Text style={styles.subTextList}>
          1. SWAB Sterile Water & Tenecteplase vials with alcohol pad.
        </Text>
        <Text style={styles.subTextList}>
          2. Use the included syringe to aseptically WITHDRAW 10 mL of Sterile Water for injection.
        </Text>
        <Text style={styles.subTextList}>
          3. INJECT entire contents (10 mL) into the Tenecteplase vial, directing the diluent at the powder. Slight foaming is normal.
        </Text>
        <Text style={styles.subTextList}>
          4. Gently SWIRL until contents are completely dissolved. DO NOT SHAKE.
          Reconstitution should be complete in approximately 1 minute. Final concentration is 5 mg/mL.
        </Text>
        <Text style={styles.subTextList}>
          5. INSPECT the solution for particulate matter or discoloration. The solution should be colorless
          or pale yellow and transparent.
        </Text>
        <Text style={styles.subTextList}>
          6. WITHDRAW the appropriate volume of solution based on Epic order. Waste WILL be present in the vial.
        </Text>
        <Text style={styles.subTextList}>
          7. FLUSH the patient's intravenous catheter with sodium chloride 0.9% (normal saline) 10 mL flush. 
        </Text>
        <Text style={styles.subTextList}>
          8. ADMINISTER Tenecteplase as an intravenous bolus over 10 seconds.
        </Text>
        <Text style={styles.subTextList}>
          9. FLUSH the intravenous catheter with sodium chloride 0.9% (normal saline) 10 mL flush.
        </Text>

            </View>
        );
    }
}
