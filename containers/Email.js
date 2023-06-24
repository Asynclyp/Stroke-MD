import React, { Component } from "react";
import { Linking, Text, View } from "react-native";
import styles from "../components/styles";

export default class Email extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={styles.subTextPhone}
        onPress={() => {
          const emailLink = `mailto:${this.props.email}`;

          Linking.canOpenURL(emailLink).then((isSupported) => {
            if (isSupported) {
              return Linking.openURL(emailLink)
                .then(() => console.log("opened email: ", this.props.email))
                .catch(() => null);
            } else {
              console.log("Emails not supported");
            }
          });
        }}
      >
        {this.props.email}
      </Text>
    );
  }
}
