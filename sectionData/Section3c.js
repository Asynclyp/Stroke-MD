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
        <Text style={styles.boldText}>
          Hyperacute MRI Protocol to rule-out acute stroke in 4.5 hr window
        </Text>
        <Text></Text>
        <Image
          source={require("../Images/Section3cimage1.png")}
          style={{
            height: Dimensions.get("window").height * 0.45,
            width: Dimensions.get("window").width * 0.95,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../Images/Section3cimage2.png")}
          style={{
            height: Dimensions.get("window").height * 0.45,
            width: Dimensions.get("window").width * 0.95,
            resizeMode: "contain",
          }}
        />
        <Text></Text>
        <Text style={styles.boldText}>
          Hyperacute MRI is a major delay to door-to-needle time. When taking a
          patient for hMRI there are several things you can do to expedite
          treatment.{" "}
        </Text>
        <Text style={styles.subTextList}>
          a. When you decide to go to hMRI, ensure that hMRI is necessary to aid
          tPA decision-making (when you have low suspicion for stroke).
        </Text>
        <Text style={styles.subTextList}>
          b. Push the patient up with the nurse quickly and give tPA bolus in
          MRI (don’t take patient back down to TCC). As the MD, You act as the
          2nd person needed to do the tPA time-out and give tPA (in the ER, two
          nurses verify the tPA weight, dose, etc.
        </Text>
        <Text style={styles.subTextList}>
          c. tPA is in the MRI pyxis (in the scanner control room) and ALL ER
          nurses have access.{" "}
        </Text>
        <Text style={styles.subTextList}>
          d. When ordering a hMRI, please remember to call the MRI charge tech
          to let him/her know you are bringing up the patient. MRI Charge Tech:{" "}
          <PhoneNumber number={"3143621672"} /> or{" "}
          <PhoneNumber number={"3143621676"} />; add this number in your work
          phones if it is not already there
        </Text>
      </View>
    );
  }
}
