import React, { Component } from "react";
import { Linking, Text, View } from "react-native";
import styles from "../components/styles";

export default class URLLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={styles.subTextLink}
        onPress={() => {
          Linking.canOpenURL(this.props.url).then((isSupported) =>
            isSupported
              ? Linking.openURL(this.props.url)
              : console.log("Can't open: ", this.props.number)
          );
        }}
      >
        {this.props.text}
      </Text>
    );
  }
}
