import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import styles from "../components/styles";
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <Text style={[styles.header,{textDecorationLine:"underline"}]}>
          {" "}
          Neuroradiology CONTACT if needed (MR tech will contact for you):{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • <Text style={styles.boldText}>MRI charge technologist phone number:{" "}
          <PhoneNumber number={"3143621672"} /> or{" "}
          <PhoneNumber number={"3143621676"} /></Text>. MRI personal can always be
          reached at this number. After hours technologist is either available
          at this number or has this number forwarded to their location.{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • <Text style={styles.boldText}>Neuroradiology fellow pager number:{" "}
          <PhoneNumber number={"3145083767"} /></Text>. A neuroradiology fellow can be
          reached at any time at this pager.{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • <Text style={styles.boldText}>Neuroradiology main reading room phone number:{" "}
          <PhoneNumber number={"3143622562"} /></Text>. Reading room is covered from
          8:15 AM to 5:00 PM Monday through Friday. A fellow is present after
          hours from 5:00 PM to 9:00 from Monday through Friday within the
          reading room. Saturday a fellow is present in the reading room from
          8:00 AM to 4:00 PM. Sunday is variable but typically a fellow is
          present from 8:00 AM to 11:00 AM.{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • If a Hyperacute MR is being scanned within daily working hours (M-F
          8:15 AM to 5 PM) please contact the main reading room phone number and
          a fellow will go to the scanner to provide immediate interpretation.
          The scan will be finalized by an attending shortly after. If there is
          no one in the reading room please proceed to page the neuroradiology
          fellow pager.{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • After hours (5 PM to 8:15 AM) and weekends please page the
          neuroradiology pager first and then proceed to calling the reading
          room if there is no response to the page. If the scan occurs within
          the fellow in house coverage, hours above, the fellow will proceed to
          the scanner to provide immediate interpretation at the scan time. If
          after hours the fellow will remotely view the scan as it is completed
          and will communicate with the neurology residents as if the fellow is
          in house. The fellows are experienced in “expert eye” and will view
          images as they are scanned from their individual laptops.{" "}
        </Text>
        <Text style={styles.subText}>
          {" "}
          • Please note that the technologists will contact the neuroradiology
          team and they are aware of the operation hours (that is the neurology
          resident should not worry about doing this). However, in the rare
          instances that the technologist is not aware of this (for example a
          new technologist) then this should serve as a guideline for
          communication with neuroradiology team.{" "}
        </Text>
      </View>
    );
  }
}
