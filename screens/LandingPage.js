import React, { Component } from "react";
import {
  StatusBar,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from "react-native";

export const landingHeaderOptions = (navigation) => ({
  title: "",
  headerStyle: {
    backgroundColor: "#a51417",
  },
  headerTitleStyle: {
    color: "white",
    fontSize: 25,
  },
  headerLeft: () => (
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
});

export default class LandingPage extends Component {
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
    console.log(this.state.logo1);
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {StatusBar.setBarStyle("light-content", true)}

          {
            this.state.logo1 && (
              // LOGO OPTION 1
              <View style={styles.logo1Styling}>
                <View style={styles.row}>
                  {/* NIHSS CALC */}
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("NIHSSStack");
                    }}
                  >
                    <Image
                      source={require("../Images/NIHSSBED.png")}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                  {/* DECISION TREE */}
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("DecisionTreeStack");
                    }}
                  >
                    <Image
                      source={require("../Images/Decision.png")}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  {/* CALL SCREEN */}
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("CallStack");
                    }}
                  >
                    <Image
                      source={require("../Images/Call.png")}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                  {/* OTHERS SCREEN AKA RESOURCE SECTION*/}
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("OtherStack");
                    }}
                  >
                    <Image
                      source={require("../Images/ResourcesButton.png")}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
            // LOGO OPTION TWO
          }
          {/*  */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  innerContainer: {
    marginBottom: Dimensions.get("window").height / 8,
  },
  logo: {
    width: 95,
    height: 123,
    margin: 25,
  },
  logo2: {
    // width: 120,
    height: 70,
    width: 350,
    marginBottom: 23,
  },
  row: {
    flexDirection: "row",
  },
  logo1Styling: {
    marginTop: 80,
  },
  logo2Styling: {
    marginTop: 40,
  },
  changeViewButton: {
    backgroundColor: "#c8c8c8",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    borderColor: "#6c7373",
    borderWidth: 3,
  },
  changeViewText: {
    textAlign: "center",
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },
});
