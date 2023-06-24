import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style = {styles.contentContainer}>
                <Text style = {[styles.header,{ textDecorationLine: "underline" }]}>
                    OSH Transfers to Missouri Baptist Hospital - "Distributive
                    Stroke Network"
                </Text>
                <Text style = {styles.subText}>
                    For providers accepting patients through the BJC Transfer
                    Center, patients with suspected stroke and mild symptoms
                    (both thrombolytic-treated and non-thrombolytic-treated) may be transferred
                    directly to Missouri Baptist Hospital. Patients being sent
                    directly from the OSH to MBMC should meet the following criteria.
                </Text>
                <Text style = {styles.subHeader}><Text style = {[{fontWeight: "bold"},{textDecorationLine:"underline"}]}> Inclusions:</Text></Text>
                <Text style = {styles.subTextList}>Mild ischemic stroke or stroke mimics +/- thrombolytic</Text>
                <Text style = {styles.subHeader}><Text style = {[{fontWeight: "bold"},{textDecorationLine:"underline"}]}> Exclusions:</Text></Text>
                <Text style = {styles.subTextList}>Potential thrombectomy candidates</Text>
                <Text style = {styles.subTextList2}> • NIHSS ≥ 6 and mRS ≤ 2 within 24 hours of LKN
                AND meets other thrombectomy criteria</Text>
                <Text style = {styles.subTextList2}> (Always call stroke attending for thrombectomy candidates)</Text>
                <Text style = {styles.subTextList}>Patients with unstable Neuro exam</Text>
                <Text style = {styles.subTextList2}> • Potentially unstable or fluctuating deficits</Text>
                <Text style = {styles.subTextList2}> • Stroke with unexplained mental status changes</Text>
                <Text style = {styles.subTextList2}> • Stroke with seizure or suspicion of seizure</Text>
                <Text style = {styles.subTextList}>Patients at risk for major edema or hemorrhagic transformation</Text>
                <Text style = {styles.subTextList2}> • High NIHSS without any intervention</Text>
                <Text style = {styles.subTextList2}> • Medical risk for hemorrhage (INR, anticoagulation)</Text>
                <Text style = {styles.subTextList2}> • Early signs of significant edema or mass effect on HCT
                as reported on radiology report</Text>
                <Text style = {styles.subTextList}>Stroke with unusual etiology or who may benefit from early
                carotid endarterectomy</Text>
                <Text style = {styles.subTextList}>TIAs</Text>
                <Text style = {styles.subTextList}>ICH patients of any severity</Text>
                <Text style = {styles.subHeader}><Text style = {[{fontWeight: "bold"},{textDecorationLine:"underline"}]}> Note:</Text></Text>
                <Text style = {styles.subText}>All patients should have CT with wet read by local
                etiologist (ensure that CD with image accompanies patient to MBMC).</Text>

            </View>
        );
    }
}