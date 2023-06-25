import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import styles from "../components/styles";
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.boldText, styles.header}>
          Hyperacute MRI Protocol for Stroke Mimics: to rule-out acute stroke in
          4.5 hr window{" "}
        </Text>
        {/* <Image
          source={require("../Images/Section3AImage.png")}
          style={{
            height: Dimensions.get("window").height * 0.3,
            width: Dimensions.get("window").width * 0.9,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../Images/Section3AImage2.png")}
          style={{
            height: Dimensions.get("window").height * 0.4,
            width: Dimensions.get("window").width * 0.9,
            resizeMode: "contain",
          }}
        /> */}
        <Image
          source={require("../Images/Section3AImage2(new).png")}
          style={{
            height: Dimensions.get("window").height * 0.4,
            width: Dimensions.get("window").width * 0.9,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.subTextBold}>
          Hyperacute MRI is a major delay to door-to-needle time. When taking a
          patient for hMRI there are several things you can do to expedite
          treatment. Goal Door-to-MRI complete is 50 min. Goal DTN time with
          hMRI for decision-making is {"<"} 60 min.{" "}
        </Text>
        <Text style={styles.subTextList}>
          a. When you decide to go to hMRI, ensure that hMRI is necessary to aid
          thrombolytic decision-making (when you have low suspicion for stroke).
        </Text>
        <Text style={styles.subTextList}>
          b. Push the patient up with the nurse quickly and give thrombolytic bolus in
          MRI (don’t take patient back down to TCC). As the MD, You act as the
          2nd person needed to do the thrombolytic time-out and give thrombolytic (in the ER, two
          nurses verify the thrombolytic weight, dose, etc).
        </Text>
        <Text style={styles.subTextList}>
          c. When ordering a hMRI, please remember to call the MRI charge tech
          to let him/her know you are bringing up the patient. MRI Charge Tech:{" "}
          <PhoneNumber number="3143621672" /> or{" "}
          <PhoneNumber number="3143621676" />; add this number in your work
          phones if it is not already there
        </Text>
        <Text></Text>
        <Text style={styles.subTextBold}>
          Important Contacts for NEI and Hyperacute MRI
        </Text>
        <Text style={styles.subText}>
          ED Trauma Attending: <PhoneNumber number={"3143228444"} />
        </Text>
        <Text style={styles.subText}>
          Charge Nurse: <PhoneNumber number={"3147586914"} />{" "}
        </Text>
        <Text style={styles.subText}>
          Comm. Center: <PhoneNumber number={"3147586787"} />{" "}
        </Text>
        {/* <Text style={styles.subTextBold}>
          Important Contacts for ESN and Hyperacute MRI
        </Text> */}
        <Text style={[styles.subTextBold,styles.subTextBoldUnderline]}>MRI, South</Text>
        <Text style={styles.subText}>
          <Text style={[styles.subTextBold, styles.SubTextItalic]}>Day shift </Text>(M-F 7AM-10PM,
          Sat/Sun 6AM-6PM){" "}
        </Text>
        <Text style={styles.subTextList2}>
          Call front desk, Ask to talk to Charge Tech:{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number="3143621676" /> /{" "}
            <PhoneNumber number="3143621636" />
          </Text>
        </Text>
        <Text style={styles.subText}>
          <Text style={[styles.subTextBold, styles.SubTextItalic]}>Night shift </Text>(M-F 10PM-7AM,
          Sat/Sun 6PM-6AM){" "}
        </Text>
        <Text style={styles.subTextList2}>
          Call Midnight phone at:{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3143626349"} />
          </Text>
          ; Fax: 314-747-4271
        </Text>
        <Text style={styles.subTextBold}>
          <Text style={styles.subTextBoldUnderline}>MRI, North </Text>
          <PhoneNumber number={"3143625926"} />{" "}
        </Text>
        <Text style={styles.subTextBoldUnderline}>
          Neuroendovascular intervention (NEI, Neuro-IR)
        </Text>
        <Text style={styles.subText}>
          Reading Room NEI Suite (weekday 7AM-5PM):{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3143622584"} />{" "}
          </Text>
        </Text>
        <Text style={styles.subText}>
          Angio reception area (weekday 7AM-5PM):{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3143627113"} />
          </Text>
        </Text>
        <Text style={styles.subText}>
          After-hours NEI Fellow (5PM-7AM, weekends): go to Amion.com -> WusmBJH -> Radiology
        </Text>
        <Text style={styles.subTextBoldUnderline}>Radiology</Text>
        <Text style={styles.subText}>
          NeuroRad Reading:{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3143622562"} />
          </Text>
        </Text>
        <Text style={styles.subText}>
          ED Reading:{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3147586895"} />
          </Text>
        </Text>
        <Text style={styles.subText}>
          NeuroRad Fellow (24/7):{" "}
          <Text style={styles.subTextBold}>
            <PhoneNumber number={"3145083767"} />{" "}
          </Text>
        </Text>

        <Text></Text>
      </View>
    );
  }
}
