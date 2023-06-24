import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class ContentBlock extends Component{

    render(){
        return(
            <View>
                <Text>
                    {this.props.title}
                </Text>
                <Text>
                    {this.props.content}
                </Text>
            </View>
        )
    }

}