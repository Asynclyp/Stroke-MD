import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"
import PhoneNumber from "../containers/PhoneNumber";
export default class LotsOfStyles extends Component {


    render() {
        return (

            <View style={styles.contentContainer}>
                <Text style={[styles.header,styles.subTextUnderline]}>Wake-up / Unwitnessed onset stroke protocol: </Text>
                <Text style={styles.subText}> - For patients arriving > 4.5 hr from LKN, if NIHSS ≥ 6, follow the protocol for endovascular therapy.</Text>
                <Text style={styles.subText}> - If patient is not a candidate for thrombectomy, then consider patient eligibility for Wake-up / Unwitnessed Onset Stroke Protocol </Text>
                <Text style={styles.subText}> - If elibible, discuss decision to go to hMRi with stroke chief</Text>
                <Text style={styles.subText}> - If decision yes for hMRI, order “HyperStroke MRI”, call the MRI charge tech to notify you are bringing up the patient for “Hyperacute stroke MRI and possible thrombolytic treatment”. MRI Charge Tech: <PhoneNumber number={"3143621672"} /> or <PhoneNumber number={"3143621676"} />; ensure completion of MRI screening sheet in Epic. </Text>
                <Text style={styles.subText}> - Communicate decision with ED MDs and ensure agreement </Text>
                <Text style={styles.subText}> - Notify RN and communicate need to go up to MRI as soon as possible </Text>
                <Text style={styles.subText}> - Notify RN to bring unopened thrombolytic and blood pressure medicines to MRI suite </Text>
                <Text style={styles.subText}> - Accompany RN to MRI </Text>
                <Text style={styles.subText}> - Remove any badges/metal from yourself and patient prior to arrival in MRI. Remove phones and keep in control room.  Help RN and MRI tech to remove vital signs monitor and help move patient into MRI scanner.   </Text>
                <Text style={styles.subText}> - Do not need MRI-compatible monitor on patient unless concern for abnormal vital signs (MRI protocol is ~6 min so can check vitals before and after scan) </Text>
                <Text><Text style={styles.subText}> - Remind MRI tech to perform the Hyperacute stroke MRI protocol and <Text style={styles.boldText}>MR tech will contact neuroradiology to read scan with you in person or remotely.</Text></Text></Text>
                <Text style={styles.subText}> - DWI or FLAIR should be repeated if there is significant motion artifact </Text>
                <Text style={styles.subText}> - If DWI lesion present and consistent with patient’s presenting stroke symptoms, then: </Text>
                <Text style={styles.subTextList}> • e svaluate FLAIR hyperintensity in same region as DWI lesion </Text>
                <Text style={styles.subTextList}> • Locate FLAIR slice with maximal hyperintensity in stroke region </Text>
                <Text style={styles.subTextList}> • If excessive motion artifact or chronic white matter disease/chronic lesions, preventing evaluation of FLAIR hyperintensity, then do not administer thrombolytic </Text>
                <Text style={styles.subTextList}> • If FLAIR is not hyperintense in stroke region (or only subtly hyperintense) in region of DWI lesion, then consider thrombolytic administration in MRI. </Text>
                <Text style={styles.subTextList}> • <Text style={styles.subTextUnderline}>Review MRI interpretation with neuroradiology fellow and neurology chief resident,</Text></Text>
                <Text style={styles.subTextList}> • <Text style={styles.subTextUnderline}>Chief to Notify the Stroke fellow or Stroke attending of Hyperacute MRI to help with interpretation </Text></Text>
                <Text style={styles.subText}> - Verify all IV thrombolytic inclusion/exclusion criteria (for both wake-up protocol and {"<"} 4.5 hour window) are met.  Recheck blood pressure. </Text>
                <Text style={styles.subText}> - Discuss results with chief and decide on thrombolytic </Text>
                <Text style={styles.subText}> - Discuss decision with TCC attending by phone <PhoneNumber number={"3147586903"} />. TCC attending must be aware and agreeable. </Text>
                <Text style={styles.subText}> - Prepare and administer thrombolytic bolus. </Text>
                <Text style={styles.subText}> - As a treating MD, You act as the 2<Text style={styles.superScript}>nd</Text> person needed to do the thrombolytic time-out and give thrombolytic (in the ER, two nurses verify the thrombolytic weight, dose, etc.)  </Text>
                <Text style={styles.header}>Hyperacute stroke MRI protocol (~6 min):  </Text>
                <Text style={styles.subTextList}> • DWI (~1.5 min) </Text>
                <Text style={styles.subTextList}> • FLAIR (~3.5 min) </Text>
                <Text style={styles.subTextList}> • T2* or SWI (30 sec or 3 min, respectively)  </Text>
                <Text style={styles.subTextList}> • Optional:  Time-of-flight head MRA (~3 min) - Consider in cases of fluctuating symptoms or concern for basilar artery occlusion, and when CTA has not already been done. </Text>
            </View>
        );
    }
}
