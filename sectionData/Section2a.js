import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import styles from "../components/styles";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={[styles.header, { textDecorationLine: "underline" }]}>
          Guidelines for Acute Endovascular Intervention (Thrombectomy)
        </Text>
        <Text style={[styles.centered, { textDecorationLine: "underline" }]}>
          All potential cases should be discussed with stroke fellow or stroke
          attending
        </Text>
        <Text></Text>
        <Text style={[styles.subTextBoldUnderline, styles.subHeader]}>
          Endovascular internention eligiblity criteria
        </Text>
        <Text></Text>
        <Text style={styles.subTextList}>A. Inclusion criteria</Text>
        <Text style={styles.subTextList2}>1. Age ≥ 18 years </Text>
        <Text style={styles.subTextList2}>
          2. NIHSS ≥ 6
        </Text>
        <Text style={styles.subTextList2}>
          3. Ability to initiate endovascular treatment in appropriate time 
          window, defined as 24 hours based on currently available data
        </Text>
        <Text style={styles.subTextList2}>
          4. Imaging selection criteria
        </Text>
        <Text style={styles.subTextList3}>
          a. Absence of intracranial hemorrhage, risk-modifying mass, or substantial
           mass effect or midline shift as a cause of presenting symptoms. Multiple 
           intracranial vessel occlusions are at the discretion of the treating 
           physicians taking into account the risks versus benefit of targeting 
           multiple occlusions.
        </Text>
        <Text style={styles.subTextList3}>
          b. Large vessel occlusion involving M1, ICA, vertebral artery, or basilar artery. Other 
          vessel occlusions may be considered at the discretion of the treating physicians based 
          on factors including the severity of the stroke symptoms, collateral status, and anatomically 
          favorable access.
        </Text>
        <Text style={styles.subTextList3}>
          c. Absence of unfavorable vascular anatomy or concomitant vascular lesion that would substantially 
          impede safe endovascular treatment. Tandem occlusions involving the intracranial circulation and cervical 
          arteries may be considered at the discretion of the treating physicians.
        </Text>
        <Text style={styles.subTextList2}>
          5. ASPECT ≥ 3 on noncontrast CT if treatment is expected within 24 hours of Time last seen well (TLSW). ASPECTS  
          {" <"} 3 may be considered if CTP core volume {"<"} 100 ml. (Based on RESCUE Japan LIMIT, ANGEL-APSECTS, and SELECT2 trials)
        </Text>
        <Text></Text>
        <Text style={styles.subTextList}>B. Exclusion criteria*</Text>
        <Text style={styles.subTextList2}>
          1. Pre-morbid disability (mRS ≥ 2) or comorbidities that will affect
          recovery potential
        </Text>
        <Text style={styles.subTextList2}>
          2. Current severe uncontrolled hypertension (g.g. SBP {">"} 185 mmHg or DBP {">"} 110 mmHg)
           are not an absolute contraindication for thrombectomy if the procedure is planned with 
           general anesthesia, but efforts should be made to begin blood pressure control peri and 
           intra-procedurally for a thrombectomy.
        </Text>
        <Text style={styles.subTextList2}>
          3. Bleeding diathesis **
        </Text>
        <Text style={styles.subTextList3}>
          a. Use of warfarin (Coumadin): INR {">"} 3.0
        </Text>
        <Text style={styles.subTextList3}>
          b. Thrombocytopenia: platelet count {"<"} 30,000/microliter
        </Text>
        
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.subText}>
          * IV thrombolytic exclusions related to risks of systemic complications of
          fibrinolysis are generally not risks for endovascular treatment (i.e.
          post-operative systemic bleeding risk, therapeutic/subtherapeutic oral
          anticoagulation); Deviation from exclusion criteria guidelines (i.e.
          αFXa or mRS cut-offs) may be considered on a case-by-case basis after
          discussion between stroke neurology and NEI teams.
        </Text>
        <Text style={styles.subText}>
          ** Correction of bleeding diathesis may be considered on a
          case-by-case basis following discussion between stroke neurology and
          NEI teams such as reversal with idarucizumab (Praxbind) for dabigatran
          or andexanet alfa for apixaban, rivaroxaban, and edoxaban – See “Acute
          ICH Protocol – 4. Management of Coagulopathy”
        </Text>
        
      </View>
    );
  }
}
