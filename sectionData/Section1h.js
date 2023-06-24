import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import PhoneNumber from "../containers/PhoneNumber";
import styles from "../components/styles";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        {/* <Text style={styles.header}>
          Post-thrombolytic BP monitoring and complications{" "}
        </Text> */}
        <Text
          style={[
            styles.centered,
            { fontWeight: "bold", textDecorationLine: "underline" },
            styles.header
          ]}
        >
          Blood Pressure Management during and after thrombolytic administration
        </Text>
        <Text style={styles.centered}>
          Adapted AHA Guidelines for Stroke. 2018;49(3).{" "}
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          Monitor blood pressure every 15 minutes during treatment and for
          additional 2 hours after treatment, then every 30 minutes for 6 hours,
          and then every hour for 16 hours.
        </Text>
        <Text></Text>
        <Text style={styles.subTextBold}>
          If Systolic BP >175-230 mm Hg or diastolic BP > 100-120 mm Hg:
        </Text>
        <Text style={styles.subTextList}>
          1. <Text style={styles.subTextBold}>Labetalol </Text>10 mg IV, may be
          followed by continuous IV infusion 2-8 mg/min; or
        </Text>
        <Text style={styles.subTextList}>
          2. <Text style={styles.subTextBold}>Nicardipine </Text>5 mg/h IV,
          titrate up to desired effect by 2.5 mg/h every 5-15 min, maximum 15
          mg/h; or
        </Text>
        <Text style={styles.subTextList}>
          3. <Text style={styles.subTextBold}>Clevidipine </Text>1-2 mg/h IV,
          titrate by doubling the dose every 2-5 min until desired BP reached;
          maximum 21 mg/h
        </Text>
        <Text style={styles.subTextList}>
          4. If BP not controlled or diastolic BP > 140 mm Hg, consider IV{" "}
          <Text style={styles.subTextBold}>sodium nitroprusside</Text>
        </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={[
          styles.centered,
          { fontWeight: "bold", textDecorationLine: "underline" },
          styles.header
        ]}>
          Management of Intracranial Hemorrhage Post-thrombolytic
        </Text>
        <Text
          style={[
            styles.centered
          ]}
        >
          Adapted from AHA Guidelines for Stroke. 2018;49(3) and from Stroke.
          2017; 48:e343-e361.
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          One should suspect the occurrence of intracranial hemorrhage following
          administration of thrombolytic if there is any acute neurological
          deterioration, new headache, acute hypertension, or nausea and
          vomiting.{" "}
        </Text>
        <Text></Text>
        <Text style={styles.boldText}>
          If hemorrhage is suspected do the following:{" "}
        </Text>
        <Text style={styles.subTextList}>- Obtain immediate CT scan. </Text>
        <Text style={styles.subTextList}>
          - Draw blood for CBC, PT(INR), aPTT, fibrinogen, and type and cross.
        </Text>
        <Text style={styles.boldText}>
          If intracranial hemorrhage present:{" "}
        </Text>
        <Text style={styles.subTextList}>
          - Discuss management with stroke fellow/attending.
        </Text>
        <Text style={styles.subTextList}>
          - Administer 10 units of cryoprecipitate (includes FVIII) over 30 min
          (onset in 1 h, peaks in 12 h) **
        </Text>
        <Text style={styles.subTextList}>
          - If cryoprecipitate unavailable or declined by patient/family or if
          ICH is severe, consider tranexamic acid 1000 mg IV infused over 10 min
          OR Ɛ-aminocaproic acid 4-5 g over 1 h, followed by 1 g IV until
          bleeding is controlled (peak onset in 3 h).
        </Text>
        <Text style={styles.subTextList}>
          - If patient has low platelets {"<"} 100,000, administer one unit
          platelets. **
        </Text>
        <Text style={styles.subTextList}>
          - After cryoprecipitate administered, check fibrinogen. If {"<"} 200,
          give 10 units more cryoprecipitate.
        </Text>
        <Text style={styles.subTextList}>
          - Consider second CT to assess progression of intracranial hemorrhage.{" "}
        </Text>
        <Text style={styles.subTextList}>
          - Consider neurosurgical consultation.{" "}
        </Text>
        <Text style={styles.subTextList}>
          - Supportive therapy including BP management, ICP, CPP, MAP,
          temperature, and glucose control.
        </Text>
        <Text></Text>
        <Text style={styles.subTextNoLineHeight}>
          ** Please be advised that anytime you need to emergently give blood
          products, a COMPASS order IS NOT ENOUGH. In addition, you need to call
          blood bank and verbally request{" "}
          <Text style={styles.subTextBold}>EMERGENCY RELEASE </Text>of the blood
          product. FURTHERMORE, such emergently needed blood product{" "}
          <Text style={styles.subTextBold}>
            cannot be delivered to the bedside
          </Text>
          . You have to arrange for someone from the patient’s unit/your team to
          go to the blood bank and{" "}
          <Text style={styles.subTextBold}>PICK THEM UP</Text>. To expedite the
          process, it is strongly encouraged to call the lab medicine resident
          very early - call <PhoneNumber number={"3147471320"} />, then select
          option 1. This will send a page to the Lab resident on call, who will
          call you back. Ask them to help expedite delivery of the
          cryoprecipitate (should take 1 hour for thawing and dispensing to
          patient)
        </Text>
        <Text></Text>
        <Text style={styles.header}>
          Additional Management of Orolingual Angioedema Associated With IV
          thrombolytic Administration forAIS
        </Text>
        <Text
          style={[
            styles.centered,
            { fontWeight: "bold", textDecorationLine: "underline" },
          ]}
        >
          Adapted from Stroke. 2018; January 24, 2018.
        </Text>
        <Text></Text>
        <Text style={styles.subText}>Maintain airway</Text>
        <Text style={styles.subTextList}>
          • ETT may not be necessary if edema is limited to the anterior tongue
          or lips
        </Text>
        <Text style={styles.subTextList}>
          • Edema involving the larynx, palate, floor of mouth, or oropharynx
          with rapid progression (within 30 min) poses higher risk of requiring
          intubation.
        </Text>
        <Text style={styles.subTextList}>
          • Awake fiberoptic intubation is optimal. Nasal-tracheal intubation
          may be required but poses risk of epistaxis post-IV thrombolytic.{" "}
        </Text>
        <Text style={styles.subTextList}>
          • Cricothyroidotomy is rarely needed and also problematic after IV
          thrombolytic.
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          Hold ACEIs
        </Text>
        <Text style={styles.subText}>
          Administer IV methylprednisolone 125 mg
        </Text>
        <Text style={styles.subText}>Administer IV diphenhydramine 50 mg</Text>
        <Text style={styles.subText}>
          Administer ranitidine 50 mg IV or famotidine 20 mg IV
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          If there is further increase in angioedema, administer epinephrine
          (0.1%) 0.3 mL SQ or by nebulizer 0.5 mL
        </Text>
        <Text style={styles.subText}>
          Icatibant, a selective bradykinin B2 receptor antagonist, 3 mL (30 mg)
          subcutaneously in abdominal area; additional injection of 30 mg may be
          administered at intervals of 6 h not to exceed total of 3 injections
          in 24 h; and plasma-derived C1 esterase inhibitor (20 IU/kg) has been
          successfully used in hereditary angioedema and ACEI-related
          angioedema.
        </Text>
        <Text></Text>
        <Text style={styles.subText}>Supportive care.</Text>
      </View>
    );
  }
}
