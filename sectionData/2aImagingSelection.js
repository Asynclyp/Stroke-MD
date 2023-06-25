
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.subTextList}>C. Imaging selection criteria</Text>
                <Text style={styles.subTextList2}>1. Absence of intracranial hemorrhage, mass, or mass effect as a cause of presenting symptoms</Text>
                <Text style={styles.subTextList2}>2. Large vessel occlusion involving M1, ICA, vertebral artery, or basilar artery ***</Text>
                <Text style={styles.subTextList2}>3. Absence of vascular anatomy or concomitant vascular lesion that would substantially impede safe endovascular treatment</Text>
                <Text style={styles.subTextList2}>4. No evidence of large completed infarct (e.g., ASPECTS ≥ 6)</Text>
                <Text style={styles.subTextList2}>5. If treatment expected within 6-16 hours of TLSW and NIHSS ≥ 6, core infarct volume ≤ 70 mL, mismatch volume ≥ 15 mL, mismatch volume ≥ 1.8</Text>
                <Text style={styles.subTextList2}>6. If treatment expected within 16-24 hours of TLSW and NIHSS ≥ 10, core infarct volume ≤ 30 mL (for age {"<"} 80 years) or core infarct volume ≤ 20 mL (for age ≥ 80 years)</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.subText}>* IV thrombolytic exclusions related to risks of systemic complications of fibrinolysis are generally not risks for endovascular treatment (i.e. post-operative systemic bleeding risk, therapeutic/subtherapeutic oral anticoagulation); Deviation from exclusion criteria guidelines (i.e. αFXa or mRS cut-offs) may be considered on a case-by-case basis after discussion between stroke neurology and INR teams.</Text>
                <Text style={styles.subText}>** Correction of bleeding diathesis may be considered on a case-by-case basis following discussion between stroke neurology and NEI teams such as reversal with idarucizumab (Praxbind) for dabigatran or andexanet alfa for apixaban, rivaroxaban, and edoxaban – See “Acute ICH Protocol – 4. Management of Coagulopathy”</Text>
                <Text style={styles.subText}>*** Exceptions may be made for other vessel occlusions (i.e. M2) at the discretion of the treating physician if there is compelling clinical and radiological evidence suggesting benefit or in the presence of an approved research protocol</Text>
            </View>
        );
    }
}