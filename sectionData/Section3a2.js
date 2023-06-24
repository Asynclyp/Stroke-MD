import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styles from "../components/styles"


export default class LotsOfStyles extends Component {


    render() {
        return (

            <View style={styles.contentContainer}>
                <Image source={require('../Images/Section3AImage2.png')} style={{ height: Dimensions.get("window").height * .4, width: Dimensions.get("window").width * .90, resizeMode: 'contain' }} />
                <Text style={styles.subTextBold}>Hyperacute MRI is a major delay to door-to-needle time.  When taking a patient for hMRI there are several things you can do to expedite treatment. Goal Door-to-MRI complete is 50 min. Goal DTN time with hMRI for decision-making is {"<"} 60 min. </Text>
                <Text style={styles.subTextList}>a. When you decide to go to hMRI, ensure that hMRI is necessary to aid tPA decision-making (when you have low suspicion for stroke).</Text>
                <Text style={styles.subTextList}>b. Push the patient up with the nurse quickly and give tPA bolus in MRI (don’t take patient back down to TCC).  As the MD, You act as the 2nd person needed to do the tPA time-out and give tPA (in the ER, two nurses verify the tPA weight, dose, etc.</Text>
                <Text style={styles.subTextList}>c. tPA is in the MRI pyxis (in the scanner control room) and ALL ER nurses have access. </Text>
                <Text style={styles.subTextList}>d. When ordering a hMRI, please remember to call the MRI charge tech to let him/her know you are bringing up the patient. MRI Charge Tech: 314-362-1672 or -1676; add this number in your work phones if it is not already there</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>Important Contacts for ESN  and Hyperacute MRI</Text>
                <Text style={styles.subText}>ED Trauma Attending: 758-6903</Text>
                <Text style={styles.subText}>Charge Nurse: 758-6914  </Text>
                <Text style={styles.subText}>Comm. Center: 758-6787 </Text>
                <Text style={styles.subTextBold}>Important Contacts for ESN  and Hyperacute MRI</Text>
                <Text style={styles.subTextBold}>MRI, South</Text>
                <Text style={styles.subText}><Text style={styles.subTextBold}>Day shift </Text>(M-F 7AM-10PM, Sat/Sun 6AM-6PM) </Text>
                <Text style={styles.subText}>Call front desk, Ask to talk to Charge Tech: <Text style={styles.subTextBold}>362-1676 / 362-1636</Text></Text>
                <Text style={styles.subText}><Text style={styles.subTextBold}>Night shift </Text>(M-F 10PM-7AM, Sat/Sun 6PM-6AM) </Text>
                <Text style={styles.subText}>Call Midnight phone at: <Text style={styles.subTextBold}>362-6349</Text>; Fax: 747-4271</Text>
                <Text style={styles.subTextBold}><Text style={styles.subTextBoldUnderline}>MRI, North </Text>314-362-5926 </Text>
                <Text style={styles.subTextBoldUnderline}>Endovascular Surgical Neuroradiology (ESN)</Text>
                <Text style={styles.subText}>Reading Room ESN Suite (weekday 7AM-5PM):  <Text style={styles.subTextBold}>362-2584 </Text></Text>
                <Text style={styles.subText}>Angio reception area (weekday 7AM-5PM):  <Text style={styles.subTextBold}>362-7113</Text></Text>
                <Text style={styles.subText}>After-hours ESN Fellow (5PM-7AM, weekends): <Text style={styles.subTextBold}>747-3251 – D.A.L.  – Ask for ESN Fellow on Call</Text></Text>
                <Text style={styles.subTextBoldUnderline}>Radiology</Text>
                <Text style={styles.subText}>NeuroRad Reading:  <Text style={styles.subTextBold}>362-2562</Text></Text>
                <Text style={styles.subText}>ED Reading: <Text style={styles.subTextBold}>758-6895</Text></Text>
                <Text style={styles.subText}>NeuroRad Fellow (24/7): <Text style={styles.subTextBold}>508-3767 </Text></Text>


                <Text></Text>
            </View>
        );
    }
}