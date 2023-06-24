import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
export default class Table extends Component {
    render() {
        return (
            <View style={styles.rowView}>
                <View style={styles.columnView}>
                    <View style={styles.borders1}>
                        <Text style={{ fontWeight: "bold", margin: 5, textAlign: "center" }}>Date</Text>
                    </View>
                    <View style={styles.borders4}>
                        <Text style={{ margin: 5, textAlign: "center" }}>Even</Text>
                    </View>
                    <View style={styles.borders7}>
                        <Text style={{ margin: 5, textAlign: "center" }}>Odd</Text>
                    </View>

                </View>
                <View style={styles.columnView}>
                    <View style={styles.borders2}>
                        <Text style={{ fontWeight: "bold", margin: 5, textAlign: "center" }}>Time of Onset / HPI</Text>
                    </View>
                    <View style={styles.borders5}>
                        <Text style={{ margin: 5, textAlign: "center" }}>EM Resident</Text>
                    </View>
                    <View style={styles.borders8}>
                        <Text style={{ margin: 5, textAlign: "center" }}>Neurology Resident</Text>
                    </View>
                </View>
                <View style={styles.columnView}>
                    <View style={styles.borders3}>
                        <Text style={{ fontWeight: "bold", margin: 5, textAlign: "center" }}>Exam / NIHSS</Text>
                    </View>
                    <View style={styles.borders6}>
                        <Text style={{ margin: 5, textAlign: "center" }}>Neurology</Text>
                    </View>
                    <View style={styles.borders9}>
                        <Text style={{ margin: 5, textAlign: "center" }}>EM</Text>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    columnView: {
        flexDirection: 'column',
        backgroundColor: "white",
        textAlign: "center"
    },
    borders1: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
    },
    borders2: {
        borderWidth: 1,
    },
    borders3: {
        borderTopWidth: 1,
        borderRightWidth: 1
    },
    borders4: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
    },
    borders5: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    borders6: {
        borderTopWidth: 1,
        borderRightWidth: 1
    },
    borders7: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1

    },
    borders8: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1

    },
    borders9: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1

    },
})