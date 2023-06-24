import React, { Component } from 'react'
import { Alert, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Dimensions, View, Image, findNodeHandle } from 'react-native'
import PopupImage from "../sectionData/Section1i.js"
import ModalInitial from "../modal/ModalInitial";

export const NIHSSCalHeaderOptions = (navigation) => ({
    title: "",
    headerStyle: { backgroundColor: "#a51417" },
    headerTitleStyle: { color: "white", fontSize: 25 },
    headerLeft: () => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 22,
              fontWeight: "bold",
              color: "white",
              textAlignVertical: "top",
            }}
          >
            Stroke MD
          </Text>
        </View>
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={async () => {
          navigation.navigate("LandingPage");
          console.log("Moving back to LandingPage from NIHSS CALC");
        }}
        style={[styles.homeButton]}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    ),
})

export default class NIHSSCal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            LOC: 0,
            LOCQuestions: 0,
            LOCCommands: 0,
            GAZE: 0,
            FIELDS: 0,
            FACE: 0,
            RUE: 0,
            LUE: 0,
            RLE: 0,
            LLE: 0,
            ATAXIA: 0,
            SENSORY: 0,
            APHASIA: 0,
            DYSARTHRIA: 0,
            NEGLECT: 0,
            TOTAL: 0,
            // LOCQ_offset: 0
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
                        console.log("Moving back to LandingPage from NIHSS CALC")
                    }
                }
                style={[styles.homeButton]}
            >
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
        ),
    }) */

    // measure(){
    //     this.view.measure((x,y,width,height) => {
    //         this.setState({
    //             LOCQ_offset: y
    //         })
    //     })
    // }

    render() {
        var screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView style={styles.outerContainer} ref={(scroller) => {this.scroller = scroller}}>
                <View style={styles.innerContainer}>
                    <Text style={styles.fillerText}>NIHSS Calculator Screen</Text>

                    {/* LOC */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>LOC</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.LOC == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOC: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                            // this.scroller.scrollTo({ y: 10})
                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOC == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOC: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOC == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOC: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOC == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOC: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Alert</Text>
                                <Text style={styles.description}>1: Drowsy</Text>
                                <Text style={styles.description}>2: Stuporous</Text>
                                <Text style={styles.description}>3: Coma</Text>
                            </View>

                        </View>
                    </View>


                    {/* LOC QUESTIONS */}
                    <View style={styles.border}>
                        <View 
                            style={styles.newQuestion} 
                            // ref={ref=>this.LOCQ=ref}
                            // onLayout={({nativeEvent}) => {
                            //     this.setState({
                            //         LOCQ_offset: nativeEvent.layout
                            //     })
                            // }}
                        >
                            <Text style={styles.questionText} >LOC QUESTIONS</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.LOCQuestions == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ LOCQuestions: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOCQuestions == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOCQuestions: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOCQuestions == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOCQuestions: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>What is the MONTH?</Text>
                                <Text style={styles.description}>What is your AGE?</Text>
                                <Text style={styles.description}>0: Both correct</Text>
                                <Text style={styles.description}>1: One Correct</Text>
                                <Text style={styles.description}>2: Neither correct</Text>
                            </View>
                        </View>
                    </View>

                    {/* LOC COMMANDS */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>LOC COMMANDS</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.LOCCommands == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOCCommands: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOCCommands == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LOCCommands: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LOCCommands == 2 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ LOCCommands: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))
                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>"CLOSE EYES, MAKE FIST"</Text>
                                <Text style={styles.description}>0: Both correct</Text>
                                <Text style={styles.description}>1: One correct</Text>
                                <Text style={styles.description}>2: Neither correct</Text>
                            </View>
                        </View>
                    </View>
                    {/* GAZE */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>GAZE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.GAZE == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ GAZE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.GAZE == 1 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ GAZE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.GAZE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ GAZE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Partial hor. gaze paresis</Text>
                                <Text style={styles.description}>2: Forced horizontal gaze deviation</Text>
                            </View>
                        </View>
                    </View>

                    {/* FIELDS */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>FIELDS</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.FIELDS == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FIELDS: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FIELDS == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FIELDS: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FIELDS == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FIELDS: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FIELDS == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FIELDS: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Partial</Text>
                                <Text style={styles.description}>2: Complete HH</Text>
                                <Text style={styles.description}>3: Bilateral Blind from stroke</Text>
                            </View>
                        </View>
                    </View>

                    {/* FACE */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>FACE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.FACE == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FACE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FACE == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FACE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FACE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FACE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.FACE == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ FACE: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Minor</Text>
                                <Text style={styles.description}>2: Partial (UMN)</Text>
                                <Text style={styles.description}>3: LMN or bilateral</Text>
                            </View>
                        </View>
                    </View>
                    {/* RUE */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>RUE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.RUE == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RUE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RUE == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RUE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RUE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RUE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RUE == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RUE: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RUE == 4 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RUE: 4 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Drift (10 sec)</Text>
                                <Text style={styles.description}>2: Effort against gravity</Text>
                                <Text style={styles.description}>3: No effort against gravity</Text>
                                <Text style={styles.description}>4: 0/5</Text>
                            </View>
                        </View>
                    </View>


                    {/* LUE */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>LUE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.LUE == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LUE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LUE == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LUE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LUE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LUE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LUE == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LUE: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LUE == 4 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LUE: 4 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Drift (10 sec)</Text>
                                <Text style={styles.description}>2: Effort against gravity</Text>
                                <Text style={styles.description}>3: No effort against gravity</Text>
                                <Text style={styles.description}>4: 0/5</Text>
                            </View>
                        </View>
                    </View>

                    {/* RLE */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>RLE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.RLE == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RLE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RLE == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RLE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RLE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RLE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RLE == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RLE: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.RLE == 4 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ RLE: 4 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: No drift (5 sec)</Text>
                                <Text style={styles.description}>1: Drift</Text>
                                <Text style={styles.description}>2: Effort against gravity</Text>
                                <Text style={styles.description}>3: No effort against gravity</Text>
                                <Text style={styles.description}>4: No movement</Text>
                            </View>
                        </View>
                    </View>
                    {/* LLE */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>LLE</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.LLE == 0 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LLE: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LLE == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LLE: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LLE == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LLE: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LLE == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LLE: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.LLE == 4 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ LLE: 4 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: No drift (5 sec)</Text>
                                <Text style={styles.description}>1: Drift</Text>
                                <Text style={styles.description}>2: Effort against gravity</Text>
                                <Text style={styles.description}>3: No effort against gravity</Text>
                                <Text style={styles.description}>4: No movement</Text>
                            </View>
                        </View>
                    </View>

                    {/* ATAXIA */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>ATAXIA</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.ATAXIA == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ ATAXIA: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.ATAXIA == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ ATAXIA: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.ATAXIA == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ ATAXIA: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Absent</Text>
                                <Text style={styles.description}>1: Unilat in 1 limb</Text>
                                <Text style={styles.description}>2: Unilat in 2 limbs or bilateral</Text>
                            </View>
                        </View>
                    </View>
                    {/* SENSORY */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>SENSORY</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.SENSORY == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ SENSORY: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.SENSORY == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ SENSORY: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.SENSORY == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ SENSORY: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Partial</Text>
                                <Text style={styles.description}>2: Dense</Text>
                            </View>
                        </View>
                    </View>

                    {/* APHASIA */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>APHASIA</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.APHASIA == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ APHASIA: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.APHASIA == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ APHASIA: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.APHASIA == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ APHASIA: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.APHASIA == 3 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ APHASIA: 3 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal</Text>
                                <Text style={styles.description}>1: Mild/Mod dysphasia</Text>
                                <Text style={styles.description}>2: Severe</Text>
                                <Text style={styles.description}>3: Mute</Text>
                            </View>
                        </View>
                    </View>
                    <ModalInitial title="NIHSS Images" />

                    {/* DYSARTHRIA */}

                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>DYSARTHRIA</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.DYSARTHRIA == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ DYSARTHRIA: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.DYSARTHRIA == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ DYSARTHRIA: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.DYSARTHRIA == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ DYSARTHRIA: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: Normal intubated</Text>
                                <Text style={styles.description}>1: Mild/Mod dysphasia</Text>
                                <Text style={styles.description}>2: Near unintelligible</Text>
                            </View>
                        </View>
                    </View>

                    {/* NEGLECT */}
                    <View style={styles.border}>
                        <View style={styles.newQuestion}>
                            <Text style={styles.questionText}>NEGLECT</Text>
                            <View style={styles.buttonStyling}>
                                <TouchableOpacity
                                    style={this.state.NEGLECT == 0 ? styles.buttonPressed : styles.button}

                                    onPress={
                                        async () => {
                                            this.setState({ NEGLECT: 0 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>0</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.NEGLECT == 1 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ NEGLECT: 1 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={this.state.NEGLECT == 2 ? styles.buttonPressed : styles.button}
                                    onPress={
                                        async () => {
                                            this.setState({ NEGLECT: 2 })
                                            this.setState((prevState) => ({ TOTAL: prevState.SENSORY + prevState.LOC + prevState.LOCQuestions + prevState.LOCCommands + prevState.GAZE + prevState.FIELDS + prevState.FACE + prevState.RUE + prevState.LUE + prevState.RLE + prevState.LLE + prevState.ATAXIA + prevState.APHASIA + prevState.DYSARTHRIA + prevState.NEGLECT }))

                                        }
                                    }>
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.descriptionView}>
                                <Text style={styles.description}>0: None</Text>
                                <Text style={styles.description}>1: One modality</Text>
                                <Text style={styles.description}>2: Sensory + visual</Text>
                            </View>
                        </View>
                    </View>
                    <ModalInitial title="NIHSS Images" />
                    <View style={styles.bottomButtons}>

                        {/* <TouchableOpacity
                            style={styles.TouchableOpacity}
                            onPress={
                                async () => {
                                    this.setState({ TOTAL: this.state.LOC + this.state.LOCQuestions + this.state.LOCCommands + this.state.GAZE + this.state.FIELDS + this.state.FACE + this.state.RUE + this.state.LUE + this.state.RLE + this.state.LLE + this.state.ATAXIA + this.state.APHASIA + this.state.DYSARTHRIA + this.state.NEGLECT })
                                }
                            }>
                            <Text style={styles.text}>Submit</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            style={styles.TouchableOpacity}
                            onPress={
                                async () => {
                                    this.setState({
                                        LOC: 0,
                                        LOCQuestions: 0,
                                        LOCCommands: 0,
                                        GAZE: 0,
                                        FIELDS: 0,
                                        FACE: 0,
                                        RUE: 0,
                                        LUE: 0,
                                        RLE: 0,
                                        LLE: 0,
                                        ATAXIA: 0,
                                        SENSORY: 0,
                                        APHASIA: 0,
                                        DYSARTHRIA: 0,
                                        NEGLECT: 0,
                                        TOTAL: 0
                                    })
                                    this.scroller.scrollTo({ y: 0 })
                                }
                            }>
                            <Text style={styles.text}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.answer}>{this.state.TOTAL}</Text>

                </View>
            </ScrollView>
        )
    }
    _signInAsync = async () => {

    }
}

const styles = StyleSheet.create({
    TouchableOpacity: {
        alignItems: "center",
        backgroundColor: 'rgb(94,156,211)',
        marginVertical: 5,
        alignSelf: "stretch",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        height: 35,
        width: Dimensions.get("window").width * 0.45,
        margin: 2
    },
    answer: {
        borderWidth: 1,
        padding: 5,
        fontSize: 20,
        color: "black"
    },
    bottomButtons: {
        flexDirection: 'row'
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
    questionText: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'left',
        alignSelf: 'stretch'

    },
    button: {
        borderWidth: .5,
        borderColor: 'black',
        alignItems: 'center',
        width: 60,
        height: 30,
        justifyContent: 'center'
    },
    buttonPressed: {
        borderWidth: .5,
        borderColor: 'black',
        alignItems: 'center',
        width: 60,
        height: 30,
        backgroundColor: 'rgb(94,156,211)',
        justifyContent: 'center'

    },
    buttonStyling: {
        flexDirection: "row",
        alignSelf: 'stretch',
        // alignItems: 'left'

    },
    newQuestion: {
        margin: 5,
        alignSelf: 'stretch',
        // alignItems: 'left',
        width: Dimensions.get("window").width * .8,

    },
    numbers: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18
    },
    descriptionView: {
        marginTop: 5,
        textAlign: 'left',
        alignSelf: 'stretch'
    },
    border: {
        width: Dimensions.get("window").width * .8,
        borderColor: 'black',
        borderBottomWidth: .5,
        borderRadius: 6,
        alignItems: 'center',
        margin: 3,
        marginBottom: 5

    },
    outerContainer: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        // alignItems: 'center',

    },
    innerContainer: {
        flex: 1,
        marginBottom: Dimensions.get("window").height / 8,
        alignItems: 'center',
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
