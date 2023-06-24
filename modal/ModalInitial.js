import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import ModalView from "./ModalView";
export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      pressStatus: false
    };
  }
  // To know when each section's button is being held down
  changeModalVisibility = bool => {
    this.setState({ isModalVisible: bool });
  };
  render() {
    return (
      <View
        style={[
          styles.contentContainer,
          this.state.isModalVisible
        ]}
      >
        <View />
        <TouchableOpacity
          onPress={() => this.changeModalVisibility(true)}
          style={
            styles.TouchableOpacity}
          activeOpacity={.5}
        >
          <View style={styles.viewTouchableOpacity}>
            {
              this.props.title == "Inclusion" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                : this.props.title == "Inclusion Criteria" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                  : this.props.title == "Inclusion for Wake-up" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                    : this.props.title == "Exclusion" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                      : this.props.title == "Exclusion Criteria" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                        : this.props.title == "Exclusion for Wake-up" ? <Image source={require('../Images/check.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                          : this.props.title == "Special Cases" ? <Image source={require('../Images/star.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                            : this.props.title == "BP Goal" ? <Image source={require('../Images/opacity.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                              : this.props.title == "BP Goal and Mgmt" ? <Image source={require('../Images/opacity.png')} resizeMode='contain' style={{ height: 26, width: 26 }} />
                                : this.props.title == "Outcome Visual Aid" ? <Image source={require('../Images/poll.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                  : this.props.title == "Blood Pressure mgmt" ? <Image source={require('../Images/opacity.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                    : this.props.title == "Hemorrhagic Conversion" ? <Image source={require('../Images/error.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                      : this.props.title == "Angioedema" ? <Image source={require('../Images/face.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                        : this.props.title == "CTA protocol" ? <Image source={require('../Images/description.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                          : this.props.title == "Imaging Selection" ? <Image source={require('../Images/insert_photo.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                            : this.props.title == "Consulting Service by ICH" ? <Image source={require('../Images/supervisor.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                              : this.props.title == "ICU vs. SDU Admission" ? <Image source={require('../Images/local_hospital.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                                : this.props.title == "Initial Eval and Management" ? <Image source={require('../Images/menu_book.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                                  : this.props.title == "Acute Ischemic Stroke CTA Protocol" ? <Image source={require('../Images/description.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                                    // : this.props.title == "Hyperacute MRI Protocol" ? <Image source={require('../Images/description.png')} resizeMode='contain' style={{ height: 23, width: 23 }} />
                                                    : null}
            <Text
              style={
                styles.text
              }>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
        {/* Modal Begins */}
        <Modal
          visible={this.state.isModalVisible}
          onRequestClose={() => this.changeModalVisibility(false)}
          animationType="none"
          transparent={true}
        >
          <ModalView
            title={this.props.title}
            style={styles.modalView}
            changeModalVisibility={this.changeModalVisibility}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 3
  },
  hyperacuteText: {
    margin: 0,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textPress: {
    color: "#007360",
    fontSize: 25,
    fontWeight: "bold",
  },
  TouchableOpacity: {
    backgroundColor: "#6c7373",
    marginVertical: 5,
    alignSelf: "stretch",
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: "#595f5f",
    borderRadius: 10,
    height: 35,
    width: Dimensions.get("window").width * 0.80,
  },
  hyperacuteTouchableOpacity: {
    flex: 1,
    backgroundColor: "#6c7373",
    marginVertical: 5,
    alignSelf: "stretch",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: "#535959",
    borderRadius: 20,
    height: 30,
    width: Dimensions.get("window").width * 0.8,
  },
  viewTouchableOpacity: {
    flexDirection: 'row'
  }
});
