import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subTextBold}>A. Neuroimaging and laboratory evaluation</Text>
                <Text style={styles.subTextList}>1.	All patients with suspicion for acute cerebral vascular event will undergo urgent head CT (as discussed in Acute Ischemic Stroke protocol)</Text>
                <Text style={styles.subTextList}>2.	Once ICH is identified, CT angiography should be performed unless one of the following exclusion criteria is present:</Text>
                <Text style={styles.subTextList2}>a. Known underlying lesion (e.g., trauma, AVM, tumor)</Text>
                <Text style={styles.subTextList2}>b. Post thrombolytic ICH</Text>
                <Text style={styles.subTextList2}>c. Serum creatinine >1.4</Text>
                <Text style={styles.subTextList2}>d. Known allergy to iodinated contrast media</Text>
                <Text style={styles.subTextList2}>e. Non-survivable ICH or likely comfort care/withdrawal of care</Text>
                <Text style={styles.subTextList2}>f. Previously evaluated hemorrhage</Text>
                <Text style={styles.subTextList2}>g. Medical instability</Text>
                <Text style={styles.subTextList}>3.	Further imaging with MRI, MRV, and/or catheter angiography will be considered if CT, CTA, or clinical features suggest an underlying structural lesion (e.g., abnormal signal in cerebral sinuses suggesting venous thrombosis).</Text>
                <Text style={styles.subTextList2}>a. Timing of additional imaging will depend on suspected lesion and need for emergent treatment</Text>
                <Text style={styles.subTextList}>4.	Laboratory evaluation will include measurement of hemoglobin and hematocrit, platelets, prothrombin time (PT), partial thromboplastin time (PTT), thrombin time (TT) (if taking dabigatran), anti-factor Xa (αFXa) assay (if taking apixaban, rivaroxaban, or edoxaban), electrolytes, renal and hepatic function, and troponin</Text>
            </View>
        );
    }
}
