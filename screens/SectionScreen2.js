import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import ModalInitial from "../modal/ModalInitial";

export const sec2HeaderOptions = (navigation) => ({
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
                    // navigation.navigate('home')
                    navigation.navigate('DecisionTreeStack')
                    console.log("Moving back to LandingPage from Section 1 Screen")
                }
            }
            style={[styles.homeButton]}
        >
            <Text style={styles.text}>Back</Text>
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
                    <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke MD</Text>
                </View>
            </View>
        ),
        headerRight: (
            <TouchableOpacity
                activeOpacity={.4}
                onPress={
                    async () => {
                        navigation.navigate('home')
                        console.log("Moving back to LandingPage from Section 1 Screen")
                    }
                }
                style={[styles.homeButton]}
            >
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
        ),
    }) */


    render() {
        var holderArray = this.props.route.params.links
        return (
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.fillerText}>
                        {this.props.route.params.title}
                    </Text>
                    <Text></Text>
                    {holderArray.map(link => (
                        // Special Case for Wake Up Stroke Criteria Page
                        // Client wants the buttons to have two groups
                        link === "Inclusion" && this.props.route.params.title === "Wake Up Stroke Criteria" ? (
                            [
                                <Text style={styles.fillerText}>
                                    tPA Criteria
                            </Text>,
                                <Text></Text>,
                                <View key={link} style={styles.linkButton}>
                                    {console.log({ "Section1Screenjs: ": link })}

                                    <ModalInitial title={link} />
                                </View>
                            ]
                        ) : (
                                <View key={link} style={styles.linkButton}>
                                    {console.log({ "Section1Screenjs: ": link })}

                                    <ModalInitial title={link} />
                                </View>
                            )
                    ))}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    questionBlock: {
        backgroundColor: "white",
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 15,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#8c8c8c"
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

        backgroundColor: "#F8F8F8",
        flex: 1

    },
    innerContainer: {
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        width: 80,
        height: 100,
        margin: 30
    },

});