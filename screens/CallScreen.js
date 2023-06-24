import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, Dimensions, View, Linking, TextInput, Row } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

export const callScreenHeaderOptions = (navigation) => ({
    title: '',
    headerStyle: {
        backgroundColor: "#a51417",
    },
    headerTitleStyle: {
        color: "white",
        fontSize: 25
    },
    headerLeft: () => (
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
            <View>
                <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke MD</Text>
            </View>
        </View>
    ),
    headerRight: () => (
        <TouchableOpacity
            activeOpacity={.4}
            onPress={
                async () => {
                    navigation.navigate('LandingPage')
                    console.log("Moving back to LandingPage from Calling Screen")
                }
            }
            style={[styles.homeButton]}
        >
            <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
    ),
})

export default class CallScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            southCTDesk: "South CT Desk",
            southCTChargeTech: "South CT Charge Tech",
            northCTDesk: "North CT Desk",
            northCTChargeTech: "North CT Charge Tech",
            northMRIChargeTech: "North MRI Charge Tech",
            southMRIChargeTech: "South MRI Charge Tech",
            southMRIChargeTechNightPhone: "South MRI Charge Tech, night phone",
            strokeRN10500: "10500 Stroke RN",
            actRNNorth: "ACT RN North",
            actRNSouth: "ACT RN South",
            neruoInterventional: "Neuro-Interventional",
            neuroIRReading: "Neuro-IR Reading Room",
            neuroIRFrontDesk: "Neuro-IR Front Desk",
            neuroIRFellowOnCall: "Neuro-IR Fellow on Call",
            neuroRadiology: "Neuro Radiology",
            neuroRadReading: "Neuro Rad Reading Room",
            neuroRadFellowOnCall: "Neuro Rad Fellow on Call",
            edTraumaAttending: "ED Trauma Attending",
            edChargeNurse: "ED Charge Nurse",
            edCommunicationCenter: "ED Communication Center",
            edReadingRoom: "ED Reading Room",
            consultJunior: "Consult Junior",
            consultSenior: "Consult Senior",
            HASTE: "HASTE",
            generalChief: "General Chief",
            strokeChief: "Stroke Chief",
            strokeOnCall: "Stroke On-Call",
            strokePager: "Stroke Pager/CUREATR",
            strokeClinic: "Stroke Clinic",
            strokeClinicFax: "Stroke clinic fax",
            ctValue: true,
        };
    }

    /* static navigationOptions = ({ navigation }) => ({
        title: '',
        headerStyle: {
            backgroundColor: "#a51417",
        },
        headerTitleStyle: {
            color: "white",
            fontSize: 25
        },
        headerLeft: (
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                <View>
                    <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke MD</Text>
                </View>
            </View>
        ),
        headerRight: (
            <TouchableOpacity
                activeOpacity={.4}
                onPress={
                    async () => {
                        navigation.navigate('LandingPage')
                        console.log("Moving back to LandingPage from Calling Screen")
                    }
                }
                style={[styles.homeButton]}
            >
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
        ),
    }) */


    render() {
        return (
            <ScrollView style={styles.outerContainer}>
                <View>
                    <SearchBar
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ searchValue: text })}
                        value = {this.state.searchValue}
                        placeholder="Type Here to search"
                        lightTheme={true}
                    />
                    {this.state.southCTDesk.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.southCTChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.northCTDesk.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.northCTChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>CT</Text>
                        </View>
                        : <View></View>
                    }

                    {this.state.southCTDesk.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143625918}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.southCTDesk}</Text>
                                    <Text style={styles.phoneNumber}>314 362-5918</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}

                    {this.state.southCTChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3148013932}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.southCTChargeTech}</Text>
                                    <Text style={styles.phoneNumber}>314 801-3932</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}

                    {this.state.northCTDesk.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        < View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147479696}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.northCTDesk}</Text>
                                    <Text style={styles.phoneNumber}>314 747-9696</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.northCTChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147479605}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.northCTChargeTech}</Text>
                                    <Text style={styles.phoneNumber}>314 747-9605</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}


                    {this.state.southMRIChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.southMRIChargeTechNightPhone.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.northMRIChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>MRI</Text>
                        </View>
                        : <View></View>}
                    {this.state.northMRIChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143625926}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.northMRIChargeTech}</Text>
                                    <Text style={styles.phoneNumber}>314 362-5926</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.southMRIChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143621676}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.southMRIChargeTech}</Text>
                                    <Text style={styles.phoneNumber}>314 362-1676</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.southMRIChargeTech.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143621636}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.southMRIChargeTech}</Text>
                                    <Text style={styles.phoneNumber}>314 362-1636</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.southMRIChargeTechNightPhone.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143626349}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.southMRIChargeTechNightPhone}</Text>
                                    <Text style={styles.phoneNumber}>314 362-6349</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokeRN10500.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.actRNNorth.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.actRNSouth.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>RN</Text>
                        </View>
                        : <View></View>}
                    {this.state.strokeRN10500.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3142994876}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokeRN10500}</Text>
                                    <Text style={styles.phoneNumber}>314 299-4876</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.actRNNorth.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3145612366}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.actRNNorth}</Text>
                                    <Text style={styles.phoneNumber}>314 561-2366</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.actRNSouth.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3148014088}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.actRNSouth}</Text>
                                    <Text style={styles.phoneNumber}>314 801-4088</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.neuroIRReading.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.neuroIRFrontDesk.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.neuroIRFellowOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>Neuro-Interventional</Text>
                        </View>
                        : <View></View>}
                    {this.state.neuroIRReading.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143622584}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.neuroIRReading}</Text>
                                    <Text style={styles.phoneNumber}>314 362-2584</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.neuroIRFrontDesk.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143627113}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.neuroIRFrontDesk}</Text>
                                    <Text style={styles.phoneNumber}>314 362-7113</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.neuroIRFellowOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147473251}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.neuroIRFellowOnCall}</Text>
                                    <Text style={styles.phoneNumber}>314 747-3251</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}

                    {this.state.neuroRadiology.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.neuroRadFellowOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>Neuro Radiology</Text>
                        </View>
                        : <View></View>}
                    {this.state.neuroRadiology.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143622562}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.neuroRadiology}</Text>
                                    <Text style={styles.phoneNumber}>314 362-2562</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.neuroRadFellowOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3145083767}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.neuroRadFellowOnCall}</Text>
                                    <Text style={styles.phoneNumber}>314 508-3767</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}

                    {this.state.edTraumaAttending.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.edChargeNurse.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.edCommunicationCenter.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.edReadingRoom.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>ED</Text>
                        </View>
                        : <View></View>}
                    {this.state.edTraumaAttending.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147586903}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.edTraumaAttending}</Text>
                                    <Text style={styles.phoneNumber}>314 322-8444</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}

                    {this.state.edChargeNurse.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147586914}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.edChargeNurse}</Text>
                                    <Text style={styles.phoneNumber}>314 758-6914</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.edCommunicationCenter.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147586787}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.edCommunicationCenter}</Text>
                                    <Text style={styles.phoneNumber}>314 758-6787</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.edReadingRoom.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147586895}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.edReadingRoom}</Text>
                                    <Text style={styles.phoneNumber}>314 758-6895</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}


                    {this.state.generalChief.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.strokeChief.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.edReadingRoom.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.HASTE.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.consultJunior.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.consultSenior.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        || this.state.strokeOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase())
                        ?
                        <View style={styles.sectionHeaderBackground}>
                            <Text style={styles.sectionHeaderText}>Neuro Residents</Text>
                        </View>
                        : <View></View>}
                    {this.state.consultJunior.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3142998642}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.consultJunior}</Text>
                                    <Text style={styles.phoneNumber}>314 299-8642</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                        {this.state.consultSenior.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3142998635}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.consultSenior}</Text>
                                    <Text style={styles.phoneNumber}>314 299-8635</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.HASTE.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3145748775}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.HASTE}</Text>
                                    <Text style={styles.phoneNumber}>314 574-8775</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.generalChief.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3145741591}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.generalChief}</Text>
                                    <Text style={styles.phoneNumber}>314 574-1591</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokeChief.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3145650804}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokeChief}</Text>
                                    <Text style={styles.phoneNumber}>314 565-0804</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokeOnCall.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143938952}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokeOnCall}</Text>
                                    <Text style={styles.phoneNumber}>314 393-8952</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokePager.toLowerCase().includes(this.state.searchValue.toLowerCase())
                    || this.state.strokeClinic.toLowerCase().includes(this.state.searchValue.toLowerCase())
                    || this.state.strokeClinicFax.toLowerCase().includes(this.state.searchValue.toLowerCase())
                    ?
                    <View style={styles.sectionHeaderBackground}>
                        <Text style={styles.sectionHeaderText}>Stroke</Text>
                    </View>
                    : <View></View>}
                    {this.state.strokePager.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3144076278}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokePager}</Text>
                                    <Text style={styles.phoneNumber}>314 407-6278</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokeClinic.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3143627382}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokeClinic}</Text>
                                    <Text style={styles.phoneNumber}>314 362-7382</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                    {this.state.strokeClinicFax.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                        <View style={styles.innerContainer}>
                            <TouchableOpacity
                                onPress={
                                    async () => {
                                        Linking.openURL('tel:${3147473342}')
                                        console.log("pressed")
                                    }
                                }>
                                <View>
                                    <Text style={styles.phoneName}>{this.state.strokeClinicFax}</Text>
                                    <Text style={styles.phoneNumber}>314 747-3342</Text>
                                </View>
                            </TouchableOpacity>
                        </View> : <View></View>}
                </View>
                
                <View style={styles.versionContainer}>
                    <Text style={styles.versionNumber}>Version: 1.3.1</Text>
                </View>
                
            </ScrollView >
        )
    }
    _signInAsync = async () => {

    }
}

const styles = StyleSheet.create({
    versionContainer: {
        paddingLeft: 150,
        paddingTop: 20,
        paddingBottom: 10,
    },
    versionNumber: {
        color: "#BFBDB8",
    },
    outerContainer: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: "#F8F8F8",
    },
    innerContainer: {
        justifyContent: 'center',
        marginBottom: Dimensions.get("window").height / 8,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    homeButton: {
        width: 65,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#a51417",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "white",
        marginRight: 15,
        marginBottom: 5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 19,
    },
    fillerText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30
    },

    logo: {
        width: 80,
        height: 100,
        margin: 30
    },
    row: {
        flexDirection: 'row',
    },
    phoneNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3366BB'
    },
    phoneName: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    sectionHeaderText: {
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    sectionHeaderBackground: {
        backgroundColor: "#e0e0e0"
    }
});