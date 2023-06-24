import React, { Component } from 'react'
import { Alert, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Dimensions, View, Image } from 'react-native'
import Section0 from "../sectionData/Section0.js"
import Section1a from "../sectionData/Section1a.js"
import Section1b from "../sectionData/Section1b.js"
import Section1b_2 from "../sectionData/section1b_2"
import Section1c from "../sectionData/Section1c.js"
import Section1d from "../sectionData/Section1d.js"
import Section1e from "../sectionData/Section1e.js"
import Section1f from "../sectionData/Section1f.js"
import Section1g from "../sectionData/Section1g.js"
import Section1h from "../sectionData/Section1h.js"
import Section1i from "../sectionData/Section1i.js"
import Section1l from "../sectionData/1aOutcomeVisualAid"
import Section2a from "../sectionData/Section2a.js"
import Section2b from "../sectionData/Section2b.js"
import Section2c from "../sectionData/Section2c.js"
import Section2d from "../sectionData/Section2d.js"
import Section2d2 from "../sectionData/Section2d2.js"
import Section2e from "../sectionData/Section2e.js"
import Section2g from "../sectionData/2gImage.js"
import Section2h from "../sectionData/Section2h"
import Section3a from "../sectionData/Section3a.js"
import Section3b from "../sectionData/Section3b.js"
import Section3c from "../sectionData/Section3c.js"
import Section3f from "../sectionData/Section3f.js"
import TelestrokeHospitals from "../sectionData/SectionNew4_TelestrokeHospitals"
import MBMCTransfer from "../sectionData/SectionNew5_OSH_MBMC_Transfer"
import BJSPHTransfer from "../sectionData/SectionNew5_OSH_BJSPH_Transfer"
import Section4a from "../sectionData/Section4a.js"
import Section4b from "../sectionData/Section4b.js"
import Section4c from "../sectionData/Section4c.js"
import Section5a from '../sectionData/Section5a.js'
import Section6 from "../components/tables/Table6.js"
import Table2b from "../components/tables/Table2b"
import BPCoa from "../sectionData/5B_BPCoa"
import ConsultingService from "../sectionData/5C_ConsultingService"
import SAHScales from "../sectionData/5D_SAHScales"
import SAHScales5e from "../sectionData/5E_SAHSCALES"

export const otherScreenHeaderOptions = (navigation) => ({
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
                    console.log("Moving back to LandingPage from Other... Screen")
                }
            }
            style={[styles.homeButton]}
        >
            <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
    ),
})

export default class OtherScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DecisionFlowChart: false,
            Thrombolytic: false,
            AcuteEndovascularIntervention: false,
            Hyperacute: false,
            Telestroke: false,
            OSHTransfers: false,
            AcuteICH: false,
            StrokeMetricsDocumentation: false,
            Section0: false,
            Section1aTPAEligibilityCriteria: false,
            Section1bBloodPressureManagement: false,
            Section1b2CTRadiologyReads: false,
            Section1cEDAcuteIschemicStrokeProtocol: false,
            Section1dInpatientFloorAcuteIschemicStrokeProtocol: false,
            Section1eOrderingTPA: false,
            Section1fMixingTPA: false,
            Section1gThrombolyticDosingCalc: false,
            Section1hPostTPAMonitoring: false,
            Section1iNIHSSCalcAndCards: false,
            Section1lOutcomeVisualAid: false,
            Section2aEndovascularEligibilityCriteria: false,
            Section2bInterventionalNeuroradiologyConsultation: false,
            Section2cOSHTransfersForThrombectomy: false,
            Section2dCTAProtocol: false,
            Section2d2DirectToThrombectomyProtocol: false,
            Section2eINRThrombectomy: false,
            Section2fmRS: false,
            Section2gThrombectomyVisualAid: false,
            Section2hCTA: false,
            Section3aHyperacuteMRIProtocol: false,
            Section3bSpecialSituations: false,
            Section3fNeuro: false,
            Section3dWakeupInclusionExclusion: false,
            Section4: false,
            Section5MBMCTransfer: false,
            Section5BJSPHTransfer: false,
            Section4bImagingSelection: false,
            Section3cWakeupProtocol: false,
            Section5aNeuroimaging: false,
            Section5bBPCao: false,
            Section5cConsulting: false,
            Section5dCriteria: false,
            Section5eSAHGrading: false,
            Section6: false

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
                        console.log("Moving back to LandingPage from Other... Screen")
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
                <View style={styles.innerContainer}>
                    <Text style={styles.fillerText}>Resources</Text>
                    {/* Decision Flow Chart */}
                    <TouchableOpacity
                        style={this.state.DecisionFlowChart == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.DecisionFlowChart == true ? (this.setState({ DecisionFlowChart: false }), this.setState({ Section0: false })) : this.setState({ DecisionFlowChart: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Decision Flow Chart</Text>
                    </TouchableOpacity>
                    {/* Section 0 */}
                    <TouchableOpacity
                        style={
                            this.state.DecisionFlowChart == false ? null :
                                this.state.Section0 == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section0 == true ? this.setState({ Section0: false }) : this.setState({ Section0: true }) }
                            }
                        }>
                        {this.state.DecisionFlowChart == true ? <Text style={styles.infoHeader}>Flow Chart</Text> : null}
                    </TouchableOpacity>
                    {this.state.DecisionFlowChart == true && this.state.Section0 == true ?
                        <View>
                            <Section0></Section0>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section0: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {/* Thrombolytic */}
                    <TouchableOpacity
                        style={this.state.Thrombolytic == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.Thrombolytic == true ? (this.setState({ Thrombolytic: false }), this.setState({ Section1aTPAEligibilityCriteria: false }), this.setState({ Section1bBloodPressureManagement: false }), this.setState({ Section1b2CTRadiologyReads: false })
                                        , this.setState({ Section1cEDAcuteIschemicStrokeProtocol: false }), this.setState({ Section1dInpatientFloorAcuteIschemicStrokeProtocol: false }), this.setState({ Section1eOrderingTPA: false })
                                        , this.setState({ Section1fMixingTPA: false }), this.setState({ Section1gThrombolyticDosingCalc: false }), this.setState({ Section1hPostTPAMonitoring: false }), this.setState({ Section1iNIHSSCalcAndCards: false })
                                        , this.setState({ Section1lOutcomeVisualAid: false })) : this.setState({ Thrombolytic: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Thrombolytic</Text>
                    </TouchableOpacity>
                    {/* Section 1a tpa elgibility criteria */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1aTPAEligibilityCriteria == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1aTPAEligibilityCriteria == true ? this.setState({ Section1aTPAEligibilityCriteria: false }) : this.setState({ Section1aTPAEligibilityCriteria: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Thrombolytic Eligibility Criteria</Text> : null}
                    </TouchableOpacity>

                    {this.state.Thrombolytic == true && this.state.Section1aTPAEligibilityCriteria == true ?
                        <View>
                            <Section1a></Section1a>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1aTPAEligibilityCriteria: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {/* Section 1b BP Management */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1bBloodPressureManagement == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1bBloodPressureManagement == true ? this.setState({ Section1bBloodPressureManagement: false }) : this.setState({ Section1bBloodPressureManagement: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>BP Mgmt before Thrombolytic administration</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1bBloodPressureManagement == true ?
                        <View>
                            <Section1b></Section1b>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1bBloodPressureManagement: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1b_2 CT Radiology Reads for tPA candidates*/}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1b2CTRadiologyReads == true ? styles.infoButtonPressed : styles.infoButton
                        }
                        onPress={
                            async () => {
                                { this.state.Section1b2CTRadiologyReads == true ? this.setState({ Section1b2CTRadiologyReads: false }) : this.setState({ Section1b2CTRadiologyReads: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>CT Radiology Reads for Thrombolytic candidates</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1b2CTRadiologyReads == true ?
                        <View>
                            <Section1b_2></Section1b_2>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1b2CTRadiologyReads: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                    }

                    {/* Section 1c ED Acute Ischemic Stroke Protocol */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1cEDAcuteIschemicStrokeProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1cEDAcuteIschemicStrokeProtocol == true ? this.setState({ Section1cEDAcuteIschemicStrokeProtocol: false }) : this.setState({ Section1cEDAcuteIschemicStrokeProtocol: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>ED Acute Ischemic Stroke Protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1cEDAcuteIschemicStrokeProtocol == true ?
                        <View>
                            <Section1c></Section1c>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1cEDAcuteIschemicStrokeProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1d Inpatient floor acute ischemic stroke protocol  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1dInpatientFloorAcuteIschemicStrokeProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1dInpatientFloorAcuteIschemicStrokeProtocol == true ? this.setState({ Section1dInpatientFloorAcuteIschemicStrokeProtocol: false }) : this.setState({ Section1dInpatientFloorAcuteIschemicStrokeProtocol: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Inpatient Floor Acute Ischemic Stroke Protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1dInpatientFloorAcuteIschemicStrokeProtocol == true ?
                        <View>
                            <Section1d></Section1d>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1dInpatientFloorAcuteIschemicStrokeProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1e ordering tpa  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1eOrderingTPA == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1eOrderingTPA == true ? this.setState({ Section1eOrderingTPA: false }) : this.setState({ Section1eOrderingTPA: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Ordering Thrombolytic</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1eOrderingTPA == true ?
                        <View>
                            <Section1e></Section1e>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1eOrderingTPA: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1f Mixing TPA  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1fMixingTPA == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1fMixingTPA == true ? this.setState({ Section1fMixingTPA: false }) : this.setState({ Section1fMixingTPA: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Mixing Thrombolytic</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1fMixingTPA == true ?
                        <View>
                            <Section1f></Section1f>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1fMixingTPA: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1g Thrombolytic DOSING Calculator  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1gThrombolyticDosingCalc == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1gThrombolyticDosingCalc == true ? this.setState({ Section1gThrombolyticDosingCalc: false }) : this.setState({ Section1gThrombolyticDosingCalc: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Thrombolytic Dosing Calculator</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1gThrombolyticDosingCalc == true ?
                        <View>
                            <Section1g></Section1g>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1gThrombolyticDosingCalc: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1h post tpa monitoring  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1hPostTPAMonitoring == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1hPostTPAMonitoring == true ? this.setState({ Section1hPostTPAMonitoring: false }) : this.setState({ Section1hPostTPAMonitoring: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Post Thrombolytic Monitoring</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1hPostTPAMonitoring == true ?
                        <View>
                            <Section1h></Section1h>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1hPostTPAMonitoring: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 1i NIHSS Calc and Cards  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1iNIHSSCalcAndCards == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1iNIHSSCalcAndCards == true ? this.setState({ Section1iNIHSSCalcAndCards: false }) : this.setState({ Section1iNIHSSCalcAndCards: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>NIHSS Calculator and Cards</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1iNIHSSCalcAndCards == true ?
                        <View>
                            <Section1i></Section1i>
                            <TouchableOpacity
                                onPress={() => {
                                this.props.navigation.navigate("NIHSSStack");
                                }}
                            >
                                <Image
                                source={require("../Images/NIHSSBED.png")}
                                style={{height: Dimensions.get("window").height * .6, width: Dimensions.get("window").width * .50, resizeMode: 'contain', alignSelf: 'center'}}
                                />
                             </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1iNIHSSCalcAndCards: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}


                    {/* Section 1l tpa outcome visual aid  */}
                    <TouchableOpacity
                        style={
                            this.state.Thrombolytic == false ? null :
                                this.state.Section1lOutcomeVisualAid == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section1lOutcomeVisualAid == true ? this.setState({ Section1lOutcomeVisualAid: false }) : this.setState({ Section1lOutcomeVisualAid: true }) }
                            }
                        }>
                        {this.state.Thrombolytic == true ? <Text style={styles.infoHeader}>Thrombolytic Outcome Visual Aid</Text> : null}
                    </TouchableOpacity>
                    {this.state.Thrombolytic == true && this.state.Section1lOutcomeVisualAid == true ?
                        <View>
                            <Section1l></Section1l>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section1lOutcomeVisualAid: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2 Acute endovascular intervention */}
                    <TouchableOpacity
                        style={this.state.AcuteEndovascularIntervention == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.AcuteEndovascularIntervention == true ? (this.setState({ AcuteEndovascularIntervention: false }), this.setState({ Section2aEndovascularEligibilityCriteria: false }), this.setState({ Section2bInterventionalNeuroradiologyConsultation: false })
                                        , this.setState({ Section2cOSHTransfersForThrombectomy: false }), this.setState({ Section2dCTAProtocol: false }), this.setState({ Section2eINRThrombectomy: false }), this.setState({ Section2fmRS: false })
                                        , this.setState({ Section2gThrombectomyVisualAid: false })) : this.setState({ AcuteEndovascularIntervention: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Acute Endovascular Intervention</Text>
                    </TouchableOpacity>

                    {/* Section 2a Endovascular eligibility criteria */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2aEndovascularEligibilityCriteria == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2aEndovascularEligibilityCriteria == true ? this.setState({ Section2aEndovascularEligibilityCriteria: false }) : this.setState({ Section2aEndovascularEligibilityCriteria: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>Endovascular Eligibility Criteria</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2aEndovascularEligibilityCriteria == true ?
                        <View>
                            <Section2a></Section2a>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2aEndovascularEligibilityCriteria: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}


                    {/* Section 2b Interventional Neuroradiology Consultation */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2bInterventionalNeuroradiologyConsultation == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2bInterventionalNeuroradiologyConsultation == true ? this.setState({ Section2bInterventionalNeuroradiologyConsultation: false }) : this.setState({ Section2bInterventionalNeuroradiologyConsultation: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>Endovascular Surgical Neuroradiology Consultation</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2bInterventionalNeuroradiologyConsultation == true ?
                        <View>
                            <Section2b></Section2b>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2bInterventionalNeuroradiologyConsultation: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2c – OSH transfers for thrombectomy */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2cOSHTransfersForThrombectomy == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2cOSHTransfersForThrombectomy == true ? this.setState({ Section2cOSHTransfersForThrombectomy: false }) : this.setState({ Section2cOSHTransfersForThrombectomy: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>OSH Transfers for Thrombectomy</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2cOSHTransfersForThrombectomy == true ?
                        <View>
                            <Section2c></Section2c>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2cOSHTransfersForThrombectomy: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2d – CTA Protocol */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2dCTAProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2dCTAProtocol == true ? this.setState({ Section2dCTAProtocol: false }) : this.setState({ Section2dCTAProtocol: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>CTP/CTA protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2dCTAProtocol == true ?
                        <View>
                            <Section2d></Section2d>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2dCTAProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2d2 – CTA Protocol */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2d2DirectToThrombectomyProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2d2DirectToThrombectomyProtocol == true ? this.setState({ Section2d2DirectToThrombectomyProtocol: false }) : this.setState({ Section2d2DirectToThrombectomyProtocol: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>Direct To Thrombectomy Protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2d2DirectToThrombectomyProtocol == true ?
                        <View>
                            <Section2d2></Section2d2>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2d2DirectToThrombectomyProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2e – INR / Thrombectomy Disposition / Bed Placement */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2eINRThrombectomy == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2eINRThrombectomy == true ? this.setState({ Section2eINRThrombectomy: false }) : this.setState({ Section2eINRThrombectomy: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>INR/Thrombectomy Disposition/Bed Placement</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2eINRThrombectomy == true ?
                        <View>
                            <Section2e></Section2e>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2eINRThrombectomy: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2f mRS */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2fmRS == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2fmRS == true ? this.setState({ Section2fmRS: false }) : this.setState({ Section2fmRS: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>mRS</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2fmRS == true ?
                        <View>
                            <Table2b></Table2b>
                            <TouchableOpacity
                                style={styles.minimizeButtonTable2b}
                                onPress={
                                    async () => {
                                        this.setState({ Section2fmRS: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2g image */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2gThrombectomyVisualAid == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2gThrombectomyVisualAid == true ? this.setState({ Section2gThrombectomyVisualAid: false }) : this.setState({ Section2gThrombectomyVisualAid: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>Thrombectomy Outcome Visual Aid</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2gThrombectomyVisualAid == true ?
                        <View>
                            <Section2g></Section2g>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2gThrombectomyVisualAid: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 2h – CTA in ED for high-risk TIA, minor stroke */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteEndovascularIntervention == false ? null :
                                this.state.Section2hCTA == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section2hCTA == true ? this.setState({ Section2hCTA: false }) : this.setState({ Section2hCTA: true }) }
                            }
                        }>
                        {this.state.AcuteEndovascularIntervention == true ? <Text style={styles.infoHeader}>CTA in ED for High-risk TIA, Minor Stroke</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteEndovascularIntervention == true && this.state.Section2hCTA == true ?
                        <View>
                            <Section2h></Section2h>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section2hCTA: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 3 Hyerpacute MRI */}
                    <TouchableOpacity
                        style={this.state.Hyperacute == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.Hyperacute == true ? (this.setState({ Hyperacute: false }), this.setState({ Section3aHyperacuteMRIProtocol: false }), this.setState({ Section3bSpecialSituations: false }), this.setState({ Section3fNeuro: false }), this.setState({ Section3dWakeupInclusionExclusion: false }), this.setState({ Section4bImagingSelection: false }), this.setState({ Section3cWakeupProtocol: false })) : this.setState({ Hyperacute: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Hyperacute MRI</Text>
                    </TouchableOpacity>
                    {/* Section 3a Special Situations */}
                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section3aHyperacuteMRIProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section3aHyperacuteMRIProtocol == true ? this.setState({ Section3aHyperacuteMRIProtocol: false }) : this.setState({ Section3aHyperacuteMRIProtocol: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>Hyperacute MRI Protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section3aHyperacuteMRIProtocol == true ?
                        <View>
                            <Section3a></Section3a>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section3aHyperacuteMRIProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 3b Neuroradiology contact for emergent read*/}
                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section3bSpecialSituations == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section3bSpecialSituations == true ? this.setState({ Section3bSpecialSituations: false }) : this.setState({ Section3bSpecialSituations: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>Special Situation</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section3bSpecialSituations == true ?
                        <View>
                            <Section3b></Section3b>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section3bSpecialSituations: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}
                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section3cWakeupProtocol == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section3cWakeupProtocol == true ? this.setState({ Section3cWakeupProtocol: false }) : this.setState({ Section3cWakeupProtocol: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>WAKE-UP Stroke Protocol</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section3cWakeupProtocol == true ?
                        <View>
                            <Section4c></Section4c>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section3cWakeupProtocol: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}
                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section3dWakeupInclusionExclusion == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section3dWakeupInclusionExclusion == true ? this.setState({ Section3dWakeupInclusionExclusion: false }) : this.setState({ Section3dWakeupInclusionExclusion: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>WAKE-UP Inclusion, Exclusion Criteria</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section3dWakeupInclusionExclusion == true ?
                        <View>
                            <Section4a></Section4a>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section3dWakeupInclusionExclusion: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section4bImagingSelection == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section4bImagingSelection == true ? this.setState({ Section4bImagingSelection: false }) : this.setState({ Section4bImagingSelection: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>WAKE-UP Imaging Selection Criteria</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section4bImagingSelection == true ?
                        <View>
                            <Section4b></Section4b>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section4bImagingSelection: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}
                    {/* Section 3F StrokeNeuro */}
                    <TouchableOpacity
                        style={
                            this.state.Hyperacute == false ? null :
                                this.state.Section3fNeuro == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section3fNeuro == true ? this.setState({ Section3fNeuro: false }) : this.setState({ Section3fNeuro: true }) }
                            }
                        }>
                        {this.state.Hyperacute == true ? <Text style={styles.infoHeader}>Neuroradiology contact for emergent read</Text> : null}
                    </TouchableOpacity>
                    {this.state.Hyperacute == true && this.state.Section3fNeuro == true ?
                        <View>
                            <Section3f></Section3f>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section3fNeuro: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 4 Hyperacute MRI for wake-up or unwitnessed stroke */}
                    {/* <TouchableOpacity
                        style={this.state.Hyperacute == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.Hyperacute == true ? (this.setState({ Hyperacute: false }), this.setState({ Section3dWakeupInclusionExclusion: false }), this.setState({ Section4bImagingSelection: false }), this.setState({ Section3cWakeupProtocol: false })) : this.setState({ Hyperacute: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Hyperacute MRI for Wake-up</Text>
                    </TouchableOpacity> */}
                    {/* Section 4a Inclusion Exclusion */}


                    {/* Section 4b Imaging Selection */}


                    {/* Section 4c Wake-up stroke protocol */}
                    

                    {/* Telestroke */}
                    <TouchableOpacity
                        style={this.state.Telestroke ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.Telestroke ? (this.setState({ Telestroke: false }), this.setState({ Section4: false })) : this.setState({ Telestroke: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Telestroke Hospitals</Text>
                    </TouchableOpacity>
                    {/* Section 4 */}
                    <TouchableOpacity
                        style={
                            this.state.Telestroke == false ? null :
                                this.state.Section4 == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section4 == true ? this.setState({ Section4: false }) : this.setState({ Section4: true }) }
                            }
                        }>
                        {this.state.Telestroke == true ? <Text style={styles.infoHeader}>Hospitals List</Text> : null}
                    </TouchableOpacity>
                    {this.state.Telestroke == true && this.state.Section4 == true ?
                        <View>
                            <TelestrokeHospitals></TelestrokeHospitals>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section4: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {/* OSH Transfer*/}
                    <TouchableOpacity
                        style={this.state.OSHTransfers ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.OSHTransfers ? (this.setState({ OSHTransfers: false, Section5MBMCTransfer: false , Section5BJSPHTransfer: false })) : this.setState({ OSHTransfers: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>OSH Transfers to MBMC and BJSPH</Text>
                    </TouchableOpacity>

                    {/* MBMC Transfer*/}
                    <TouchableOpacity
                        style={
                            this.state.OSHTransfers == false ? null :
                                this.state.Section5MBMCTransfer == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5MBMCTransfer == true ? this.setState({ Section5MBMCTransfer: false }) : this.setState({ Section5MBMCTransfer: true }) }
                            }
                        }>
                        {this.state.OSHTransfers == true ? <Text style={styles.infoHeader}>OSH Transfers to MBMC</Text> : null}
                    </TouchableOpacity>
                    {this.state.OSHTransfers == true && this.state.Section5MBMCTransfer == true ?
                        <View>
                            <MBMCTransfer></MBMCTransfer>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5MBMCTransfer: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {/* BJSPH Transfer*/}
                    <TouchableOpacity
                        style={
                            this.state.OSHTransfers == false ? null :
                                this.state.Section5BJSPHTransfer == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5BJSPHTransfer == true ? this.setState({ Section5BJSPHTransfer: false }) : this.setState({ Section5BJSPHTransfer: true }) }
                            }
                        }>
                        {this.state.OSHTransfers == true ? <Text style={styles.infoHeader}>OSH Transfers to BJSPH</Text> : null}
                    </TouchableOpacity>
                    {this.state.OSHTransfers == true && this.state.Section5BJSPHTransfer == true ?
                        <View>
                            <BJSPHTransfer></BJSPHTransfer>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5BJSPHTransfer: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}

                    {/* Section 5 */}
                    <TouchableOpacity
                        style={this.state.AcuteICH == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.AcuteICH == true ? (this.setState({ AcuteICH: false }), this.setState({ Section5aNeuroimaging: false }), this.setState({ Section5bBPCao: false }), this.setState({ Section5cConsulting: false }), this.setState({ Section5dCriteria: false }), this.setState({ Section5eSAHGrading: false })) : this.setState({ AcuteICH: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Acute ICH Protocol</Text>
                    </TouchableOpacity>
                    {/* Section 5a  */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteICH == false ? null :
                                this.state.Section5aNeuroimaging == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5aNeuroimaging == true ? this.setState({ Section5aNeuroimaging: false }) : this.setState({ Section5aNeuroimaging: true }) }
                            }
                        }>
                        {this.state.AcuteICH == true ? <Text style={styles.infoHeader}>Neuroimaging and Laboratory Evaluation</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteICH == true && this.state.Section5aNeuroimaging == true ? <View>
                        <Section5a></Section5a>
                        <TouchableOpacity
                            style={styles.minimizeButton}
                            onPress={
                                async () => {
                                    this.setState({ Section5aNeuroimaging: false })
                                }
                            }
                        >
                            <Text style={styles.minimizeText}>Close Tab</Text>
                        </TouchableOpacity>
                    </View> : null}

                    {/* Section 5b  */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteICH == false ? null :
                                this.state.Section5bBPCao == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5bBPCao == true ? this.setState({ Section5bBPCao: false }) : this.setState({ Section5bBPCao: true }) }
                            }
                        }>
                        {this.state.AcuteICH == true ? <Text style={styles.infoHeader}>Emergency Medical Management</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteICH == true && this.state.Section5bBPCao == true ?
                        <View>
                            <BPCoa></BPCoa>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5bBPCao: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 5c  */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteICH == false ? null :
                                this.state.Section5cConsulting == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5cConsulting == true ? this.setState({ Section5cConsulting: false }) : this.setState({ Section5cConsulting: true }) }
                            }
                        }>
                        {this.state.AcuteICH == true ? <Text style={styles.infoHeader}>Consulting Services by type of ICH</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteICH == true && this.state.Section5cConsulting == true ?
                        <View>
                            <ConsultingService></ConsultingService>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5cConsulting: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 5d  */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteICH == false ? null :
                                this.state.Section5dCriteria == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5dCriteria == true ? this.setState({ Section5dCriteria: false }) : this.setState({ Section5dCriteria: true }) }
                            }
                        }>
                        {this.state.AcuteICH == true ? <Text style={styles.infoHeader}>Criteria for ICU vs. SDU Hospital admission</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteICH == true && this.state.Section5dCriteria == true ?
                        <View>
                            <SAHScales></SAHScales>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5dCriteria: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Section 5e  */}
                    <TouchableOpacity
                        style={
                            this.state.AcuteICH == false ? null :
                                this.state.Section5eSAHGrading == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section5eSAHGrading == true ? this.setState({ Section5eSAHGrading: false }) : this.setState({ Section5eSAHGrading: true }) }
                            }
                        }>
                        {this.state.AcuteICH == true ? <Text style={styles.infoHeader}>SAH Grading Scales</Text> : null}
                    </TouchableOpacity>
                    {this.state.AcuteICH == true && this.state.Section5eSAHGrading == true ?
                        <View>
                            <SAHScales5e></SAHScales5e>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section5eSAHGrading: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View> : null}

                    {/* Stroke Metrics Documentation */}
                    <TouchableOpacity
                        style={this.state.StrokeMetricsDocumentation == true ? styles.sectionHeaderButtonPressed : styles.sectionHeaderButton}
                        onPress={
                            async () => {
                                {
                                    this.state.StrokeMetricsDocumentation == true ? (this.setState({ StrokeMetricsDocumentation: false }), this.setState({ Section6: false })) : this.setState({ StrokeMetricsDocumentation: true })
                                }
                            }
                        }>
                        <Text style={styles.sectionHeader}>Stroke Metrics Documentation</Text>
                    </TouchableOpacity>
                    {/* Section 6 */}
                    <TouchableOpacity
                        style={
                            this.state.StrokeMetricsDocumentation == false ? null :
                                this.state.Section6 == true ? styles.infoButtonPressed : styles.infoButton}
                        onPress={
                            async () => {
                                { this.state.Section6 == true ? this.setState({ Section6: false }) : this.setState({ Section6: true }) }
                            }
                        }>
                        {this.state.StrokeMetricsDocumentation == true ? <Text style={styles.infoHeader}>Documentation</Text> : null}
                    </TouchableOpacity>
                    {this.state.StrokeMetricsDocumentation == true && this.state.Section6 == true ?
                        <View>
                            <Section6></Section6>
                            <TouchableOpacity
                                style={styles.minimizeButton}
                                onPress={
                                    async () => {
                                        this.setState({ Section6: false })
                                    }
                                }
                            >
                                <Text style={styles.minimizeText}>Close Tab</Text>
                            </TouchableOpacity>
                        </View>
                        : null}
                </View>
            </ScrollView>
        )
    }
    _signInAsync = async () => {

    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoHeader: {
        fontSize: 14,
        textAlign: "center"
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
    outerContainer: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    innerContainer: {
        alignItems: "center",
        marginBottom: Dimensions.get("window").height / 8,
    },
    logo: {
        width: 80,
        height: 100,
        margin: 30
    },
    row: {
        flexDirection: 'row',
    },
    sectionHeaderButton: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        width: Dimensions.get("window").width * .9,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#c8c8c8',
        borderRadius: 2
    },
    sectionHeaderButtonPressed: {
        borderWidth: .5,
        borderColor: 'black',
        alignItems: 'center',
        width: Dimensions.get("window").width * .9,
        height: 50,
        backgroundColor: '#6c7373',
        justifyContent: 'center',
        borderRadius: 2
    },
    infoButton: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        width: Dimensions.get("window").width * .77,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#c8c8c8'

    },
    infoButtonPressed: {
        borderWidth: .5,
        borderColor: 'black',
        alignItems: 'center',
        width: Dimensions.get("window").width * .77,
        height: 40,
        backgroundColor: '#6c7373',
        justifyContent: 'center'
    },
    minimizeButton: {
        borderWidth: 1,
        borderColor: 'black',
        width: Dimensions.get("window").width * .77,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#c8c8c8',
        marginBottom: 20,
        marginTop: -3
    },
    minimizeText: {
        fontWeight: 'bold'
    },
    minimizeButtonTable2b: {
        borderWidth: 1,
        borderColor: 'black',
        width: Dimensions.get("window").width * .77,
        height: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#c8c8c8',
        marginBottom: 20,
    },

});