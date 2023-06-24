import React, { Component } from "react";
import { Linking, Text, View } from "react-native";
import styles from "../components/styles";

export default class PhoneNumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text
        style={styles.subTextPhone}
        onPress={() => {
          const iosPhone = `tel:${this.props.number}`;
          const androidPhone = `tel:${this.props.number}`;
          let platformPhone = "";
          if (Platform.OS == "ios") {
            platformPhone = iosPhone;
          } else {
            platformPhone = androidPhone;
          }

          Linking.canOpenURL(platformPhone).then((isSupported) => {
            if (isSupported) {
              return Linking.openURL(platformPhone)
                .then(() => console.log("opened number: ", this.props.number))
                .catch(() => null);
            } else {
              console.log("Phone numbers not supported");
            }
          });
        }}
      >
        ({this.props.number.slice(0, 3)})-{this.props.number.slice(3, 6)}-
        {this.props.number.slice(6, 10)}
      </Text>
    );
  }
}
