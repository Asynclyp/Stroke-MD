import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import Section1a from "../sectionData/Section1a.js"
import Section1b from "../sectionData/Section1b.js"
import Section1c from "../sectionData/Section1c.js"
import Section1d from "../sectionData/Section1d.js"
import Section1e from "../sectionData/Section1e.js"
import Section1f from "../sectionData/Section1f.js"
import Section1g from "../sectionData/Section1g.js"
import Section1h from "../sectionData/Section1h.js"
import Section1i from "../sectionData/Section1i.js"
import Section2a from "../sectionData/Section2a.js"
import Section2b from "../sectionData/Section2b.js"
import Section2c from "../sectionData/Section2c.js"
import Section2d from "../sectionData/Section2d.js"
import Section2e from "../sectionData/Section2e.js"
import Section2f from "../sectionData/Section2f.js"
import Section3a from "../sectionData/Section3a.js"
import Section3a2 from "../sectionData/Section3a2.js"
import Section3b from "../sectionData/Section3b.js"
import Section3c from "../sectionData/Section4c.js"
import Section3d from "../sectionData/Section4a.js"
import Section3e from "../sectionData/Section4b.js"
import Section3f from "../sectionData/Section3f.js"
import Section4a from "../sectionData/Section4a.js"
import Section4b from "../sectionData/Section4b.js"
import Section4c from "../sectionData/Section4c.js"
import Inclusion from "../sectionData/1aInclusion"
import Exclusion from "../sectionData/1aExclusion"
import SpecialCases from "../sectionData/1aSpecialCases"
import BloodPressureGoal from "../sectionData/1aBloodPressure"
import OutcomeVisualAid from "../sectionData/1aOutcomeVisualAid"
import ImagingLab from "../sectionData/5A_ImagingLab"
import BPCoa from "../sectionData/5B_BPCoa"
import ConsultingService from "../sectionData/5C_ConsultingService"
import SAHScales from "../sectionData/5D_SAHScales"
import H1Intracranialhem from "../sectionData/1hIntracranialHem"
import H1BloodPressureManagement from "../sectionData/1hBloodPressureManagement"
import H1OrolingualAngio from "../sectionData/1hOrolingualAngio"
import A2Inclusion from "../sectionData/2aInclusion"
import A2Exclusion from "../sectionData/2aExclusion"
import A2ImagingSelection from "../sectionData/2aImagingSelection"
import A4Inclusion from "../sectionData/4aInclusion"
import A4Exclusion from "../sectionData/4aExclusion"
import Section5 from "../sectionData/Section5.js"



import SectionStuffToDo from "../sectionData/SectionStuffToDo"

export default class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width
    };
    Dimensions.addEventListener("change", e => {
      this.setState(e.window);
    });
  }

  closeModal = () => {
    this.props.changeModalVisibility(false);
  };
  render() {
    return (
      <View
        style={styles.contentContainer}
      >
        <ScrollView style={[styles.modalView]}>
          <View style={styles.textView}>
            <Text style={[styles.text, { fontSize: 18 }]}> {this.props.title.replace("Link to", "Section")}</Text>
            {
              this.props.title === "Link to 1A" ? <Section1a></Section1a>
                : this.props.title === "Inclusion" ? <Inclusion></Inclusion>
                  : this.props.title === "Special Cases" ? <SpecialCases></SpecialCases>
                    : this.props.title === "BP Goal" ? <BloodPressureGoal></BloodPressureGoal>
                      : this.props.title === "Outcome Visual Aid" ? <OutcomeVisualAid></OutcomeVisualAid>
                        : this.props.title === "Exclusion" ? <Exclusion></Exclusion>
                          : this.props.title === "Link to 1B" ? <Section1b></Section1b>
                            : this.props.title === "Link to 1C" ? <Section1c></Section1c>
                              : this.props.title === "Link to 1D" ? <Section1d></Section1d>
                                : this.props.title === "Link to 1E" ? <Section1e></Section1e>
                                  : this.props.title === "Link to 1F" ? <Section1f></Section1f>
                                    : this.props.title === "Link to 1G" ? <Section1g></Section1g>
                                      : this.props.title === "Link to 1H" ? <Section1h></Section1h>
                                        : this.props.title === "NIHSS Images" ? <Section1i></Section1i>
                                          : this.props.title === "Link to 2A" ? <Section2a></Section2a>
                                            : this.props.title === "Inclusion Criteria" ? <A2Inclusion></A2Inclusion>
                                              : this.props.title === "Exclusion Criteria" ? <A2Exclusion></A2Exclusion>
                                                : this.props.title === "Imaging Selection" ? <A2ImagingSelection></A2ImagingSelection>
                                                  : this.props.title === "Link to 2B" ? <Section2b></Section2b>
                                                    : this.props.title === "Link to 2C" ? <Section2c></Section2c>
                                                      : this.props.title === "Link to 2D" ? <Section2d></Section2d>
                                                        : this.props.title === "CTP/CTA Protocol" ? <Section2d></Section2d>
                                                          : this.props.title === "CTA protocol" ? <Section2d></Section2d>
                                                            : this.props.title === "Link to 2E" ? <Section2e></Section2e>
                                                              : this.props.title === "Link to 2F" ? <Section2f></Section2f>
                                                                : this.props.title === "mRS" ? <Section2f></Section2f>
                                                                  : this.props.title === "Link to 3A" ? <Section3a></Section3a>
                                                                    : this.props.title === "Hyperacute MRI Protocol" ? <Section3a></Section3a>
                                                                      : this.props.title === "Link to 3B" ? <Section3b></Section3b>
                                                                        : this.props.title === "Link to 4A" ? <Section4a></Section4a>
                                                                          : this.props.title === "Inclusion for Wake-up" ? <A4Inclusion></A4Inclusion>
                                                                            : this.props.title === "Exclusion for Wake-up" ? <A4Exclusion></A4Exclusion>
                                                                              : this.props.title === "Link to 4B" ? <Section4b></Section4b>
                                                                                : this.props.title === "Imaging Selection or Wake-up" ? <Section4b></Section4b>
                                                                                  : this.props.title === "Link to 4C" ? <Section4c></Section4c>
                                                                                    : this.props.title === "Link to 5" ? <Section5></Section5>
                                                                                      : this.props.title === "Initial Eval and Management" ? <ImagingLab></ImagingLab>
                                                                                        : this.props.title === "BP, Coagulopathy, Supportive mgmt" ? <BPCoa></BPCoa>
                                                                                          : this.props.title === "Consulting Service by ICH" ? <ConsultingService></ConsultingService>
                                                                                            : this.props.title === "ICU vs. SDU Admission" ? <SAHScales></SAHScales>
                                                                                              : this.props.title === "SectionStuffToDo" ? <SectionStuffToDo></SectionStuffToDo>
                                                                                                : this.props.title === "BP Goal and Mgmt" ? <H1BloodPressureManagement></H1BloodPressureManagement>
                                                                                                  : this.props.title === "Hemorrhagic Conversion" ? <H1Intracranialhem></H1Intracranialhem>
                                                                                                    : this.props.title === "Angioedema" ? <H1OrolingualAngio></H1OrolingualAngio>
                                                                                                      : this.props.title === "Hyperacute MRI Protocol" ? <Section3a></Section3a>
                                                                                                        : this.props.title === "Special Situation" ? <Section3b></Section3b>
                                                                                                          : this.props.title === "WAKE-UP Stroke Protocol" ? <Section3c></Section3c>
                                                                                                            : this.props.title === "WAKE-UP Inclusion, Exclusion Crit." ? <Section3d></Section3d>
                                                                                                              : this.props.title === "WAKE-UP Imaging Selection Crit." ? <Section3e></Section3e>
                                                                                                                : this.props.title === "Neuroradiology contact for Emerg." ? <Section3f></Section3f>

                                                                                                                  : <Text></Text>}
          </View>
        </ScrollView>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => this.closeModal()}
            style={styles.TouchableOpacity}
          >
            <Text style={[styles.text, { color: "white" }]}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#f0f0f0",
    width: Dimensions.get("window").width * 0.95,
    marginTop: 40,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: .5,
  },
  modalView: {
    marginTop: 20
  },
  text: {
    margin: 0,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  TouchableOpacity: {
    backgroundColor: "#6c7373",
    paddingVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    borderColor: '#858585',
    borderWidth: 2,
    width: '100%'
  },
  textView: {
    flex: 1,
    alignItems: "center"
  },
  buttonsView: {
    width: "100%",
    flexDirection: "row"
  }
});
