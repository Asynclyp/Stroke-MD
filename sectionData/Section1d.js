import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import styles from "../components/styles";
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={[styles.header, { textDecorationLine: "underline" }]}>
          Inpatient Floor Acute Ischemic Stroke Protocol
        </Text>
        <Text></Text>
        <Text style={styles.subTextBold}>
          Note: thrombolytic supply for patients is located in
          <Text style={[styles.subTextUnderline, styles.SubTextItalic]}> NNICU 9400</Text>
        </Text>
        <Text style={styles.subText}>
          1. The Stroke Team is activated by hospital personnel upon recognition 
          of stroke symptoms by use of the acute stroke pager{" "}
          <PhoneNumber number={"3144076278"} />, or through the 
          hospital paging operator.
        </Text>
        <Text style={styles.subText}>
          2. After calling back the number on the acute stroke page, the neurology resident 
          will send a text page to the stroke pager with patient name, hospital 
          location, and birth date as well as where to meet the patient (hospital 
          floor or CT scanner, 2
          <Text style={styles.superScript}>nd</Text> floor Mallinckrodt for South Campus, 3
          <Text style={styles.superScript}>rd</Text> floor 
          CAM for North Campus). If patient is an outpatient/procedure patient 
          (not admitted to the hospital), the ACT team should be called to escort 
          the patient to the ED for stroke code evaluation. For admitted floor patients, 
          the resident will make a decision on whether to meet the patient on the patient's 
          floor or in the appropriate CT scanner (this may depend on anticipated delays 
          in transfer to the scanner or if imaging has already been obtained prior 
          to stroke pager activation).
        </Text>
        <Text style={styles.subText}>
          3. For patients admitted to the floor, the resident will decide if the ACT 
          nursing team should be activated in order to assist with transfer to the CT 
          scanner, establishing large bore IVs for CTA contrast, or medication 
          administration (e.g. antihypertensives before/during thrombolytic). The resident 
          can activate the ACT team, or request that the floor team activates. (ACT 
          South Campus {" "}
          <PhoneNumber number={"3148014088"} />, ACT North Campus {" "}
          <PhoneNumber number={"3145612366"} />)
        </Text>
        <Text style={styles.subText}>
          4. Neurology resident performs NIHSS, orders "Code Stroke" labs (CBC, BMP Troponin, 
           finger stick blood glucose, PT/INR, PTT) and head CT, and notifies the CT  
           tech of a possible thrombolytic patient and need for STAT radiology read.
        </Text>
        <Text style={styles.subText}>
          5. Neurology resident proceeds to assess whether patient is a thrombolytic candidate
          <Text style={{ fontWeight: "bold" }}>
            . If the patient is thought to be a possible thrombolytic candidate, the resident should 
            call the stroke nurse at {" "}
            <PhoneNumber number={"3142994876"} /> 
            </Text>{" "}
            (9400 nurse carrying the stroke phone for thrombolytics). 
            The backup number is the 9400 charge nurse at {" "}
            <PhoneNumber number={"3142676340"} />. It will take about 10 minutes for the 
            stroke nurse to arrive, so the call should be made early for patients who 
            are probable thrombolytic candidates. Give the 9400 nurse the patient name, location, 
            and birthdate and they will meet you at the specified location (CT scanner, 
            patient floor bed). 
        </Text>
        <Text style={styles.subText}>
          6. If patient is not a thrombolytic candidate, discuss with Stroke Chief/HASTE attending 
           (during HASTE hours) if patient is an Endovascular treatment candidate and order 
            CTA/CTP or MRA if appropriate. 
        </Text>
        <Text style={styles.subText}>
          7. If decision to give thrombolytic is made with Stroke Chief, who confirms it 
          with the Stroke attending,{" "}
          <Text style={{ fontWeight: "bold" }}>
            the Neurology resident must confirm the head CT read with a 
            credentialed radiologist (fellow or attending) prior to administering thrombolytic. 
          </Text>{" "}
          Last known normal time, patient weight, and thrombolytic dose are determined. 
          The Stroke RN will assist the Neurology resident in preparing the thrombolytic 
          and a TIME OUT is performed.
        </Text>
        <Text style={styles.subText}>
          8. The Neurology resident will give the bolus and document the time 
          thrombolytic was administered and that the head CT was discussed with radiology 
          prior to thrombolytic administration. The resident will document the NIHSS in EPIC 
           using the "stroke evaluation" template, documenting the timing of evaluation 
            and thrombolytic administration. See specific notes below.*
        </Text>
        <Text style={styles.subText}>
          9. The thrombolytic drug and post thrombolytic monitoring needs to be ordered in EPIC using the appropriate
           order set. See specific notes below.**
        </Text>
        <Text style={[styles.subTextBold, styles.SubTextItalic]}>
          * To document an acute stroke assessment:{" "}
        </Text>
        <Text style={styles.subTextList}>
          1. In a patient’s chart click the ‘more’ tab on the L hand menu.
        </Text>
        <Text style={styles.subTextList}>
          2. Select ‘Stroke evaluation’ (you can save this to the sidebar as a 
          favorite by clicking the star next to it on the ‘more’ menu). Complete 
           the fields as you would for a regular ER acute stroke page - N.B. some will be 
            completed by nursing and some by neurology.
        </Text>
        <Text style={styles.subTextList}>
          3. Use the <Text style={styles.subTextBold}>“.HASTENOTE” </Text>
          smartphrase in EPIC as the template and complete all fields as much as 
          possible. The responses to these fields are tracked for quality 
          improvement to improve patient outcomes.
        </Text>
        <Text style={styles.subTextList}>
          4. Include responses to: pager activation time, evaluation time, thrombolytic 
          decision time, thrombolytic bolus time, itemized NIHSS, etc., as well as 
          reasons for not giving thrombolytic any reasons for delay in thrombolytic administration 
          for treatment times longer than 30 minutes after thrombolytic pager activation. 
        </Text>
        <Text style={[styles.subTextBold, styles.SubTextItalic]}>** To order thrombolytic for inpatients (the ER will order in the ER as always):</Text>
        <Text style={styles.subTextList}>
          1. Select appropriate order set (ED Stroke TIA and Thrombolytic, NEU Thrombolytic for Stroke and Post Thrombolytic Care
          Admission, or NEU Inpatient Code Stroke)
        </Text>
        <Text style={styles.subTextList}>
          2. Select the order for IV thrombolytic - the dose will be calculated based off Epic-recorded weight
        </Text>
        <Text style={styles.subTextList}>
          3. Select a post-thrombolytic BP regimen - either hydralazine/labetalol combo, or nicardipine
        </Text>
        <Text style={styles.subTextList}>
          4. Sign the orders
        </Text>
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
        <Text></Text>
        <Text style={styles.subTextBoldUnderline}>
          CT Scanner Phone Numbers (North / South Campus)
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subText}>South CT Desk: </Text>
          <PhoneNumber number={"3143625918"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subText}>South CT Charge Tech: </Text>
          <PhoneNumber number={"3148013932"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subText}>North CT Desk: </Text>
          <PhoneNumber number={"3147479696"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subText}>North CT Charge Tech: </Text>
          <PhoneNumber number={"3147479605"} />
        </View>
        <Text></Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subText}>Diagnostic Neuroradiology Fellow: </Text>
          <PhoneNumber number={"3145083767"} />
        </View>
        <Text></Text>
        <Text></Text>

        <Text style={styles.subText}>
          <Text style={{ fontWeight: "bold" }}>
            For{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              North Campus
            </Text>{" "}
            stroke codes, weekdays M-F 8A - 5P
          </Text>{" "}
          - Call North Floor Charge: <PhoneNumber number={"3147479605"} />; If
          floor charge not available, call North front desk:{" "}
          <PhoneNumber number={"3147479696"} />; Take patient to Scanner 4 (has
          RAPID if needed).
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          <Text style={{ fontWeight: "bold" }}>
            For{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              South Campus
            </Text>{" "}
            stroke codes, after hours M-F 5P - 8A and weekends
          </Text>{" "}
          - Call South floor charge: <PhoneNumber number={"3148013929"} />; If
          floor charge not available, call South front desk:{" "}
          <PhoneNumber number={"3143625918"} />; South CT tech will come and
          meet stroke team and patient at North CT. Take patient to Scanner 4
          (has RAPID if needed).
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.header, { textDecorationLine: "underline" }]}>
          Nursing Phone Numbers:
        </Text>
        <Text></Text>
        <Text style={[styles.subText]}>
          <Text style={{ fontWeight: "bold" }}>NNICU Stroke RN: </Text>
          <PhoneNumber number={"3142994876"} />
        </Text>
        <Text style={[styles.subText]}>
          <Text style={{ fontWeight: "bold" }}>ACT RN North: </Text>
          <PhoneNumber number={"3145612366"} />
        </Text>
        <Text style={[styles.subText]}>
          <Text style={{ fontWeight: "bold" }}>ACT RN South: </Text>
          <PhoneNumber number={"3148014088"} />
        </Text>
        <Text style={[styles.subText]}>
          <Text style={{ fontWeight: "bold" }}></Text>
        </Text>
        <Text></Text>
        <Text style={[styles.header, { textDecorationLine: "underline" }]}>
          Neuroendovascular intervention (NEI, Neuro-IR):
        </Text>
        <Text></Text>
        <Text style={styles.subText}>Neuro-IR daytime referrals: </Text>
        <Text style={[styles.subTextBold]}>
          <PhoneNumber number={"3143622584"} /> – Reading Room, call first
        </Text>
        <Text style={[styles.subTextBold]}>
          <PhoneNumber number={"3143627113"} /> – Front Desk, call second
        </Text>
        <Text style={styles.subText}>Neuro-IR night/weekend: 
        go to Amion.com -> WusmBJH -> Radiology
        </Text>
      </View>
    );
  }
}
