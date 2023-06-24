import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
export default class Table extends Component {
    render() {
        return (
            <View>
                <View style={styles.rowView}>

                    <View style={styles.columnView}>
                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <View style={styles.fourthView}>
                                    <Text style={styles.numbers}>Primary ICH Patient Criteria for initial ICU admission</Text>
                                </View>

                            </View>
                        </View>


                        <View style={styles.columnView}>
                            <View style={styles.borderEven}>
                                <View style={styles.rowView}>
                                    <View style={styles.fourthView}>
                                        <Text>**A patient should be admitted to the NNICU if any criteria are met</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <View style={styles.secondView}>
                                    <Text style={styles.numbers}>Clinical features</Text>
                                </View>
                                <View style={styles.thirdView}>
                                    <Text style={styles.numbers}>Radiographic and laboratory features</Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.bordersEven}>
                            <View style={styles.rowView}>
                                <View style={styles.fourthView}>
                                    <Text>•	Symptom discovery {"<"} 24 hrs <Text style={{ fontWeight: "bold" }}>AND</Text> Supratentorial ICH with volume > 5 cc</Text>
                                    <Text>•	 Symptom discovery > 24 hrs <Text style={{ fontWeight: "bold" }}>AND</Text> Supratentorial ICH with volume > 30 cc</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <View style={styles.secondView}>
                                    <Text>•	GCS {"<"} 13 or NIHSS > 10</Text>
                                    <Text>•	Seizures</Text>
                                    <Text>•	Use of anticoagulation or receipt of thrombolytic therapy</Text>
                                    <Text>•	Intubated or concern for respiratory status</Text>
                                    <Text>•	Refractory hypertension requiring more often than Q2h vital sign assessment and/or IV drip medications</Text>
                                    <Text>•	Requires more than Q2h neuro checks</Text>
                                    <Text>•	MI, PE, or other active medical issues requiring intensive care</Text>
                                    <Text>•	OSH ICU transfer</Text>

                                </View>
                                <View style={styles.thirdView}>
                                    <Text>•	Any infratentorial ICH</Text>
                                    <Text>•	Supratentorial ICH with any of the following features:</Text>
                                    <Text style={styles.list}>  *	Presence of IVH</Text>
                                    <Text style={styles.list}>  *	Presence or concern for hydrocephalus </Text>
                                    <Text style={styles.list}>  *	CTA evidence of a spot sign or any underlying vascular abnormality requiring urgent intervention </Text>
                                    <Text style={styles.list}>  *	Presence of coagulopathy (INR  ≥ 1.4, PTT>40, or TT>30) or thrombocytopenia (plt{"<"}100)</Text>


                                </View>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    columnView: {
        flexDirection: 'column',
    },

    borderOdd: {
        margin: 5,
        backgroundColor: "rgb(209, 216, 233)",
    },
    bordersEven: {
        margin: 5,
        backgroundColor: "rgb(233,238,244)"
    },
    numbers: {
        fontSize: 15,
        fontWeight: "bold",
        textAlignVertical: "center"
    },
    symptoms: {
        fontWeight: "bold"
    },

    secondView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .425,
        borderColor: "white",
        borderLeftWidth: 1
    },
    thirdView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .425,
        borderColor: "white",
        borderLeftWidth: 1
    },
    fourthView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .85,
        borderColor: "white",
        borderLeftWidth: 1
    },
    titleView: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "rgb(81,130,188)"
    },
    title: {
        color: "white"
    },
    list: {
        marginLeft: 8
    }
})