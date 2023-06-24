import React, { Component } from "react";
import {
  Dimensions,
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styles from "../components/styles";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.subTextBold}>Emergency Medical Management</Text>
        <Text style={styles.subTextList}>
          A. <Text style={{ fontWeight: "bold" }}>General Monitoring:</Text>
        </Text>
        <Text style={styles.subTextList2}>
          a. Patients will have standard cardiovascular monitoring/continuous
          telemetry with frequent assessment of vital signs and neurologic
          status.
        </Text>
        <Text style={styles.subTextList2}>
          b. Change in neurologic status will prompt consideration of repeat
          head CT.
        </Text>

        <Text style={styles.subTextList}>
          B.{" "}
          <Text style={{ fontWeight: "bold" }}>
            Airway and respiratory management
          </Text>
        </Text>
        <Text style={styles.subTextList2}>
          a. Patients will be assessed for sonorous respiration, inability to
          manage oral secretions, or decreased oxygen saturation.
        </Text>
        <Text style={styles.subTextList2}>
          b. Initial airway management for patients with impaired ability to
          protect airway include proper positioning, frequent suctioning, and
          placement of an oral or nasal airway.
        </Text>
        <Text style={styles.subTextList2}>
          c. If conservative measures are ineffective, intubation may be
          necessary.
        </Text>
        <Text style={styles.subTextList3}>
          1. Intubation will be accomplished with short-acting IV anesthetic
          agents.
        </Text>
        <Text style={styles.subTextList}>
          C.{" "}
          <Text style={{ fontWeight: "bold" }}>
            Management of blood pressure (BP)
          </Text>
        </Text>
        <Text style={styles.subTextList2}>
          a. Recommended thresholds for BP lowering{" "}
        </Text>
        <Text style={styles.subTextList3}>
          1. If mean arterial pressure (MAP) is >130 mm Hg, BP should be lowered
          about 10-20% unless concerns about hypoperfusion in the setting of
          chronic uncontrolled hypertension outweigh potential benefits. BP may
          be lowered further if there are signs of other acute hypertensive end
          organ damage.
        </Text>
        <Text style={styles.subTextList3}>
          2. If MAP is 110-130 mm Hg, BP may be lowered about 10-20%. BP may be
          lowered further if there are signs of other acute hypertensive end
          organ damage.
        </Text>
        <Text style={styles.subTextList3}>
          3. If MAP is {"<"} 110 mm Hg, potential benefits vs. risks of BP
          lowering should be weighed on a case by case basis.
        </Text>
        <Text style={styles.subTextList2}>b. Antihypertensive treatment</Text>
        <Text style={styles.subTextList3}>
          1. Intravenous agents with a short half-life and minimal
          cerebrovascular effects (e.g., intermittent boluses of labetalol
          and/or hydralazine or continuous infusion of nicardipine) are
          preferred.
        </Text>
        <Text style={styles.subTextList3}>
          2. Drugs that can raise ICP or lower cerebral blood flow (e.g., sodium
          nitroprusside, nitroglycerin, ganglionic blockers) should be avoided.
        </Text>
        <Text style={styles.subTextList3}>
          3. Patients receiving antihypertensive treatment will have BP
          monitored frequently.
        </Text>

        <Text style={styles.subTextList}>
          D.{" "}
          <Text style={{ fontWeight: "bold" }}>Management of coagulopathy</Text>
        </Text>
        <Text style={styles.subTextList2}>
          a. If the ICH is considered non-survivable or withdrawal of support is
          anticipated, risks/ benefits and futility of administering emergency
          reversal agents should be considered.{" "}
        </Text>
        <Text style={styles.subTextList2}>
          b. Severe coagulation factor deficiency or severe thrombocytopenia:
          administer appropriate factor replacement therapy or platelets.
        </Text>
        <Text style={styles.subTextList2}>
          c. <Text style={styles.subTextUnderline}>Antiplatelet agent</Text>{" "}
          user who is being considered for surgical intervention may have
          platelet function assayed and platelets transfused if dysfunction (Epi{" "}
          {"<"}160, ADP{"<"}110) verified.{" "}
        </Text>
        <Text style={styles.subTextList2}>
          d. <Text style={styles.subTextUnderline}>Therapeutic heparin </Text>{" "}
          user: refer to BJH anticoagulation reversal protocol.{" "}
        </Text>
        <Text style={styles.subTextList2}>
          e. <Text style={styles.subTextUnderline}>Warfarin </Text> user:
          obtain INR{" "}
        </Text>
        <Text style={styles.subTextList3}>
          1. INR≥1.4, administer intravenous vitamin K and either fresh frozen
          plasma (FFP) or prothrombin complex concentrate (PCC).
        </Text>
        <Text style={styles.subTextList3}>
          2. Assess INR after treatment and if >1.4, repeat factor replacement
          until ≤1.4.
        </Text>
        <Text style={styles.subTextList2}>
          f. <Text style={styles.subTextUnderline}>Dabigatran </Text> user:
          obtain thrombin time (TT){" "}
        </Text>
        <Text style={styles.subTextList3}>
          1. If TT>30 sec or if CTA demonstrates spot sign (regardless of TT),
          administer idarucizumab (Praxbind) 5g IV.
        </Text>
        <Text style={styles.subTextList3}>
          2. If Praxbind unavailable or contraindicated
        </Text>
        <Text style={styles.subTextList4}>
          {" "}
          a) Consider administration of 4-factor PCC 50U/kg x 1 dose.
        </Text>
        <Text style={styles.subTextList4}>
          {" "}
          b) Consider emergent hemodialysis, particularly if decreased renal
          function (call renal consult; refer them to their dabigatran protocol
          if needed).
        </Text>
        <Text style={styles.subTextList2}>
          g. <Text style={styles.subTextUnderline}>Edoxaban</Text> user: order
          anti-factor Xa (αFXa) assay
        </Text>
        <Text style={styles.subTextList3}>
          1. If αFXa level >0.4 or if CTA demonstrates spot sign (regardless of
          antiXa level), consider 4-factor PCC 50 U/kg IV x 1 dose
        </Text>
        <Text style={styles.subTextList2}>
          h.{" "}
          <Text style={styles.subTextUnderline}>Apixaban or rivaroxaban </Text>
          user: order anti-factor Xa (αFXa) assay{" "}
        </Text>
        <Text style={styles.subTextList3}>
          1. If αFXa level >0.4 or if CTA demonstrates spot sign (regardless of
          antiXa level), consider reversal with andexanet alfa (see dosing
          guidelines below).
        </Text>
        <Text style={styles.subTextList3}>
          2. If andexanet alfa not used, consider 4-factor PCC 50 U/kg IV x 1
          dose
        </Text>
        <Image
          source={require("../Images/chartTransparent.png")}
          style={{
            height: Dimensions.get("window").height * 0.35,
            width: Dimensions.get("window").width * 0.95,
            resizeMode: "contain",
          }}
        />
      </View>
    );
  }
}
