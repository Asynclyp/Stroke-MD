import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import { useState } from 'react'

export default class LotsOfStyles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          logo1: true,
          logo2: false,
        };
      }
    /* static navigationOptions = ({ navigation }) => ({
        title: "",
        headerStyle: {
          backgroundColor: "#a51417",
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 25,
        },
        headerLeft: (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../Images/shieldLogo.png")}
              style={{
                width: 220 / 7,
                height: 252 / 7,
                marginLeft: 20,
                marginRight: 5,
                justifyContent: "center",
              }}
            />
            <View>
              <Text
                style={{
                  marginLeft: 3,
                  marginTop: 5,
                  fontSize: 24,
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
      }); */
    render() {
        return (
                <View style={styles.imageContainer}>
                    <Image source={require('../Images/section1i0.png')} style={{ height: Dimensions.get("window").height * .6, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                    <Image source={require('../Images/section1i1.png')} style={{ height: Dimensions.get("window").height * .6, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                    <Image source={require('../Images/section1i2.png')} style={{ height: Dimensions.get("window").height * .6, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                    <Image source={require('../Images/section1i3.png')} style={{ height: Dimensions.get("window").height * .4, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
                    <Image source={require('../Images/section1i4.png')} style={{ height: Dimensions.get("window").height * .4, width: Dimensions.get("window").width * .95, resizeMode: 'contain' }} />
              </View >
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
