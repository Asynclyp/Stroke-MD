import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"
// import { red } from 'ansi-colors';
import Table1c from "../components/tables/Table1c"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>IV thrombolytic administration in CT Scanner Room</Text>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: "#FF3F3F",
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItem: "center",
                    }}><Text style={{
                        fontWeight: "bold",
                        justifyContent: "center",
                        textAlign: "center",
                        margin: 5
                    }}>Patient Arrival</Text>
                    </View>
                    <View style={styles.downArrowBar}></View>
                    <View
                        style={[styles.downArrow, { backgroundColor: "#f0f0f0" }]}
                    ></View>
                    <View style={{
                        backgroundColor: "yellow",
                        borderWidth: 1
                    }}>
                        <Text style={{ textDecorationLine: "underline", fontWeight: "bold", fontSize: 15, textAlign: "center" }}>CT Scanner Room</Text>
                        {/* <Text style={{ fontWeight: "bold", textAlign: "center" }}>Team-based approach: In-parallel Tasks</Text> */}
                        <Text></Text>
                        <Text style={{ textDecorationLine: "underline", fontWeight: "bold", textAlign: "center" }}>Phase 1: Pre-CT</Text>
                        {/* <Text><Text style={{ fontWeight: "bold" }}>"Call for Silence" - EMS: </Text><Text style={styles.subText}>EMS gives sign-out to team prior to moving to CT table</Text></Text> */}
                        {/* <Text></Text> */}
                        {/* <Text><Text style={{ fontWeight: "bold" }}>RN: </Text><Text style={styles.subText}>Pt info into HMED; Monitor placed; BP on 5 min cycle</Text></Text> */}
                        <Text>EMS Sign-out; Move pt to CT; EM/Neuro MD: Hx/NIHSS until CT Start</Text>
                        <Text></Text>
                        {/* <Text><Text style={{ fontWeight: "bold" }}>CT Tech/EMS: </Text><Text style={styles.subText}>Move pt into CT; EMS places BP cuff and pulse ox on pt</Text></Text>
                        <Text></Text>
                        <Text><Text style={{ fontWeight: "bold" }}>EM/Neuro MD: </Text><Text style={styles.subText}>Hx/NIHSS until CT Start</Text></Text> */}
                        {/* <Text></Text> */}
                        <Text style={{ textDecorationLine: "underline", fontWeight: "bold", textAlign: "center" }}>Phase 2: CT</Text>
                        {/* <Text><Text style={{ fontWeight: "bold" }}>EM/Neuro MD: </Text><Text style={styles.subText}>Decide if pt is 1 of 3 categories:</Text></Text>
                        <Text style={[styles.subText, { marginLeft: 16 }]}>a)"hemorrhagic"</Text>
                        <Text style={[styles.subText, { marginLeft: 16 }]}>b)"likely mimic / non-neurologic"</Text>
                        <Text style={[styles.subText, { marginLeft: 16 }]}>c)"possibly ischemic"</Text>
                        <Text style={[styles.subText, { marginLeft: 16 }]}>* If "possibly ischemic", inform RN to bring thrombolytic to bedside</Text>

                        <Text></Text>

                        <Text><Text style={{ fontWeight: "bold" }}>RN: </Text><Text style={styles.subText}>If "possibly ischemic", obtains thrombolytic kit from TCC pyxis; if "likely mmic / non-neurologic", calls comm RN to inform pt will not need a TCC room</Text></Text>
                        <Text></Text> */}
                        <Text>CT completed; EM/Neuro MD: Triage pt based on prelim dx.</Text>
                        <Text></Text>
                        <Text style={{ textDecorationLine: "underline", fontWeight: "bold", textAlign: "center" }}>Phase 3: Post-CT</Text>
                        {/* <Text><Text style={{ fontWeight: "bold" }}>RN: </Text><Text style={styles.subText}>obtain POC glucose, INR, IV, ECG, BP, thrombolytic dosing checklist</Text></Text>
                        <Text></Text>
                        <Table1c></Table1c>
                        <Text></Text>
                        <Text><Text style={{ fontWeight: "bold" }}>EM/Neuro MD: </Text><Text style={styles.subText}>Determine if pt is CT thrombolytic eligible (4 criteria)</Text></Text>
                        <Text style={styles.subTextListNoLineHeight}>1. Ischemic stroke meeting thrombolytic incl / excl criteria</Text>
                        <Text style={styles.subTextListNoLineHeight}>2. Requires no BP meds and IV access obtained</Text>
                        <Text style={styles.subTextListNoLineHeight}>3. All needed info is available (LKN time, inc / excl, etc)</Text>
                        <Text style={styles.subTextListNoLineHeight}>4. thrombolytic decision-making {"<"} 10 min from completing CT</Text>
                        <Text style={styles.subTextListNoLineHeight}>Discuss case with PGY-4 Neuro chief and ED attending</Text>
                        <Text></Text> */}
                        <Text>Patient evaluation by team in "in parallel"</Text>
                        <Text>EM/Neuro MD: Determine if pt is thrombolytic eligible</Text>
                        <Text></Text>
                        <Text style={{ textDecorationLine: "underline", fontWeight: "bold", textAlign: "center" }}>Phase 4: thrombolytic GO</Text>
                        {/* <Text><Text style={{ fontWeight: "bold" }}>EM/Neuro MD: </Text><Text style={styles.subText}>inform RN to mix thrombolytic, get EM attending for decision confirmation and time-out</Text></Text>
                        <Text></Text>
                        <Text><Text style={{ fontWeight: "bold" }}>RN: </Text><Text style={styles.subText}>Mix thrombolytic, time-out with MD to verify LKN time, pt weight, thrombolytic dose; administer thrombolytic bolus ONLY</Text></Text> */}
                        <Text>Thrombolytic decision confirmation and time-out, Mix / administer thrombolytic</Text>
                    </View>
                    <View style={styles.downArrowBar}></View>
                    <View
                        style={[styles.downArrow, { backgroundColor: "#f0f0f0" }]}
                    ></View>
                    <View style={{
                        backgroundColor: "#FF3F3F",
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItem: "center",
                    }}><Text style={{
                        fontWeight: "bold",
                        justifyContent: "center",
                        textAlign: "center",
                        margin: 5
                    }}>thrombolytic Delivery</Text>
                    </View>
                </View>
                <Text></Text>
                <Text></Text>
                <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>ED Acute Ischemic Stroke Protocol</Text>
                <Text style={styles.subText}>PT arrives via ambulance/EMS or walks-in via ED triage. EMS takes patient directly to Head CT first unless patient is medically unstable then pt goes to TCC first.</Text>
                <Text></Text>
                <Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>Phase 1: Pre-CT</Text>
                <Text style={styles.subTextList}> - "call for silence"</Text>
                <Text style={styles.subTextList}> - EMS gives sign-out to entire team.</Text>
                <Text><Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>Phase 2: CT</Text></Text>
                <Text style={styles.subTextList}>- CT Tech/EMS: Move pt to CT; EMS places BP cuff and pulse ox on pt</Text>
                <Text style={styles.subTextList}>- Neurology resident introduces him/herself reminds team to stay in CT for evaluation and thrombolytic treatment if patient is a suspected ischemic stroke. Ex. “Hi (insert ED RN’s or ED MD’s name).  I’m Dr. X, the Neurology Resident, and will be running this stroke code with you.  I want to remind everyone that we are going to <Text style={styles.subTextUnderline}>stay in CT</Text> to evaluate the possible stroke patient and make a quick decision on thrombolytic treatment before breaking up or moving back to TCC.”  </Text>
                <Text style={styles.subTextList}>- RN registers pt and orders stroke protocol orderset, places BP monitor on 5 min cycle; </Text>
                <Text style={styles.subTextList}>- EM/Neuro MD: Hx/NIHSS until CT Start</Text>
                <Text style={styles.subTextList}>- During head CT, EM/Neuro MD: Decide if pt is 1 of 3 categories: </Text>
                <Text style={styles.subTextList2}>a) “hemorrhagic”</Text>
                <Text style={styles.subTextList2}>b) “likely mimic / non-neurologic”</Text>
                <Text style={styles.subTextList2}>c) “possibly ischemic”; if “possibly ischemic”, inform RN to bring thrombolytic to bedside</Text>
                <Text style={styles.subTextList}>- RN: If "possibly ischemic", obtains thrombolytic kit from TCC pyxis; if "likely mimic/non-neurologic", calls comm center RN to inform pt will not need a TCC room</Text>
                <Text></Text><Text></Text>
                <Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>Phase 3: Post-CT</Text>
                <Text style={styles.subTextList}>- RN: obtain POC glucose, INR, IV, ECG, BP, thrombolytic dosing checklist</Text>
                <Text style={styles.subTextList}>- <Text style={styles.subTextUnderline}>Even Days</Text>:  EM Resident to obtain last known normal time and review thrombolytic inclusion/exclusion; Neurology Resident to perform NIHSS.</Text>
                <Text style={styles.subTextList}>- <Text style={styles.subTextUnderline}>Odd days</Text>:  Neurology Resident to obtain last known normal time and review thrombolytic inclusion/exclusion; EM Resident to perform NIHSS.</Text>
                <Text style={styles.subTextList}>-	EM/Neuro MD: Determine if pt is CT thrombolytic eligible (4 criteria, if do not meet all 4 criteria, move to TCC):</Text>
                <Text style={styles.subTextList2}>1) Ischemic stroke meeting thrombolytic incl/excl criteria</Text>
                <Text style={styles.subTextList2}>2) Requires no BP meds and IV access obtained</Text>
                <Text style={styles.subTextList2}>3) All needed info is available (LKN time, incl/excl, etc)</Text>
                <Text style={styles.subTextList2}>4) thrombolytic decision-making {"<"} 15 min from completing CT</Text>
                <Text style={styles.subTextList}>- Discuss case with PGY-4 Neuro chief and ED attending</Text>
                <Text></Text>
                <Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>Phase 4: thrombolytic GO</Text>
                <Text style={styles.subTextList}>- EM/Neuro MD: inform RN to mix thrombolytic, get EM attending for decision confirmation* and time-out**</Text>
                <Text style={styles.subTextList}>- RN: Mix thrombolytic, time-out with MD to verify LKN time, pt weight, thrombolytic dose; administer thrombolytic bolus***.</Text>
                <Text style={styles.subTextList}>- Obtain RAPID/CTA if NIHSS ≥ 6 or if considering pt for endovascular therapy</Text>
                <Text style={styles.subTextList}>- If indicated, perform RAPID / CTA after thrombolytic bolus.</Text>
                <Text style={styles.subTextList}>- (NO foley/NGT/CXR needed prior to thrombolytic)</Text>
                <Text></Text>
                <Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>Notes: </Text>
                <Text style={styles.subTextList}>- Neuro resident to call Neuro Chief to make thrombolytic decision; must ensure that RN and EM resident / attending are notified and agree with thrombolytic decision; if disagreement, call stroke attending STAT to discuss with ED attending</Text>
                <Text style={styles.subTextList}>- thrombolytic TIME OUT: Neuro/EM Resident, EM attending, and ED RN must all be at beside to agree on time of onset, weight, and dose of thrombolytic</Text>
                <Text style={styles.subTextList}>- RN or assisting MD administers thrombolytic bolus– RN documents thrombolytic bolus time in chart</Text>
                <Text style={styles.subTextList}>- Measure BP and perform neurological assessments every 15 min for 2 hr, then every 30 min for 6 hr, then hourly until 24 hr after IV thrombolytic treatment.</Text>
                <Text style={styles.subTextList}>- Admit the patient to an intensive care or stroke unit for monitoring. </Text>
                <Text style={styles.subTextList}>- If the patient develops severe headache, acute hypertension, nausea, or vomiting or has a worsening neurological examination, obtain emergency head CT scan. </Text>
                <Text style={styles.subTextList}>- Delay placement of nasogastric tubes, indwelling bladder catheters, or intra-arterial pressure catheters if the patient can be safely managed without them.</Text>
            </View >
        );
    }
}
