import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import Table1g from "../components/tables/Table1g"
import Table1g2 from "../components/tables/Table1g2"



export default class LotsOfStyles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pounds: false,
            currentWeight: "",
            currentWeightLBS: "",
            totalDose: "",
            bolusDose: "",
            infusionDose: "",
            discardedDose: ""
        };
    }
    render() {
        return (
            <View style={[styles.contentContainer]}>

                <Text style={styles.header}>Thrombolytic Dosing calculator</Text>
                <View style={styles.calcContainer}>
                    <Text style={styles.text}>Weight</Text>
                    <View style={styles.styleBorder}>
                        <TextInput
                            style={styles.TextInputStyle}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({ currentWeight: text })}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={
                            async () => {
                                this.state.pounds == true ? this.setState({ pounds: false }) : this.setState({ pounds: true })
                            }
                        }
                        style={styles.TouchableOpacity}
                    >
                        <Text style={[styles.submitText, { color: "white", fontWeight: "bold" }]}>{this.state.pounds ? "lbs ⇄" : "kg  ⇄"}</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={
                            async () => {

                                if (this.state.currentWeight > 100 && this.state.pounds == false) {
                                    this.setState({ totalDose: 25 })
                                    this.setState({ bolusDose: 2.5 })
                                    this.setState({ infusionDose: 6.25 })
                                    this.setState({ discardedDose: 75 })
                                }
                                else if (this.state.currentWeight <= 100 && this.state.pounds == false) {
                                    this.setState({ totalDose: 0.25 * this.state.currentWeight })
                                    this.setState({ bolusDose: this.state.currentWeight * 0.025 })
                                    this.setState({ infusionDose: this.state.currentWeight * 0.0625 })
                                    this.setState({ discardedDose: 100 - (this.state.currentWeight * 0.25) })
                                }
                                else if (this.state.currentWeight > 220 && this.state.pounds == true) {
                                    this.setState({ totalDose: 25 })
                                    this.setState({ bolusDose: 2.5 })
                                    this.setState({ infusionDose: 6.25 })
                                    this.setState({ discardedDose: 75 })
                                }
                                else if (this.state.currentWeight <= 220 && this.state.pounds == true) {
                                    this.setState({ totalDose: 0.25 * (this.state.currentWeight / 2.205) })
                                    this.setState({ bolusDose: (this.state.currentWeight / 2.205) * 0.025 })
                                    this.setState({ infusionDose: (this.state.currentWeight / 2.205) * 0.0625 })
                                    this.setState({ discardedDose: 100 - ((this.state.currentWeight / 2.205) * 0.25) })
                                }
                            }
                        }
                        style={styles.TouchableOpacitySubmit}
                    >
                        <Text style={[styles.submitText, { color: "white", fontWeight: "bold" }]}>{"Submit"}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.results}>
                    <Text style={styles.resultsText}>Result</Text>
                    <Text style={styles.resultsText}><Text style={{ fontWeight: '600' }}>{Math.round(this.state.totalDose * 10) / 10} mg</Text> Total dose</Text>
                    <Text style={styles.resultsText}><Text style={{ fontWeight: '600' }}>{Math.round(this.state.bolusDose * 10) / 10} mg</Text> Bolus dose, given IV over 1 min</Text>
                    <Text style={styles.resultsText}><Text style={{ fontWeight: '600' }}>{Math.round(this.state.infusionDose * 10) / 10} mg</Text> Infusion dose, given IV over 60 min</Text>
                    <Text style={styles.resultsText}><Text style={{ fontWeight: '600' }}>{Math.round(this.state.discardedDose * 10) / 10} mg</Text> Discarded dose, based on a bottle containing 100mg tPA</Text>



                </View>

                <Text></Text>
                <View style={{ borderWidth: 1 }}>
                    <Text style={styles.subTextBoldUnderline}>Key:</Text>
                    <Text style={styles.subTextListNoLineHeight}>W = Weight(lbs/kg)</Text>
                    <Text style={styles.subTextListNoLineHeight}>Total = Total Dose(mg=ml)</Text>
                    <Text style={styles.subTextListNoLineHeight}>Bolus = Bolus Dose(mg=ml)</Text>
                    <Text style={styles.subTextListNoLineHeight}>Infusion = Infusion Dose(mg=ml)</Text>
                </View>
                <Text></Text>
                <Text style={styles.subTextBoldUnderline}>Tenecteplase Dosing Chart (90 - 156 lbs)</Text>
                <Table1g></Table1g>
                <Text style={styles.subTextBoldUnderline}>Tenecteplase Dosing Chart (158 - >220 lbs)</Text>
                <Table1g2></Table1g2>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    calcContainer: {
        flexDirection: 'row',
        width: Dimensions.get("window").width * .7,

    },
    contentContainer: {
        margin: 10
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 0
    },
    styleBorder: {
        flex: 1,
        borderRadius: 2,
        borderWidth: 1.5,
        borderColor: "rgb(94,156,211)",
        padding: 5,
        // marginBottom: 10,
        width: Dimensions.get("window").width * .7,
        justifyContent: 'flex-end'
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 20,
        fontSize: 15,
    },
    text: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    TouchableOpacity: {
        backgroundColor: "rgb(94,156,211)",
        width: Dimensions.get("window").width / 3.5,
        alignItems: "center",
        justifyContent: "center",
        height: 34,
        borderRadius: 2,
        borderWidth: 1
    },
    TouchableOpacitySubmit: {
        backgroundColor: "rgb(94,156,211)",
        width: Dimensions.get("window").width * .8,
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        borderRadius: 2,
        marginTop: 5,
        borderWidth: 1
    },
    results: {
        marginTop: 5,
        borderRadius: 2,
        backgroundColor: "rgb(94,156,211)",
        width: Dimensions.get("window").width * .8,
        borderWidth: 1
    },
    resultsText: {
        color: "white"
    },
    subTextBoldUnderline: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5,
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    subTextListNoLineHeight: {
        fontSize: 15.5,
        marginLeft: 16,
        marginBottom: 5
    },
});