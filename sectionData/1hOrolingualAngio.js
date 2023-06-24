import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Additional Management of Orolingual Angioedema Associated With IV Thrombolytic Administration forAIS</Text>
                <Text style={[styles.centered, { fontWeight: "bold", textDecorationLine: "underline" }]}>Adapted from Stroke. 2018; January 24, 2018.</Text>
                <Text></Text>
                <Text style={styles.subText}>Maintain airway</Text>
                <Text style={styles.subTextList}>• ETT may not be necessary if edema is limited to the anterior tongue or lips</Text>
                <Text style={styles.subTextList}>• Edema involving the larynx, palate, floor of mouth, or oropharynx with rapid progression (within 30 min) poses higher risk of requiring intubation.</Text>
                <Text style={styles.subTextList}>• Awake fiberoptic intubation is optimal. Nasal-tracheal intubation may be required but poses risk of epistaxis post-IV thrombolytic. </Text>
                <Text style={styles.subTextList}>• Cricothyroidotomy is rarely needed and also problematic after IV thrombolytic.</Text>
                <Text></Text>
                <Text style={styles.subText}>Discontinue IV thrombolytic infusion and hold ACEIs</Text>
                <Text style={styles.subText}>Administer IV methylprednisolone 125 mg</Text>
                <Text style={styles.subText}>Administer IV diphenhydramine 50 mg</Text>
                <Text style={styles.subText}>Administer ranitidine 50 mg IV or famotidine 20 mg IV</Text>
                <Text></Text>
                <Text style={styles.subText}>If there is further increase in angioedema, administer epinephrine (0.1%) 0.3 mL SQ or by nebulizer 0.5 mL</Text>
                <Text style={styles.subText}>Icatibant, a selective bradykinin B2 receptor antagonist, 3 mL (30 mg) subcutaneously in abdominal area; additional injection of 30 mg may be administered at intervals of 6 h not to exceed total of 3 injections in 24 h; and plasma-derived C1 esterase inhibitor (20 IU/kg) has been successfully used in hereditary angioedema and ACEI-related angioedema.</Text>
                <Text></Text>
                <Text style={styles.subText}>Supportive care.</Text>
            </View>
        );
    }
}