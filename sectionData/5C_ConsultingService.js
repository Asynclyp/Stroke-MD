import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Table5c from "../components/tables/Table5c";
import styles from "../components/styles";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.subTextBold}>
          Consulting Services by type of ICH
        </Text>
        <Text style={styles.subText}>
          All patients with ICH will be evaluated by the two services according
          to the following criteria:
        </Text>
        <Table5c></Table5c>
        <Text></Text>
        <Text></Text>
        <Text style={styles.subTextBold}>
          BJC Transfer Center or OSH Referrals for ICH (Majority of primary SAH,
          SDH, EDH are covered by NSGY)
        </Text>
        <Text style={styles.subTextList}>
          1. Neuro-Stroke and NSGY cover ICH calls on alternating days,
          regardless of which service the OSH requests. NSGY covers ICH on the
          days the General Neuro Chief is on call.
        </Text>
        <Text style={styles.subTextList}>
          2. Whoever takes the call handles the entire call, including if an
          incorrect service is paged.
        </Text>
        <Text style={styles.subTextList}>
          3. Once the patient is accepted, the referring physician is released from
          the call, and the Chief Resident notifies the ED or ICU staff of the incoming
          patient as appropriate.
        </Text>
        <Text style={styles.subTextList}>
          4. If after discussing / reviewing the case with the OSH and accepting
          the patient, the accepting Chief thinks the patient might need the care
          of the other service, then this should be discussed Chief to Chief via
          BJC Transfer Center, a page / pager phone, or in person.
        </Text>
        <Text style={styles.subTextList}>
          5. If the patient changes teams after this discussion, then the new
          team is responsible for care and admitting documentation once the
          patient arrives. The original accepting team is responsible for
          notifying the ED comm center or NNICU / 10500 about which service
          should come to evaluate the patient upon arrival.
        </Text>
        <Text style={styles.subTextList}>
          6. If after evaluating the patient upon arrival, the original accepting
          team believes the other service is more appropriate, the other service
          should be involved at this time.
        </Text>
        <Text style={styles.subTextList}>
          7. If there is disagreement about the appropriate service either at the
          time of the call or after initial evaluation, then it is the responsibility
          of the original accepting team to care for the patient until the disagreement
          can be resolved. In rare cases, this may require an attending-to-attending
          discussion.
        </Text>
        <Text style={styles.subTextList}>
          8. If it is obvious from the call / image review that the patient has
          an SAH, SDH, brain tumor, etc. and BJC Transfer Center was given the wrong
          diagnosis, please ask BJC Transfer Center to page the correct team.
          The original team should stay on the line until the other service is
          patched through.
        </Text>
        <Text style={styles.subTextList}>
          9. If, after arrival, it is determined that the patient did not have
          an ICH (e.g. tumor, calcification, etc.), then the accepting team
          maintains responsibility for the initial care of the patient.
        </Text>
        <Text style={styles.subTextList}>
          10. <Text>Overflow patients: </Text>
           Stroke patients (ischemic or hemorrhagic) who are admitted to the
          stroke service but ‘overflow’ to other units solely due to lack of bed
          availability (including cerebral hemorrhage or post thrombectomy
          patients) are to be staffed and followed by the stroke service.
        </Text>
        <Text></Text>
      </View>
    );
  }
}
