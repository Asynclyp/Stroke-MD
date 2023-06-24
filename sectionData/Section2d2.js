import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from "../components/styles"


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
                <Text style={[styles.centered, { fontWeight: "bold", fontSize: 18, textDecorationLine: "underline" }]}>Direct-To-Thrombectomy Protocol</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.subTextUnderline}>Protocol:</Text> If you anticipate administration of thrombolytic will delay transporting the patient to NEI (i.e., NEI team is in house and ready to receive the patient), it is reasonable to discuss with the HASTE attending/chief on call foregoing thrombolytic in order to immediately transport the patient to NEI.</Text>
                <Text></Text>
                <Text style={styles.subText}>- Early communication with NEI will be critical. During the day, NEI will not mind a heads up call about potential cases, even if not fully worked up. This will aid in moving patients around/get the room ready and <Text style={styles.subTextUnderline}>also relay any expected delays from NEI that might warrant administration of lytics.</Text></Text>
                <Text style={styles.subText}>- This will be a case-by-case basis.</Text>
                <Text style={styles.subText}>- We will not bundle HCT/CTA as part of this protocol.</Text>
                <Text style={styles.subText}>- This will only occur during the daytime hours (7AM-5PM during weekdays).</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.subTextUnderline}>Contingency plan for lytic administration:</Text> In the rate case that for a technical reason the clot cannot be accessed by NEI, i.e. only a diagnostic angiogram occurs, then the patient will be considered for lytics if they are still in the time window. The NEI team should contact the HASTE team for neurology to re-evaluate/re-examine the patient and discuss need for lytics or repeated imaging</Text>
                <Text style={styles.subText}>- Patients with attempted thrombectomy without reperfusion (TICI 0-2a), <Text style={styles.subTextUnderline}>would not be considered for thrombolytic</Text>, as the trials showing equivalency between the two treatement arms would have included a large proportion of these patients.</Text>
                <Text style={styles.subText}>- The repeat examination of the patient might be difficult due to intubation/exam confounders. If the patient's <Text style={styles.subTextUnderline}>NIHSS {">"} 25, their thrombolytic window will be up to 3 hours from LKN</Text>. We will not consider lytics up to 4.5 hours in this population.</Text>
                <Text style={styles.subText}>- Repeat imaging will be a case by case and likely will be more dependent on what happened than on an exam, since there likely won’t be an exam.</Text>
                <Text style={styles.subText}>- Repeat imaging will be a case by case and likely will be more dependent on what happened than on an exam, since there likely won’t be an exam.</Text>
                <Text style={styles.subText}>- If imaging is needed, we are comfortable pursuing a DYNA scan if needed.</Text>
                <Text style={styles.subText}>- If Neurology team has deemed the patient a candidate for thrombolytic, neurology team will contact the stroke nurse to come meet the patient at NEI for potential lytic administration.</Text>
                <Text style={styles.subText}>- Most of these patients will be intubated, for which the patient will continue to go to the NNICU.</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.subTextUnderline}>Comments:</Text> The metric we are tracking is the time interval between 1) when NEI has made the decision to pursuit thrombectomy and 2) when the patient leaves the ED. This time interval should be no longer than 15 minutes. The thrombectomy pager will continue to be activated throughout the pilot.</Text>
                <Text></Text>
                <Text style={styles.boldText}> - Early communication will be key to ensure that if there are delays from a NEI standpoint, that thrombolytic is then given in a timely fashion.</Text>
            </View>
        );
    }
}