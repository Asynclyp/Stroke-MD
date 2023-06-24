import React, { Component } from 'react'
import { Alert, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, View, Image } from 'react-native'

export const ichHeaderOptions = (navigation) => ({
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
                <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke Analysis</Text>
            </View>
        </View>
    ),
    headerRight: () => (
        <TouchableOpacity
            activeOpacity={.4}
            onPress={
                async () => {
                    navigation.navigate('LandingPage')
                    console.log("Moving back to LandingPage from ICH Screen")
                }
            }
            style={[styles.homeButton]}
        >
            <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
    ),
})

export default class ICHScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                    <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke Analysis</Text>
                </View>
            </View>
        ),
        headerRight: (
            <TouchableOpacity
                activeOpacity={.4}
                onPress={
                    async () => {
                        navigation.navigate('LandingPage')
                        console.log("Moving back to LandingPage from ICH Screen")
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
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.fillerText}>ICH Screen</Text>
                </View>
            </View>
        )
    }
    _signInAsync = async () => {

    }
}

const styles = StyleSheet.create({
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
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
    },
    innerContainer: {
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


});