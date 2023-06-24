import React, { Component } from 'react'
import { Text, ScrollView, Button, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import VisibleQuestionList from '../containers/VisibleQuestionList'

import { Provider } from 'react-redux'
import { applyMiddleware as dispatch/* , createStore */ } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import reducer from "../reducers/questions";
import { clear } from "../actions/action"

export const decisionTreeHeaderOptions = (navigation) => ({
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
            {/* <Image source={require('../Images/shieldLogo.png')} style={{ width: 43, height: 43, marginLeft: 20, justifyContent: "center" }} /> */}
            <View>
                <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke MD</Text>
                {/* <Text style={{ marginLeft: 6, color: "white", fontSize: 15, textAlignVertical: "top" }}>Stroke Analysis</Text> */}
            </View>
        </View>
    ),
    headerRight: () => (
        <TouchableOpacity
            activeOpacity={.4}
            onPress={
                async () => {
                    DecisionTree.store.dispatch(clear(0))
                    navigation.navigate('LandingPage')
                    console.log("Cleared, moving back to LandingPage from DecisionTree")
                }
            }
            style={[styles.clearButton]}
        >
            <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
    ),
})

export default class DecisionTree extends Component {
    constructor(props) {
        super(props);

    }

    // static navigationOptions = ({ navigation }) => ({
    //     title: '',
    //     headerStyle: {
    //         backgroundColor: "#a51417",
    //     },
    //     headerTitleStyle: {
    //         color: "white",
    //         fontSize: 25
    //     },
    //     headerLeft: (
    //         <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
    //             {/* <Image source={require('../Images/shieldLogo.png')} style={{ width: 43, height: 43, marginLeft: 20, justifyContent: "center" }} /> */}
    //             <View>
    //                 <Text style={{ marginLeft: 20, fontSize: 22, fontWeight: "bold", color: "white", textAlignVertical: "top" }}>Stroke MD</Text>
    //                 {/* <Text style={{ marginLeft: 6, color: "white", fontSize: 15, textAlignVertical: "top" }}>Stroke Analysis</Text> */}
    //             </View>
    //         </View>
    //     ),
    //     headerRight: (
    //         <TouchableOpacity
    //             activeOpacity={.4}
    //             onPress={
    //                 async () => {
    //                     DecisionTree.store.dispatch(clear(0))
    //                     navigation.navigate('LandingPage')
    //                     console.log("Cleared, moving back to LandingPage from DecisionTree")
    //                 }
    //             }
    //             style={[styles.clearButton]}
    //         >
    //             <Text style={styles.text}>Home</Text>
    //         </TouchableOpacity>
    //     ),
    // })

    // static _clear = () => {
    //     console.log("clearing")
    //     DecisionTree.store.dispatch(clear(0))
    // }


    // static store = createStore(reducer)
    static store = configureStore({ reducer });

    componentDidMount() {
        console.log("CDM")
    }

    render() {
        return (
            <Provider store={DecisionTree.store} >
                <ScrollView
                    style={styles.mainView}
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        this.scrollView.scrollToEnd({ animated: true });
                    }
                    }>

                    <VisibleQuestionList />
                </ScrollView>
            </Provider>

        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#F8F8F8"
    },
    clearButton: {
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
    }
})