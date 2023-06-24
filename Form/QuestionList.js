import React, { Component } from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native'
import LogicalNode from './LogicalNode'


export default class QuestionList extends Component {

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.questions.map(question => (
                        <LogicalNode key={question} questionID={question} currentAnswers={this.props.current} makeChoice={this.props.makeChoice} />
                    ))
                }
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    }
})