import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlightBase, View } from 'react-native';
import * as Font from 'expo-font';
export default class Table extends Component {
    state = { 
        loading: true
    };

    async componentDidMount() {
        await Font.loadAsync({'Courier': require("../../assets/fonts/courier.ttf")});
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading) {
            return <View></View>; 
        }

        return (
            <View>
                <View style={styles.rowView}>

                    <View style={styles.columnView}>
                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <View style={styles.firstView}>
                                    <Text style={styles.numbers}></Text>
                                </View>
                                <View style={styles.secondView}>
                                    <Text style={styles.numbers}>Neurosurgery</Text>
                                </View>
                                <View style={styles.thirdView}>
                                    <Text style={styles.numbers}>Neurology</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderEven}>
                            <View style={styles.rowView}>
                                <View style={styles.firstView}>
                                    <Text style={styles.numbers}>Imaging</Text>
                                    <Text style={styles.numbers}>Criteria</Text>
                                </View>
                                <View style={styles.secondView}>
                                    <Text>Most cerebellar ICH</Text>
                                    <Text></Text>
                                    <Text>Most ICH with</Text>
                                    <Text style={styles.list}>•	subarachnoid hemorrhage</Text>
                                    <Text style={styles.list}>•	intraventricular hemorrhage</Text>
                                    <Text style={styles.list}>•	hydrocephalus</Text>
                                </View>
                                <View style={styles.thirdView}>
                                    <Text>Most cortical ICH</Text>
                                    <Text>Most basal ganglia ICH</Text>
                                    <Text>Most brainstem ICH</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <View style={styles.fourthView}>
                                    <Text style={styles.numbers}>Special Cases</Text>
                                    <Text>In the cases of SAH localized to a sulcus, the admitting service will be decided on a case by case basis after discussion between the Neurology and Neurosurgery Chief Residents</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.borderEven}>
                            <View style={styles.rowView}>
                                <View style={styles.firstView}>
                                    <Text style={styles.numbers}>Clinical</Text>
                                    <Text style={styles.numbers}>Criteria</Text>
                                </View>
                                <View style={styles.secondView}>
                                    <Text>Most large supratentorial ICH and GCS ≤8</Text>
                                </View>
                                <View style={styles.thirdView}>
                                    <Text>Most stable ICH patients</Text>
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
        fontFamily: "Courier",
        textAlignVertical: "center"
    },
    symptoms: {
        fontWeight: "bold"
    },
    firstView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .2,
        borderColor: "white",
        borderLeftWidth: 1
    },
    secondView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .37,
        borderColor: "white",
        borderLeftWidth: 1
    },
    thirdView: {
        fontSize: 15,
        width: Dimensions.get("window").width * .28,
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

})