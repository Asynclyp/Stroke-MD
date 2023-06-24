import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styles from "../components/styles"
import PhoneNumber from "../containers/PhoneNumber";

export default class LotsOfStyles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get("window").width * 9 / 10
        };
    }
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={[styles.centered, { fontWeight: "bold", fontSize: 18, textDecorationLine: "underline" }]}>Acute Ischemic Stroke CTA / CTP (RAPID) Protocol</Text>
                <Text></Text>
                <Text style={styles.subText}>1)	Neuro resident orders CTA/CTP without need for pt registration, ED order, or protocolling by radiology; ask tech to perform CTA/CTP; Ask RN for two IVs if possible</Text>
                <Text style={styles.subText}>2)	CTP/CTA requires a 20 gauge or larger in the AC, or a CVL/Port/Power-PICC able to take 5mL/s. Femoral lines are acceptable if necessary. Insufficient access includes distal IV, external jugular IV, IO, and non-power injectable central lines. When in doubt, discuss with CT Technologists.</Text>
                <Text style={styles.subText}>3)	Order CTA for NIHSS ≥ 6, perform after thrombolytic bolus, do not take pt back to TCC first.</Text>
                <Text style={styles.subText}>4)	CT Tech will call Radiology Resident to come to scanner to assist with interpretation</Text>
                <Text style={styles.subText}>5)	During weekday hours (M-F 8AM-5PM), neurology resident to notify <Text style={styles.subTextBold}>NEI</Text> (neuroendovascular intervention) fellow of imminent CTA acquisition so that NEI fellow (if available) can come to scanner to facilitate NEI decision-making</Text>
                <Text style={styles.subText}>6)	Do not wait for POC Creatinine (can hydrate or dialyze later, consider renal consult after the fact if gave contrast to someone with worry for worsening renal failure)</Text>
                <Text style={styles.subText}>7) Let tech complete study and don’t distract tech during the contrast bolus.</Text>
                <Text style={styles.subText}>8) <Text style={styles.subTextUnderline}>If RAPID CTP processing FAILS (no results provided)</Text>, and LVO is present and CTP data required, let CT tech know. CT tech will call the RAPID hotline, resend the images, and potentially will repeat the CTP if needed. Can repeat the CTP if the CTP study is required for clinical care and if there was a ‘failed bolus’ (do not re-attempt for patients with severe CHF)</Text>
                <Text style={styles.subText}>9) If CTP cannot be repeated, prepare for Hyperacute MRI, such as notifying MRI and completing the screening sheet and placing the order for HyperStroke MRI.</Text>
                <Text style={styles.subText}>10) <Text style={styles.subTextUnderline}>Interpreting CTA for NEI decision-making:</Text></Text>
                {/* <Text style={[styles.subText, { textDecorationLine: "underline" }]}>8) Interpreting CTA for INR decision-making: </Text> */}
                <Text style={styles.subTextList}>a.	Radiology and Neurology residents read CTA at scanner and decide together whether Neurology resident will call NEI fellow or Radiology resident will call diagnostic (dx) neuroradiology fellow (see items b-c below).</Text>
                <Text style={styles.subTextList}>b.	If Radiology resident interprets CTA as “possible/likely LVO present” [M1, M2, ICA, basilar], Neurology stroke team notifies NEI fellow</Text>
                <Text style={styles.subTextList}>c.	If radiology resident interprets CTA as “no/unlikely LVO present”, radiology resident notifies dx neuroradiology fellow to review</Text>
                <Text style={styles.subTextList2}>i.   If dx neuroradiology fellow in agreement with read, no further action</Text>
                <Text style={styles.subTextList2}>ii.  If dx neuroradiology fellow disagrees with read and calls LVO, dx neuroradiology fellow notifies radiology resident who notifies neurology stroke team who notifies NEI fellow</Text>
                <Text style={styles.subTextList2}>iii. In the interest of time, if neurology has questions regarding or disagrees with the initial radiology resident imaging interpretation, contact dx neuroradiology fellow directly <PhoneNumber number={"3145083767"}/> </Text>
                <Text style={styles.subText}>11) All CTAs with a possible abnormality relevant to a potential endovascular stroke patient should be discussed with the stroke fellow or attending regardless of decision to call NEI</Text>
                <Text style={styles.subText}>12) <Text style={{ textDecorationLine: "underline" }}>Contraindications for CTA</Text>: active, severe pulmonary edema or history of anaphylaxis to contrast dye, but do not need to extensively review PMH for this history either.</Text>
                <Text style={styles.subTextList}>a.	Obtain Hyperacute stroke MRI/MRA instead of CTA</Text>
                <Text style={styles.subTextList2}>i.   If LVO present, make NEI aware of allergy (discuss need for pretreatment if thrombectomy will be pursued)</Text>
                <Text style={styles.subTextList}>b.	If patient has MRI contraindications, consider CTA after pretreatment</Text>
                <Text style={styles.subTextList2}>i.	Simultaneously administer pretreatment and discuss allergy with attending and NEI to determine whether patient would be intervention candidate</Text>
                <Text style={styles.subTextList3}>1.	Hydrocortisone 200 mg IV (may substitute methylprednisolone 40 mg IV)</Text>
                <Text style={styles.subTextList3}>2.	Diphenhydramine 50 mg PO/IM/IV (may omit if sedation would be a concern)</Text>
                <Text style={styles.subTextList2}>ii.	If potential intervention candidate per NEI, proceed with CTA</Text>
                <Text style={styles.subTextList}>c.	For patients with minor contrast allergy (i.e., not requiring treatment in the past)</Text>
                <Text style={styles.subTextList2}>i.	Consider pretreatment with hydrocortisone 200 mg IV (or methylprednisolone 40 mg IV)</Text>
                <Text style={styles.subTextList2}>ii.	Proceed with CTA</Text>
                <Text style={styles.subTextList2}>iii.	If LVO present, alert NEI of allergy (discuss pretreatment if thrombectomy will be pursued or administration of alternative contrast agent such as gadolinium)</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.subTextBoldUnderline}>Note on OSH Images (from PICOM or on CD)</Text>
                <Text style={styles.subTextList}>** 1) If interpretation of OSH images is unavailable or in question, request image review from stroke fellow/attending. If questions remain, a neuroradiology fellow or attending (not resident) can review the images if they are physically present in the hospital to review.  </Text>
                <Text style={styles.subTextList}>2) If no fellow/attending is available and interpretation is unclear, then imaging may need to be repeated at BJH.</Text>
                <Text></Text>
                <Image
                    style={{ justifyContent: "center", width: this.state.width, height: this.state.width * .95 }}
                    source={require('../components/Section2dPhoto.png')}
                />
            </View>
        );
    }
}
