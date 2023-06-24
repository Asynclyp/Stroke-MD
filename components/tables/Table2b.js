import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";

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
                        <View style={styles.titleView}>
                            <Text style={[styles.title, { fontWeight: "bold", margin: 5, textAlign: "center", fontSize: 20 }]}>Modified Rankin Scale</Text>
                        </View>
                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>0</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>No symptoms</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderEven}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>1</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>No Significant Disability</Text>
                                    <Text>Able to carry out all usual activities, despite some symptoms</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>2</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>Slight Disability</Text>
                                    <Text>Able to look after own affairs without assistance, but unable to carry out all previous activities.</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderEven}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>3</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>Moderate Disability</Text>
                                    <Text>Requires some help, but unable to walk unassisted and manage finances.</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>4</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>Moderately Severe Disability</Text>
                                    <Text>Unable to attend to own bodily needs without assistance and unable to walk without assistance.</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderEven}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>5</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>Severe Disability</Text>
                                    <Text>Requires constant nursing care and attention, bedridden, incontinent.</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.borderOdd}>
                            <View style={styles.rowView}>
                                <Text style={styles.numbers}>6</Text>
                                <View style={styles.secondView}>
                                    <Text style={styles.symptoms}>Deceased</Text>
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
        backgroundColor: "rgb(209, 216, 233)",
    },
    bordersEven: {
        backgroundColor: "rgb(233,238,244)"
    },
    numbers: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 6,
        fontFamily: "Courier",
        textAlignVertical: "center"
    },
    symptoms: {
        fontWeight: "bold"
    },
    secondView: {
        fontSize: 15,
        marginLeft: 20,
        width: Dimensions.get("window").width * 5 / 6,
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
    }
})