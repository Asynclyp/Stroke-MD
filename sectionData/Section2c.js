import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import styles from "../components/styles";
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.header}>
          Protocol for OSH Transfers for Thrombectomy
        </Text>
        <Text style={styles.subText}>
          1) Contact ED Comm Center <PhoneNumber number={"3143629104"} /> to
          activate acute stroke pager upon incoming arrival from OSH. Note that{" "}
          <Text style={{ fontWeight: "bold" }}>NEI fellow</Text> will
          additionally request activation of the{" "}
          <Text style={styles.subTextBold}>“thrombectomy pager” </Text>upon
          patient arrival if CT/CTA already performed and decision made to
          perform thrombectomy.
        </Text>
        <Text style={styles.subText}>
          2) Patient stops in ED TCC room for quick medical stability
          assessment.{" "}
        </Text>
        <Text style={styles.subText}>
          3) Complete and document NIHSS; Ensure patient is safe and appropriate
          to proceed immediately to neuro-angio as planned (ex. if neuro exam
          greatly improved, may not go to angio).{" "}
        </Text>
        <Text style={styles.subText}>
          4) If CTA not performed at OSH or images unavailable **, perform
          CT/RAPID/CTA. If LVO present, proceed with NEI consultation.
        </Text>
        <Text style={styles.subText}>
          5) Patient has to be registered (termed ‘quickReg’) in the ED (cannot
          register in endovascular suite)
        </Text>
        <Text style={styles.subText}>
          6) Patient should be placed on the transport monitor and{" "}
          <Text style={styles.subTextBold}>
            transported with you AND ED RN together
          </Text>
          . If called away for another urgent page, the patient’s RN can take
          patient alone if patient is felt to be stable by MD and RN; if not
          stable, junior neurology resident should arrange for ED resident or
          NEI fellow to take patient to endovascular suite with patient’s RN.{" "}
        </Text>
        <Text style={styles.subText}>
          7) An ED physician has to see/know about patient — the ED MD must
          place order for angiogram and place admission bed order
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.subText}>
          ** 1) If radiological interpretation of OSH images (PICOM or CD) is
          unavailable or in question, request image review from stroke
          fellow/attending. If questions remain, a neuroradiology fellow or
          attending (not resident) can review the images if they are physically
          present in the hospital to review.{" "}
        </Text>
        <Text style={styles.subText}>
          2) If no fellow or attending is available, and interpretation remains
          unclear, then imaging may need to be repeated at BJH.
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.subTextUnderline}>
          BJC Transfer Center - Reminders for thrombolytic and thrombectomy
        </Text>
        <Text style={styles.subText}>
          Do not tell the OSH MD what to do. You should ask the OSH MD if they
          have an acute stroke protocol and if they have gone through all the
          inclusion/exclusion criteria and ensured there are no
          contraindications. If the answer is yes and you believe thrombolytic is
          indicated, you can say something like, “I am not there seeing the
          patient myself and don’t have access to all the patient data, but
          based on what you have told me, it sounds like it would be reasonable
          to administer thrombolytic as long as it is consistent with your protocol.”
          Also, BJC Transfer Center calls are recorded in their entirety. This
          includes the time that you are on hold waiting for the BJC Transfer
          Center nurse or OSH MD. So any discussions related to other patients
          or that involve “editorializing” about the current case, should occur
          offline.
        </Text>
      </View>
    );
  }
}
