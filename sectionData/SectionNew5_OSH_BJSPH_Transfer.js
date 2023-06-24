import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style = {styles.contentContainer}>
                <Text style = {[styles.header,{ textDecorationLine: "underline" }]}>
                    OSH Transfers to BJ St. Peter’s Hospital (BJSPH) for Possible Thrombectomy
                </Text>
                <Text style = {styles.subText}>
                Our telestroke service will be triaging patients from Progress West to BJSPH.{" "}
                <Text style={{ textDecorationLine: "underline" }}>
                We ask the chief residents on inpatient service to triage thrombectomy candidates to BJSPH from 
                <Text style={styles.boldText}> three non-telestroke hospitals</Text> (chosen based on proximity to BJSPH and CTA/PICOM capability) using the 
                criteria/process below:</Text></Text>
                <Text style={styles.subTextList}> 1) Consider this for patients coming from: 
                    <Text style={styles.boldText}> St. Luke’s, Hannibal, Blessing Hospita, or Pike County.</Text>
                </Text>
                <Text style={styles.subTextList}> 2) Make IV thrombolytic decision first, then consider thrombectomy eligibility. </Text>
                <Text style={styles.subTextList}> 3) If patient has a <Text style={styles.boldText}> suspected LVO on CTA by OSH radiology read</Text> and resident/inpatient 
                stroke attending read and patient is {"< 24"} hours from LKN and is considered a potential thrombectomy candidate based on 
                typical criteria, then consider for transfer to BJSPH. 
                <Text style={{ fontStyle: 'italic' }}> Note: CTP is not required, this will be performed as needed at BJSPH.</Text></Text>
                <Text style={styles.subTextList}> 4) The following steps will be needed to transfer the patient to BJSPH: </Text>
                <Text style={styles.subTextList2}> a. Contact inpatient stroke attending and determine if he/she agrees with transfer to BJSPH. </Text>
                <Text style={styles.subTextList2}> b. Ask BJC Transfer Center to contact BJSPH neuro-interventional attending (typically Dr. Brendan Eby) to give sign-out. </Text>
                <Text style={styles.subTextList2}> c. Send a brief email with pertinent patient information to the Telestroke Attending on call, as telestroke will be consulted when the patient arrives at BJSPH. </Text>
                <Text style={styles.subTextList}> 5) Patients coming from other OSHs or patients who do not meet criteria for thrombectomy will be triaged as usual to BJH or stay at local hospital.</Text>
            </View>
        );
    }
}