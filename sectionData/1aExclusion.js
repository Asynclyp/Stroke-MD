import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Acute Ischemic Stroke IV Thrombolytic Eligibility Criteria</Text>
                <Text style={styles.subText}>Adapted from AHA 2018 Guidelines (Stroke, 2018), Activase Prescribing Information (2/2015)</Text>
                
                <Text style={styles.subHeader}>Exclusion Criteria:</Text>
                <Text style={styles.subText}>1. Intracranial hemorrhage on head CT </Text>
                <Text style={styles.subText}>2. Serious head trauma in the past 3 months</Text>
                <Text style={styles.subText}>3.	Active bleeding or suspected underlying abnormality, including but not limited to:</Text>
                <Text style={styles.subTextList}>a. INR ≥1.7<Text style={styles.superScript}>3</Text></Text>
                <Text style={styles.subTextList}>b. Platelet count {'<'}100,000/ml<Text style={styles.superScript}>3</Text></Text>
                <Text style={styles.subTextList}>c. PTT ≥ 40. If initial PTT 40-80, may consider thrombolytic if repeat PTT {"<"} 40 when repeated 60 min after heparin turned off and patient still within thrombolytic window. (Heparin’s T1/2 = 60-90 min). If patient has history of lupus anticoagulant with elevated PTT, may consider thrombolytic.</Text>
                <Text style={styles.subTextList}>d. Patient has received treatment (not prophylactic) dose of injectable anticoagulants (e.g. enoxaparin, dalteparin, tinzaparin, fondaparinux) in the past 24 hours (36 hrs for patients with moderate-severe renal impairment, i.e., Cr Cl {"<"}30 ml/min).</Text>
                <Text style={styles.subTextList}>e. Patient takes apixaban, rivaroxaban, or edoxaban and αFXa {">"}0.10 U. For patients at outside facilities, consider thrombolytic only if last dose of apixaban was known to be administered more than 48 hrs previously.</Text>
                <Text style={styles.subTextList}>f. Patient takes dabigatran and thrombin time {">"} 30. For outside facilities, local hospital’s thrombin time can be checked; if no thrombin time available, consider transfer to BJH. </Text>
                <Text style={styles.subText}>4.	On repeated measurement, SBP {">"} 185 or DBP {">"} 110 at the time of thrombolytic bolus administration (see Guidelines below)</Text>
                <Text style={styles.subText}>5.	Symptoms suggest subarachnoid hemorrhage despite no hemorrhage seen on CT</Text>
                <Text style={styles.subText}>6.	Infective endocarditis as suspected cause of ischemic stroke.</Text>
                <Text style={styles.subText}>7.	For 3-4.5 hour window only, presentation with severe stroke (NIHSS {">"} 25)</Text>

                <Text><Text style={styles.boldText}>Relative Exclusion Criteria </Text><Text style={styles.subText}>(weigh potential benefit of thrombolytic in reducing long-term disability with risk of hemorrhagic complications):</Text></Text>
                <Text style={styles.subText}>1.	Major surgery or serious trauma within last 14 days (e.g. CABG, obstetrical delivery)</Text>
                <Text style={styles.subText}>2.	Intracranial or intraspinal surgery in the previous 3 months</Text>
                <Text style={styles.subText}>3. Serum glucose {"<"} 50 mg/dl or {">"} 400 mg/dl (Treat to bring glucose to {">"} 50 mg/dl and {"<"} 400 mg/dl; consider thrombolytic if symptoms do not resolve after treatment and are consistent with stroke diagnosis)</Text>
                <Text style={styles.subText}>4. Stroke within past 3 months</Text>
                <Text style={styles.subText}>5. History of intracranial hemorrhage<Text style={styles.superScript}>4</Text></Text>
                <Text style={styles.subText}>6.	GI or GU hemorrhage within 21 days or known structural GI malignancy at risk of bleeding</Text>
                <Text style={styles.subText}>7. Primary or metastatic intracranial, intra-axial neoplasm <Text style={styles.superScript}>5</Text></Text>
                <Text style={styles.subText}>8. Seizure at onset (with deficits thought to be related to ictal or post-ictal state and not new stroke)</Text>
                <Text style={styles.subText}>9. Arterial puncture at a non-compressible site (e.g. subclavian artery)</Text>
                <Text style={styles.subText}>10. Large unsecured aneurysm {">"}10mm<Text style={styles.superScript}>6</Text></Text>
                <Text style={styles.subText}>11. Arteriovenous malformation (AVM). Consider thrombolytic if moderate to severe stroke with stroke morbidity and mortality likely to outweigh risk of ICH</Text>
                <Text style={styles.subText}>12. Extensive regions of clear hypoattenuation on CT<Text style={styles.superScript}>7</Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>1 </Text>Consider thrombolysis with careful deliberation (with the chief/fellow/attending) for age {"<"} 18</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>2 </Text>Stroke Onset is defined as the last documented time that the patient was observed to be without symptoms (Last time known to be normal). It is NOT the time that the patient awakened with symptoms or was found down.</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>3 </Text>Because time is critical, thrombolytic therapy should not be delayed while waiting for the results of the PT, PTT, or platelet count unless a bleeding abnormality or thrombocytopenia is suspected, the patient has been taking an anticoagulant, or anticoagulation use is suspected (e.g. in a patient with atrial fibrillation).</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>4 </Text>For history of ICH:</Text>
                <Text style={styles.subTextList}>- Thrombolytic administration in patients with history of parenchymal hemorrhage is potentially harmful</Text>
                <Text style={styles.subTextList}>- Incidental chronic micro-hemorrhages on MRI are not a contraindication to thrombolytic</Text>
                <Text style={styles.subTextList}>- Consider thrombolytic in individuals with old resolved traumatic intracranial hemorrhage (including subdural and epidural hematomas)</Text>
                <Text style={styles.subTextList}>- Consider thrombolytic for individuals with history of aneurysmal subarachnoid hemorrhage with aneurysms that are felt to be adequately secured</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>5 </Text>Intracranial extra-axial neoplasm (e.g. meningioma, acoustic schwannoma, arachnoid cyst) are not considered contraindications to IV thrombolytic</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>6 </Text>For patients presenting with acute ischemic stroke who are known to harbor a small or moderate-sized ({"<"}10 mm) unruptured and unsecured intracranial aneurysm, administration of thrombolytic is reasonable.</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.superScript}>7 </Text>For early ischemic changes of mild to moderate extent on CT, thrombolytic administration may be recommended. There remains insufficient evidence to identify a threshold of hypoattenuation severity or extent that affects treatment response to thrombolytic. However, administering thrombolytic to patients whose CT exhibits extensive regions of clear hypoattenuation is not recommended. These patients have a poor prognosis despite thrombolytic, and severe hypoattenuation defined as obvious hypodensity represents irreversible injury.</Text>
                
            </View>
        );
    }
}