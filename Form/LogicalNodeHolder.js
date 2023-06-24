import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import contents from "../Data/contents.json";
import ModalInitial from "../modal/ModalInitial";
// import { withNavigation } from 'react-navigation';
import * as RootNavigation from '../navigation/navigationRef';


class LogicalNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reformattedContent: [],
            currentAnswersArray: [],
            mergedAnswersArray: [],
            allOptionsArray: [],
            answersObject: {},
            currentOptions: [],
            i: this.props.currentAnswers.length
        };
    }


    render() {
        // Creating new arrays based off of $newLine$ from contents.json
        this.state.reformattedContent = contents[this.props.questionID].content.split("$newLine$")
        // Obtain the live-updated answers, flatten the array and save
        if (this.props.currentAnswers.length > 0) {
            for (var i = 0; i < this.props.currentAnswers.length; i++) {
                this.state.currentAnswersArray[i] = Object.values(this.props.currentAnswers[i])
            }
        }
        this.state.mergedAnswersArray = [].concat.apply([], this.state.currentAnswersArray);
        if (this.props.currentAnswers.length > 0) {
            for (var i = 0; i < this.props.currentAnswers.length; i++) {
                this.state.answersObject[i] = this.state.mergedAnswersArray[i];
            }
        }
        return (
            <View style={styles.questionBlock}>
                <View style={styles.horizontalView}>
                    <View style={styles.questionHeaderView}>
                        <Text style={styles.questionHeader}>
                            {contents[this.props.questionID].title}
                        </Text>
                    </View>
                    {/* <View style={styles.questionContent}>
          {this.state.reformattedContent.end ? (
            <Text />
          ) : (
              this.state.reformattedContent.map(content => (
                content === "" ? (<Text key={content} />) :
                  <View key={content}>
                    <Text
                      style={[
                        content.includes("$newList$")
                          ? styles.contentTextList
                          : styles.contentText,
                      ]}
                    >
                      {content.replace("$newList$", "- ")}
                    </Text>
                  </View>

              ))
            )}
        </View> */}
                    {/* New page with popup dadta*/}
                    {contents[this.props.questionID].newPageEnd ? (
                        <Text />
                    ) : (
                            contents[this.props.questionID].newPage.map(newPage => (
                                <View key={newPage} style={styles.linkButton}>
                                    <TouchableOpacity
                                        style={styles.TouchableOpacityNewPage}
                                        onPress={
                                            async () => {
                                                // this.props.navigation.navigate('Section1Screen', {
                                                RootNavigation.navigate('Section1Screen', {
                                                    title: newPage,
                                                    links: contents[this.props.questionID].links
                                                })
                                            }
                                        }
                                    >
                                        <Text style={styles.text}>{newPage}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}

                    {/* Modal / popup screen*/}
                    {contents[this.props.questionID].linksEnd ? (
                        <Text />
                    ) : (
                            contents[this.props.questionID].links.map(link => (
                                <View key={link} style={styles.linkButton}>
                                    {console.log({ "LogicalNodejs: ": link })}
                                    <ModalInitial title={link} />
                                </View>
                            ))
                        )}
                    {/* Questions */}
                    {contents[this.props.questionID].end ? (
                        <Text />
                    ) : (
                            contents[this.props.questionID].options.map(option => (
                                <View key={option} style={styles.buttonLayout}>
                                    <TouchableOpacity
                                        activeOpacity={0.75}
                                        onPress={() => {
                                            this.props.makeChoice({
                                                question: this.props.questionID,
                                                choice: option
                                            });
                                        }}
                                        style={
                                            // Checking the option that was pressed with the current answers array to style the button based off what was clicked
                                            this.props.currentAnswers.length > 0 ?
                                                (this.state.answersObject[this.state.i] === option)
                                                    ? [styles.pressedTouchableOpacity]
                                                    : [styles.TouchableOpacity]
                                                : [styles.TouchableOpacity]
                                        }
                                    >
                                        <Text
                                            style={
                                                // Checking the option that was pressed with the current answers array to style the text based off what was clicked
                                                this.props.currentAnswers.length > 0 ?
                                                    (this.state.answersObject[this.state.i] === option)
                                                        ? [styles.pressedText]
                                                        : [styles.text]
                                                    : [styles.text]
                                            }
                                        >{option}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        )}
                </View>
            </View>
        );
    }
}
// export default withNavigation(LogicalNode);
export default LogicalNode;

const styles = StyleSheet.create({
    // questionBlock: {
    //   backgroundColor: "white",
    //   marginTop: 0,
    //   marginBottom: 20,
    //   marginLeft: 20,
    //   marginRight: 20,
    //   paddingTop: 15,
    //   paddingBottom: 10,
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   borderWidth: 1,
    //   borderColor: "#8c8c8c"
    // },

    questionBlock: {
        // backgroundColor: "white",
        marginTop: 0,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        // paddingTop: 15,
        // paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        // borderWidth: 1,
        // borderColor: "#8c8c8c"
    },
    horizontalView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    questionHeaderView: {
        width: Dimensions.get("window").width * 0.40,
    },



    questionHeader: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 5,
        textAlign: "left",
        // fontWeight: "bold",
        fontSize: 16,
        color: "black"
    },
    questionContent: {
        // marginTop: 10,
        // marginBottom: 10,
        justifyContent: "center",
        textAlign: "left"
    },
    TouchableOpacityNewPage: {
        flex: 1,
        backgroundColor: "#007360",
        marginVertical: 5,
        alignSelf: "stretch",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.5,
        borderColor: "#173e3a",
        borderRadius: 20,
        height: 45
    },
    TouchableOpacity: {
        // flex: 1,
        backgroundColor: "#c32032",
        marginVertical: 5,
        alignSelf: "stretch",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.5,
        borderColor: "#a51417",
        borderRadius: 20,
        height: 45
    },
    pressedTouchableOpacity: {
        // flex: 1,
        backgroundColor: "white",
        marginVertical: 5,
        alignSelf: "stretch",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: "#a51417",
        borderRadius: 20,
        height: 45
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    pressedText: {
        color: "#c32032",
        fontSize: 15,
        fontWeight: "bold"
    },
    buttonLayout: {
        flexDirection: "row"
    },
    contentText: {
        fontSize: 18,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 3
    },
    contentTextList: {
        fontSize: 18,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 11
    }
})