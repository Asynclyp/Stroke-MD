import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Linking } from 'react-native';
import styles from "../components/styles"
import { TouchableOpacity } from 'react-native-gesture-handler';
import PhoneNumber from '../containers/PhoneNumber';
import URLLink from '../containers/URLLink';

export default class LotsOfStyles extends Component {
    openTempoLink = "https://mir.opentempo.com/mir/zk/PublicTeamCalendar.zk?userPersistentParameterSetId=10da735f5b4cb54a6f&datebarEnabled=32eaea008f644c2526&datepickerEnabled=1801151ea9bf648e26";

    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>CT Radiology Reads for thrombolytic candidates</Text>
                <Text></Text>
                <Text style={styles.subText}><Text style={styles.subTextBold}>Background: </Text>CT head without contrast for thrombolytic candidates are time sensitive. Per Joint Commission (JC), they need to be interpreted promptly (within 10 minutes after scanning) to exclude hemorrhage and results documented prior to thrombolytic administration. <Text style={styles.subTextUnderline}>In addition, they have to be interpreted by credentialed physicians, which are the neuroradiology attendings and fellows. </Text></Text>
                <Text></Text>
                <Text style={styles.subText}>Two scenarios can occur. Scenario 1: patient presents to the scanner as a thrombolytic candidate. The neurologist will inform the technologist of the patient candidacy and the technologist will follow the workflow below. Scenario 2, patient present as STAT head CT without contrast (wo) and after going back to patient care area the neurologist determines that the patient is a thrombolytic candidate. In this scenario the neurologist will contact the technologist to inform the technologist of the change in patient status while providing a contact number to be reached. The technologist will proceed with the workflow below.</Text>
                <Text style={styles.subTextBoldUnderline}>Workflow for ordering and interpreting head CT for thrombolytic candidates:</Text>
                <Text style={styles.subTextList}><Text style={styles.subTextBold}>1. For acute stroke patients in the ED who are thrombolytic candidates</Text></Text>
                <Text style={styles.subTextList2}>a. Clinical team orders a “CT head WO stroke” as priority 1 exam</Text>
                <Text style={styles.subTextList2}>b. Clinical team informs the CT tech that this is a thrombolytic candidate (scenarios above)</Text>
                <Text style={styles.subTextList2}>c. CT tech calls the “brain reading room” or “ED reading room” depending on the time of the day</Text>
                <Text style={styles.subTextList3}><Text style={styles.subTextBold}>i. During the working hours (M-F: 8am-5 pm, sat: 8am-noon), the CT tech calls the Brain reading room <PhoneNumber number='3143622562'/>. </Text>Credentialed neuroradiology fellow or resident (in conjunction with a neuroradiology attending) reads the study immediately and calls back to the CT control room to provide a verbal result to the clinical team.  The physician names, date and time of the communication are documented in the radiology report</Text>
                <Text style={styles.subTextList3}><Text style={styles.subTextBold}>ii. During off hours (M-F: 5pm-8am, sat: noon-8am, sun: 8am-8am), the CT tech calls the ED reading room <PhoneNumber number='3147474567'/>. </Text>The ED radiology resident reads study immediately with ED neuroradiology attending, on call neuroradiology attending or evening shift neuroradiology attending  (6am-11pm, 7 days/wk) or call the on call neuroradiology fellow (11pm-6am, 7 days/wk). The physician names, date and time of the communication are documented in the radiology report</Text>
                <Text style={styles.subTextList}><Text style={styles.subTextBold}>2. For acute stroke inpatients who are thrombolytic candidates</Text></Text>
                <Text style={styles.subTextList2}>a. Clinical team orders a “CT head WO stroke” as priority 1 exam</Text>
                <Text style={styles.subTextList2}>b. Clinical team informs the CT tech that this is a thrombolytic candidate (scenarios above)</Text>
                <Text style={styles.subTextList2}>c. CT tech calls the “brain reading room” or on call diagnostic neuroradiology fellow depending on the time of the date</Text>
                <Text style={styles.subTextList3}>i. Brain reading room- <PhoneNumber number='3143622562'/> during the working hours (M-F: 8am-9pm, sat: 8am-noon). Credentialed neuroradiology fellow or resident (in conjunction with an attending) reads the study immediately and calls back to the CT control room to provide a verbal result to the clinical team.  The physician names, date and time of the communication are documented in the radiology report</Text>
                <Text style={styles.subTextList3}>ii. On call fellow- (listed in AMION) off hours (M-F: 9 pm-8am, sat: noon-8am, sun: 8am-8am).  Credentialed neuroradiology fellow reads the study immediately and calls back to the CT control room to provide a verbal result to the clinical team.  The physician names, date and time of the communication are documented in the radiology report</Text>
                <Text style={styles.subTextBold}>Essential phone numbers:</Text>
                <Text style={styles.subTextBold}>Technologist 24/7 phone numbers:</Text>
                <Text style={styles.subTextList}>1. ED CT Technologist control room: <PhoneNumber number='3147586699'/></Text>
                <Text style={styles.subTextList}><Text style={[styles.subTextBold, styles.SubTextItalic]}>2. South campus stroke numbers:</Text></Text>
                <Text style={styles.subTextList2}><PhoneNumber number='3148013929'/></Text>
                <Text style={styles.subTextList3}>Back-up: <PhoneNumber number='3148013932'/></Text>
                <Text style={styles.subTextList}><Text style={[styles.subTextBold, styles.SubTextItalic]}>3. North campus stroke numbers</Text></Text>
                <Text style={styles.subTextList2}><PhoneNumber number='3143058401'/></Text>
                <Text style={styles.subTextList3}>Back-up: <PhoneNumber number='3148013929 '/> and/or <PhoneNumber number='3148013932'/></Text>
                <Text style={styles.subTextBold}>Thrombolytic phone numbers:</Text>
                <Text style={styles.subTextList}><Text style={styles.subTextBold}>ED thrombolytic patients:</Text></Text>
                <Text style={styles.subTextList}>M – F     7am to 5 pm – HASTE resident <PhoneNumber number='3145748775'/></Text>
                <Text style={styles.subTextList}>After-hours – Neurology Consult resident               (try <PhoneNumber number='3142998635'/> first, then <PhoneNumber number='3142998642'/>)</Text>
                <Text> </Text>
                <Text style={styles.subTextList}><Text style={styles.subTextBold}>Inpt thrombolytic patients:</Text></Text>
                <Text style={styles.subTextList}>Neurology Consult Resident (try <PhoneNumber number='3142998635'/> first, then <PhoneNumber number='3142998642'/>)</Text>
                <Text style={styles.subTextBold}>Radiology brain reading room (M-F: 8am-5 pm, sat: 8am-noon)</Text>
                <Text style={styles.subTextList}><PhoneNumber number='3143622562'/></Text>
                <Text style={styles.subTextBold}>ED radiology reading room (M-F: 5pm-8am, sat: noon-8am, sun: 8am-8am)</Text>
                <Text style={styles.subTextList}><PhoneNumber number='3147474567'/></Text>
            </View>
        );
    }
}