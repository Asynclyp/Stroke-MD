import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Management of Intracranial Hemorrhage Post-thrombolytic</Text>
                <Text style={[styles.centered, { fontWeight: "bold", textDecorationLine: "underline" }]}>Adapted from AHA Guidelines for Stroke. 2018;49(3) and from Stroke. 2017; 48:e343-e361.</Text>
                <Text></Text>
                <Text style={styles.subText}>One should suspect the occurrence of intracranial hemorrhage following the administration of thrombolytic if there is any acute neurological deterioration, new headache, acute hypertension, or nausea and vomiting. </Text>
                <Text></Text>
                <Text style={styles.boldText}>If hemorrhage is suspected do the following: </Text>
                <Text style={styles.subTextList}>- Obtain immediate CT scan. </Text>
                <Text style={styles.subTextList}>- Draw blood for CBC, PT(INR), aPTT, fibrinogen, and type and cross.</Text>
                <Text style={styles.boldText}>If intracranial hemorrhage present: </Text>
                <Text style={styles.subTextList}>- Discuss management with stroke fellow/attending.</Text>
                <Text style={styles.subTextList}>- Administer 10 units of cryoprecipitate (includes FVIII) over 30 min (onset in 1 h, peaks in 12 h) **</Text>
                <Text style={styles.subTextList}>- If cryoprecipitate unavailable or declined by patient/family or if ICH is severe, consider tranexamic acid 1000 mg IV infused over 10 min OR Ɛ-aminocaproic acid 4-5 g over 1 h, followed by 1 g IV until bleeding is controlled (peak onset in 3 h).</Text>
                <Text style={styles.subTextList}>- If patient has low platelets {"<"} 100,000, administer one unit platelets. **</Text>
                <Text style={styles.subTextList}>- After cryoprecipitate administered, check fibrinogen. If {"<"} 200, give 10 units more cryoprecipitate.</Text>
                <Text style={styles.subTextList}>- Consider second CT to assess progression of intracranial hemorrhage. </Text>
                <Text style={styles.subTextList}>- Consider neurosurgical consultation.  </Text>
                <Text style={styles.subTextList}>- Supportive therapy including BP management, ICP, CPP, MAP, temperature, and glucose control.</Text>
                <Text></Text>
                <Text style={styles.subTextNoLineHeight}>** Please be advised that anytime you need to emergently give blood products, a COMPASS order IS NOT ENOUGH. In addition, you need to call blood bank and verbally request <Text style={styles.subTextBold}>EMERGENCY RELEASE </Text>of the blood product. FURTHERMORE, such emergently needed blood product <Text style={styles.subTextBold}>cannot be delivered to the bedside</Text>. You have to arrange for someone from the patient’s unit/your team to go to the blood bank and <Text style={styles.subTextBold}>PICK THEM UP</Text>.  To expedite the process, it is strongly encouraged to call the lab medicine resident very early - call 747-1320, then select option 1. This will send a page to the Lab resident on call, who will call you back. Ask them to help expedite delivery of the cryoprecipitate (should take 1 hour for thawing and dispensing to patient)</Text>
                <Text></Text>
            </View>
        );
    }
}