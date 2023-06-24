import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import styles from "../components/styles";
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        {/* <Text style={styles.header}> Neuroradiology CONTACT if needed (MR tech will contact for you): </Text>
                <Text style={styles.subText}> - MRI charge technologist phone number: 314-362-1672 or -1676. MRI personal can always be reached at this number. After hours technologist is either available at this number or has this number forwarded to their location. </Text>
                <Text style={styles.subText}> - Neuroradiology fellow pager number: 314-508-3767. A neuroradiology fellow can be reached at any time at this pager. </Text>
                <Text style={styles.subText}> - Neuroradiology main reading room phone number: 314-362-2562. Reading room is covered from 8:15 AM to 5:00 PM Monday through Friday. A fellow is present after hours from 5:00 PM to 9:00 from Monday through Friday within the reading room. Saturday a fellow is present in the reading room from 8:00 AM to 4:00 PM. Sunday is variable but typically a fellow is present from 8:00 AM to 11:00 AM.  </Text>
                <Text style={styles.subText}> - If a Hyperacute MR is being scanned within daily working hours (M-F 8:15 AM to 5 PM) please contact the main reading room phone number and a fellow will go to the scanner to provide immediate interpretation. The scan will be finalized by an attending shortly after. If there is no one in the reading room please proceed to page the neuroradiology fellow pager. </Text>
                <Text style={styles.subText}> - After hours (5 PM to 8:15 AM) and weekends please page the neuroradiology pager first and then proceed to calling the reading room if there is no response to the page. If the scan occurs within the fellow in house coverage, hours above, the fellow will proceed to the scanner to provide immediate interpretation at the scan time. If after hours the fellow will remotely view the scan as it is completed and will communicate with the neurology residents as if the fellow is in house. The fellows are experienced in “expert eye” and will view images as they are scanned from their individual laptops.  </Text>
                <Text style={styles.subText}> - Please note that the technologists will contact the neuroradiology team and they are aware of the operation hours (that is the neurology resident should not worry about doing this). However, in the rare instances that the technologist is not aware of this (for example a new technologist) then this should serve as a guideline for communication with neuroradiology team.  </Text> */}
        {/* <Text style={styles.subHeader}>Important Contacts for INR and Hyperacute MRI</Text>
                <Text style={styles.subText}> ED Trauma Attending: 758-6903  Charge Nurse: 758-6914  Comm. Center: 758-6787  </Text>
                <Text></Text>
                <Text style={styles.boldText}>MRI, South</Text>
                <Text></Text>
                <Text><Text style={styles.boldText}>Day shift</Text><Text style={styles.subText}> (M-F 7AM-10PM, Sat/Sun 6AM-6PM)</Text></Text>
                <Text><Text style={styles.subTextList}>Call front desk, Ask to talk to Charge Tech: </Text><Text style={styles.boldText}>362-1676 / 362-1636</Text></Text>
                <Text></Text>
                <Text><Text style={styles.boldText}>Night shift</Text><Text style={styles.subText}> (M-F 10PM-7AM, Sat/Sun 6PM-6AM)</Text></Text>
                <Text><Text style={styles.subTextList}>Call Midnight phone at: </Text><Text style={styles.boldText}>362-6349</Text><Text style={styles.subText}>; Fax: 747-4271</Text></Text>
                <Text></Text>
                <Text style={styles.boldText}>Interventional Neuroradiology (INR)</Text>
                <Text><Text style={styles.boldText}>Reading Room INR Suite (weekday 7AM-5PM): </Text><Text style={styles.subText}> 362-2584 </Text></Text>
                <Text><Text style={styles.boldText}>Angio reception area (weekday 7AM-5PM):  </Text><Text style={styles.subText}> 362-7113</Text></Text>
                <Text><Text style={styles.boldText}>After-hours INR Fellow (5PM-7AM, weekends): </Text><Text style={styles.subText}> 766-4482</Text></Text>
                <Text style={styles.boldText}>Radiology</Text>
                <Text><Text style={styles.boldText}>NeuroRad Reading: </Text><Text style={styles.subText}> 362-2562 </Text></Text>
                <Text><Text style={styles.boldText}>ED Reading:</Text><Text style={styles.subText}> 758-6895</Text></Text>
                <Text><Text style={styles.boldText}>NeuroRad Fellow (24/7): </Text><Text style={styles.subText}> 508-3767 </Text></Text> */}
        <Text style={styles.header}>Special situations for hMRI:</Text>
        <Text style={styles.subText}>
          1) If Hyperacute MRI process occurs at night and another acute page
          occurs, the On-Call Chief Resident will call the On-Call Stroke
          Resident to cover the Hyperacute MRI patient so the Night Float
          Resident can respond to the other Stroke Page. The On-Call Stroke
          Resident will assume care for the patient and make the treatment
          recommendation to ED Attending. After MRI is complete, the On-Call
          Stroke Resident will inform the Night Float Resident about the results
          if Night Float will continue to follow the patient.{" "}
        </Text>
        <Text style={styles.subText}>
          2) If screening sheet cannot be completed due to inability to obtain
          information from patient or family, then the patient must undergo a
          ventriculoperitoneal shunt series in the ED. This should be reviewed
          immediately by the radiology resident{" "}
          <PhoneNumber number={"3147586895"} />. The radiology resident can make
          the decision on whether the MRI is safe to perform or not based on
          these radiographs, but may consult the neuroradiology fellow or
          attending if he or she has questions.{" "}
        </Text>
      </View>
    );
  }
}
