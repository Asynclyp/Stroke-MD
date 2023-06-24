import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"
import Table5c from "../components/tables/Table5c"
import Table5d from "../components/tables/Table5d"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text className="header" style={[styles.header, { textDecorationLine: "underline" }]}>Section 5. Acute ICH Protocol</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>5A. Neuroimaging and laboratory evaluation</Text>
                <Text style={styles.subTextList}>1.	All patients with suspicion for acute cerebral vascular event will undergo urgent head CT (as discussed in Acute Ischemic Stroke protocol)</Text>
                <Text style={styles.subTextList}>2.	Once ICH is identified, CT angiography should be performed unless one of the following exclusion criteria is present:</Text>
                <Text style={styles.subTextList2}>a. Known underlying lesion (e.g., trauma, AVM, tumor)</Text>
                <Text style={styles.subTextList2}>b. Post thrombolytic ICH</Text>
                <Text style={styles.subTextList2}>c. Serum creatinine >1.4</Text>
                <Text style={styles.subTextList2}>d. Known allergy to iodinated contrast media</Text>
                <Text style={styles.subTextList2}>e. Non-survivable ICH or likely comfort care/withdrawal of care</Text>
                <Text style={styles.subTextList2}>f. Previously evaluated hemorrhage</Text>
                <Text style={styles.subTextList2}>g. Medical instability</Text>
                <Text style={styles.subTextList}>3.	Further imaging with MRI, MRV, and/or catheter angiography will be considered if CT, CTA, or clinical features suggest an underlying structural lesion (e.g., abnormal signal in cerebral sinuses suggesting venous thrombosis).</Text>
                <Text style={styles.subTextList2}>a. Timing of additional imaging will depend on suspected lesion and need for emergent treatment</Text>
                <Text style={styles.subTextList}>4.	Laboratory evaluation will include measurement of hemoglobin and hematocrit, platelets, prothrombin time (PT), partial thromboplastin time (PTT), thrombin time (TT) (if taking dabigatran), anti-factor Xa (αFXa) assay (if taking apixaban, rivaroxaban, or edoxaban), electrolytes, renal and hepatic function, and troponin</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>5B. BP, Coagulopathy, Supportive Management</Text>
                <Text style={styles.subTextList}>A. <Text style={{ fontWeight: "bold" }}>General Monitoring:</Text></Text>
                <Text style={styles.subTextList2}>Patients will have standard cardiovascular monitoring/continuous telemetry with frequent assessment of vital signs and neurologic status.</Text>
                <Text style={styles.subTextList3}>a. Change in neurologic status will prompt consideration of repeat head CT.</Text>
                <Text style={styles.subTextList}>2. <Text style={{ fontWeight: "bold" }}>Airway and respiratory management</Text></Text>
                <Text style={styles.subTextList2}>a. Patients will be assessed for sonorous respiration, inability to manage oral secretions, or decreased oxygen saturation</Text>
                <Text style={styles.subTextList2}>b. Initial airway management for patients with impaired ability to protect airway will include proper positioning, frequent suctioning, and placement of an oral or nasal airway. If conservative measures are ineffective, intubation may be necessary</Text>
                <Text style={styles.subTextList3}>i. Intubation will be accomplished with short-acting IV anesthetic agents</Text>
                <Text style={styles.subTextList}>3. <Text style={{ fontWeight: "bold" }}>Management of blood pressure</Text></Text>
                <Text style={styles.subTextList2}>a. If mean arterial pressure (MAP) is >130 mm Hg, blood pressure should be lowered about 10-20% unless concerns about hypoperfusion in the setting of chronic uncontrolled hypertension outweigh potential benefits. Blood pressure may be lowered further if there are signs of other acute hypertensive end organ damage.</Text>
                <Text style={styles.subTextList2}>b. If MAP is 110 – 130 mm Hg, blood pressure may be lowered about 10-20%.  Blood pressure may be lowered further if there are signs of other acute hypertensive end organ damage.If MAP is {"<"} 110 mm Hg, potential benefits vs. risks of blood pressure lowering should be weighed on a case by case basis.</Text>
                <Text style={styles.subTextList3}>i.   Intravenous agents with a short half-life and minimal cerebrovascular effects (e.g., intermittent boluses of labetalol and/or hydralazine or continuous infusion of nicardipine) are preferred</Text>
                <Text style={styles.subTextList3}>ii.  Drugs that can raise ICP or lower cerebral blood flow (e.g., sodium nitroprusside, nitroglycerin, ganglionic blockers) will be avoided</Text>
                <Text style={styles.subTextList3}>iii. Patients receiving antihypertensive treatment will have BP monitored frequently.</Text>
                <Text style={styles.subTextList}>4. <Text style={{ fontWeight: "bold" }}>Management of coagulopathy</Text></Text>
                <Text style={styles.subTextList2}>a. Patients with severe coagulation factor deficiency or severe thrombocytopenia will receive appropriate factor replacement therapy or platelets</Text>
                <Text style={styles.subTextList2}>b. Patients taking warfarin with INR≥1.4 will receive intravenous vitamin K and factor replacement with fresh frozen plasma or prothrombin complex concentrate (PCC.a</Text>
                <Text style={styles.subTextList3}>i. INR will be assessed after treatment and if >1.4, factor replacement repeated until ≤1.4</Text>
                <Text style={styles.subTextList2}>c. Patients taking dabigatran with elevated TT (>30 sec) will be treated as follows:</Text>
                <Text style={styles.subTextList3}>i.	Administer idarucizumab (Praxbind) 5g IV</Text>
                <Text style={styles.subTextList3}>ii.	If Praxbind unavailable or contraindicated, consider:</Text>
                <Text style={styles.subTextList4}>a. 4-factor PCC 50 U/kg IV</Text>
                <Text style={styles.subTextList3}>iii.	Consider emergent hemodialysis, particularly if decreased renal function </Text>
                <Text style={styles.subTextList3}>iv.	Patients receiving hemostatic agents will be monitored for thrombosis with troponin and lower extremity Doppler</Text>
                <Text style={styles.subTextList2}>d. Patients taking rivaroxaban, apixaban, or edoxaban with PTT > 37 sec will be treated as follows:</Text>
                <Text style={styles.subTextList3}>i.  4-factor PCC 50 U/kg IV</Text>
                <Text style={styles.subTextList3}>ii. Patients receiving hemostatic agents will be monitored for thrombosis with troponin and lower extremity Doppler</Text>
                <Text style={styles.subTextList2}>e.	Patients taking antiplatelet therapy who are being considered for surgical intervention may have platelet function assayed and, if platelet dysfunction verified (Epi {"<"}160, ADP {"<"}110), transfusion with platelets</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>5C. Consulting Services by type of ICH</Text>
                <Text style={styles.subText}>All patients with ICH will be evaluated by the two services according to the following criteria:</Text>
                <Table5c></Table5c>
                <Text></Text>
                <Text></Text>
                <Text style={styles.subTextBold}>For parenchymal ICH only (Majority of primary SAH, SDH, EDH are covered by NSGY).</Text>
                <Text style={styles.subTextList}>1.	Neuro-Stroke and NSGY cover ICH calls on alternating days, regardless of which service the OSH requests.  NSGY covers ICH on the days the General Neuro Chief is on call.</Text>
                <Text style={styles.subTextList}>2.	Whoever takes the call, handles the entire call, even if the your service is paged accidentally on a day when you are not taking call.  This also applies if the General Chief is paged instead of the Stroke Chief.</Text>
                <Text style={styles.subTextList}>3.	Once the patient is accepted, please release the OSH ED from DAL. DAL can connect you to the ICU fellow / charge nurse or ED comm center to notify the appropriate team that the patient is en route</Text>
                <Text style={styles.subTextList}>4.	If after discussing / reviewing the case with the OSH and accepting the patient, the accepting team thinks the patient might need the care of the other service, then this should be discussed Chief to Chief via DAL, a page / pager phone, or in person.</Text>
                <Text style={styles.subTextList}>5.	If the patient changes teams after this discussion, then the new team is responsible for care and admitting documentation once the patient arrives.  The original accepting team is responsible for notifying the ED comm center or NNICU / 10500 about which service should come to evaluate the patient upon arrival.</Text>
                <Text style={styles.subTextList}>6.	If there is disagreement about the appropriate service, then it is the responsibility of the original accepting team to care for the patient until the patient is evaluated by the attendings (often the next morning) and a decision is made. In rare cases, this may require an attending to attending discussion. Team receiving is responsible of evaluating upon arrival, if felt that the other service is more appropriate they should involve them at this time.</Text>
                <Text style={styles.subTextList}>7.	If it is obvious from the call / image review that the patient has an SAH, brain tumor, etc. and DAL was given the wrong diagnosis, please ask DAL to page the correct team. The original team should stay on the line until the other service is patched through.</Text>
                <Text style={styles.subTextList}>8.	If, after arrival, it is determined that the patient did not have an ICH (e.g. tumor, calcification, etc.), then the accepting team maintains responsibility for the initial care of the patient.</Text>
                <Text></Text>
                <Text style={styles.subTextBold}>5D. Criteria for ICU vs. SDU Hospital admission</Text>
                <Text></Text>
                <Table5d></Table5d>



            </View>
        );
    }
}
