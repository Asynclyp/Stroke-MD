import React, { Component } from 'react'
import { StatusBar, Alert, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Lock extends Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
        this.state = {
            // password we set to compare with the input
            password: "5412",
            input: "",
            counter: 0
        };
    }

    _bootstrapAsync = async () => {
        // For storing the password locally into the phone
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken === this.state.password) {
            { console.log("Correct Password", await AsyncStorage.getItem('userToken')) }
            // this.props.navigation.navigate('HomeScreenStack');
            this.props.navigation.replace('Main');
        }
        else if (this.state.counter === 0) {
            { console.log("Incorrect Password [else if]", await AsyncStorage.getItem('userToken')) }
            // Since the password saves, even when the app is restarted, the wrong password is kept
            this.props.navigation.navigate('Lock');
        }
        else {
            this.props.navigation.navigate('Lock');
            { console.log("Incorrect Password [else if]", await AsyncStorage.getItem('userToken')) }
            Alert.alert("Incorrect Password", "Please Try Again")
        }
    };
    render() {
        return (

            <View style={styles.header}>
                <View style={{ height: 90 }}>
                    <View style={{ marginTop: 45, marginLeft: 18 }}>
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>Stroke MD</Text>
                    </View>
                </View>
                {
                    StatusBar.setBarStyle('light-content', true)

                }
                <View style={styles.outerContainer}>
                    <Image source={require('../Images/SchoolOfMed.png')} style={{ marginTop: Dimensions.get('window').height * .1, width: 221, height: 155, justifyContent: "center", alignItems: "center" }} />
                    <View style={styles.innerContainer}>
                        <View style={styles.styleBorder}>
                            <TextInput
                                maxLength={4}
                                placeholder="Password"
                                underlineColorAndroid='transparent'
                                style={styles.TextInputStyle}
                                keyboardType='numeric'
                                onChangeText={(text) => this.setState({ input: text })}
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={
                                async () => {
                                    this.state.counter = parseInt(this.state.counter) + 1;
                                    await AsyncStorage.setItem('userToken', this.state.input);
                                    { console.log("User Token in OnPress: ", await AsyncStorage.getItem('userToken')) }
                                    this._bootstrapAsync()
                                }
                            }
                            style={styles.TouchableOpacity}
                        >
                            <Text style={[styles.submitText, { color: "white" }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
    _signInAsync = async () => {

    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#a51417"
    },
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8F8F8"
    },
    innerContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: Dimensions.get("window").height / 2,
    },
    styleBorder: {
        borderRadius: 2,
        borderWidth: 1.5,
        borderColor: "#007360",
        padding: 5,
        marginBottom: 10

    },
    submitText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 30,
        fontSize: 25,

    },
    TouchableOpacity: {
        backgroundColor: "#007360",
        width: Dimensions.get("window").width / 3.5,
        alignItems: "center",
        borderRadius: 5,
        justifyContent: "center"
    },
});