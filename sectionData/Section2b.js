import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import PhoneNumber from "../containers/PhoneNumber";
import styles from "../components/styles";
import Table2b from "../components/tables/Table2b";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.header}>
          Neuroendovascular intervention (NEI) Consultation
        </Text>
        <Text></Text>
        <Text style={styles.subText}>
          1) When a patient is being considered for thrombectomy, the{" "}
          <Text style={styles.subTextBold}>
            Stroke Chief should call Stroke Fellow/Stroke Attending to discuss
            the case
          </Text>
          . If patient meets inclusion/exclusion criteria and Stroke
          Fellow/Stroke Attending recommend thrombectomy, Stroke Chief will
          consult NEI as follows:
        </Text>
        <Text style={styles.subTextList}>
          a){" "}
          <Text style={styles.subTextBold}>
            During regular hours (7am-5pm):
          </Text>{" "}
          neurology resident/fellow discusses case with NEI fellow{" "}
          <Text style={styles.subTextBold}>
            as soon as the possibility of a case is known
          </Text>
          . The neurology resident/fellow first calls the reading room{" "}
          <PhoneNumber number={"3143622584"} />, followed by the reception desk{" "}
          <PhoneNumber number={"3143627113"} /> if no answer, followed by the
          NEI fellow pager <PhoneNumber number={"3147664482"} /> if no answer.
        </Text>
        <Text style={styles.subTextList}>
          b){" "}
          <Text style={styles.subTextBold}>
            Outside regular hours (5pm-8am):
          </Text>{" "}
          neurology resident/fellow discusses case with NEI fellow{" "}
          <Text style={styles.subTextBold}>
            after large vessel occlusion is confirmed by imaging
          </Text>
          . The neurology resident/fellow first calls the NEI fellow (Amion.com -> WusmBJH -> Radiology)
        </Text>
        <Text style={styles.subText}>
          2) NEI fellow discusses case with NEI attending and develops a plan
          based on room availability, clinical issues, selection criteria, etc.
        </Text>
        <Text style={styles.subText}>
          3) When thrombectomy is decided a “go”, the{" "}
          <Text style={styles.subTextBold}>NEI fellow</Text> calls the ED Comm
          Center <PhoneNumber number={"3143629104"} /> and requests immediate
          activation of “Thrombectomy Pager”; the junior neurology resident is
          responsible for taking the patient up to NEI suite <Text style={styles.SubTextItalic}>with</Text> the patient’s
          RN.
        </Text>
        <Text style={styles.subText}>
          4) NEI Fellow contacts NEI team and obtains consent for thrombectomy
        </Text>
        <Text></Text>
        <Text
          style={[
            styles.centered,
            { fontWeight: "bold", textDecorationLine: "underline" },
          ]}
        >
          NEI Consultation Telephone Template
        </Text>
        <Text style={styles.SubTextItalic}>Introduction:</Text>
        <Text style={styles.subTextList2}>
          I am calling about a{" "}
          <Text style={styles.subTextBold}>potential thrombectomy </Text>on a{" "}
          <Text style={styles.subTextBold}> [#]</Text>-year old{" "}
          <Text style={styles.subTextBold}> [man/woman]</Text>. Imaging is
          available on <Text style={styles.subTextBold}>[PICOM/ClinDesk] </Text>
          under<Text style={styles.subTextBold}> [patient name/DOB]</Text>.
        </Text>
        <Text></Text>
        <Text style={styles.SubTextItalic}>Basic stroke details:</Text>
        <Text style={styles.subTextList2}>
          Imaging shows occlusion of{" "}
          <Text style={styles.subTextBold}>[artery] </Text>. Last known normal
          was<Text style={styles.subTextBold}> [#]</Text> hours ago. NIH stroke
          scale is <Text style={styles.subTextBold}>[#]</Text> due to{" "}
          <Text style={styles.ubTextBold}>[symptoms]</Text>. rt-PA
          <Text style={styles.subTextBold}> [was/was not]</Text>given.
          <Text style={styles.subTextBold}> [If not, why?]</Text>{" "}
        </Text>
        <Text></Text>
        <Text style={styles.SubTextItalic}>Basic medical history:</Text>
        <Text style={styles.subTextList2}>
          Baseline mRS is <Text style={styles.subTextBold}>[#]</Text>.
        </Text>
        <Text style={styles.subTextList2}>
          Pertinent past medical history includes{" "}
          <Text style={styles.subTextBold}>[...]</Text>.
        </Text>
        <Text style={styles.subTextList2}>
          Relevant medications include{" "}
          <Text style={styles.subTextBold}>[...]</Text>.
        </Text>
        <Text></Text>
        <Text style={styles.SubTextItalic}>For transfer patients:</Text>
        <Text style={styles.subTextList2}>
          The patient is currently at{" "}
          <Text style={styles.subTextBold}>[hospital]</Text>. ETA to BJH is{" "}
          <Text style={styles.subTextBold}>[#]</Text> minutes.
        </Text>
        <Text></Text>
        <Text style={styles.SubTextItalic}>
          For non-standard indications (NIHSS{"<"}6, LKN>6 hours, LVO other than
          ICA/M1/basilar):
        </Text>
        <Text style={styles.subTextList2}>
          The stroke attending has directly reviewed the case and supports
          consideration of thrombectomy.
        </Text>
        <Text></Text>
        <Text style={styles.SubTextItalic}>Basic contact info:</Text>
        <Text style={styles.subTextList2}>
          The stroke attending is{" "}
          <Text style={styles.subTextBold}>[name] </Text>. My name is{" "}
          <Text style={styles.subTextBold}>[name]</Text> and I can be reached at{" "}
          <Text style={styles.subTextBold}> [phone #]</Text>. Consent can be
          obtained from{" "}
          <Text style={styles.subTextBold}>
            [patient/family/two physicians]{" "}
          </Text>
          at<Text style={styles.subTextBold}> [phone #]</Text>.
        </Text>
        <Text></Text>
        <Table2b></Table2b>
      </View>
    );
  }
}
