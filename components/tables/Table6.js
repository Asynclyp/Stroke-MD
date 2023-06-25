import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import PhoneNumber from "../../containers/PhoneNumber.js"
import Email from "../../containers/Email.js"
export default class Table extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>
          Required Documentation of Stroke Metrics for Joint Commission and
          Comprehensive Stroke Center Certification
        </Text>
        <View style={styles.rowView}>
          <View style={styles.columnView}>
            <View style={styles.borderOdd}>
              <View style={styles.rowView}>
                <Text style={styles.boldUnderline}>Stroke metrics:</Text>
              </View>
            </View>
            <View style={styles.borderOdd}>
              <View style={styles.rowView}>
                <Text style={styles.boldUnderline}>Ischemic Strokes:</Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  NIH Stroke Scale (NIHSS) must be performed and documented on
                  all ischemic stroke and TIA patients within 12 hours of
                  entering the hospital, even if out of the window for thrombolytic.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  If thrombolytic is given, the last known well (LKW), dose, and time of
                  administration must be clearly documented. If there is a delay
                  in administration, clearly note the reason.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  An antiplatelet (aspirin) must be given by the end of day 2.{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    If patient is NPO, change to a suppository.
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  Ischemic stroke patients must be discharged on high-intensity
                  statin or a reason must be charted.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  If atrial fibrillation, patient must be discharged on an
                  anticoagulant or contraindication charted.
                </Text>
              </View>
            </View>

            <View style={styles.borderOdd}>
              <View style={styles.rowView}>
                <Text style={styles.boldUnderline}>Hemorrhagic Strokes:</Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  Severity measurements must be performed and documented for all
                  SAH (Hunt-Hess) and ICH (ICH score) patients within 6 hours of
                  arrival and before a procedure.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  Nimodipine must be ordered and given within the first 24 hours
                  of entering the hospital for SAH patients.
                </Text>
              </View>
            </View>

            <View style={styles.borderOdd}>
              <View style={styles.rowView}>
                <Text style={styles.boldUnderline}>All Strokes:</Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  DVT prophylaxis must be initiated by the end of day 2.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text style={{ fontWeight: "bold" }}>
                  Document the time for all your assessments.
                </Text>
              </View>
            </View>

            <View style={styles.borderOdd}>
              <View style={styles.rowView}>
                <Text style={{ fontWeight: "bold" }}>
                  Assessments for stroke patients when admitted to an inpatient
                  unit:
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text style={{ fontWeight: "bold", fontStyle: "italic"}}>
                  * These will be completed by nurses for neuro floors
                  (113/114/115/105/10400) and Shukar. The resident will be
                  expected to perform these on patients assigned to non-neuro
                  floors due to overflow.
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  NIHSS will be performed on admission, discharge, transfer,
                  change of condition and 24 hours after thrombolytic administration.{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    Nurse will notify MD for change in condition or change of 4
                    or greater in the NIHSS
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  Dysphagia screen must be completed before giving anything PO.
                  If failed, speech therapy must evaluate before PO is given and{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    aspirin should be changed to PR.{" "}
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text>
                  Depression screen will be completed before discharge.{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    MD will be notified if the score is 3 or greater or of the
                    patient is unable to complete the screen.
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.borderEven}>
              <View style={styles.rowView}>
                <Text style={{ fontWeight: "bold" }}>
                  For issues regarding nursing bedside screenings or patient
                  education, please contact the SMART nurses:
                </Text>
              </View>
            </View>

            <View style={styles.borderEvenEnd}>
              <View style={styles.rowView}>
                <Text>
                  <Text style={{ fontWeight: "600" }}>Anne Shoemake</Text>,
                  Office:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    <PhoneNumber number={"3143627972"} />
                  </Text>
                  , Cell:
                  <Text style={{ fontWeight: "600" }}>
                    {" "}
                    <PhoneNumber number={"3143938663"} />
                  </Text>
                  , Email:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    <Email email={"anne.shoemake@bjc.org"} />
                  </Text>{" "}
                  <Text style={{ fontWeight: "600" }}>Calvin Thomas</Text>,
                  Office:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    <PhoneNumber number={"3143629234"} />
                  </Text>
                  , Cell:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    <PhoneNumber number={"3146200604"} />
                  </Text>
                  , Email:{" "}
                  <Text style={{ fontWeight: "600" }}>
                    <Email email={"calvin.thomas@bjc.org"} />
                  </Text>{" "}
                </Text>
              </View>
            </View>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    // justifyContent: "center"
    margin: 5,
  },
  columnView: {
    flexDirection: "column",
  },

  borderOdd: {
    backgroundColor: "rgb(187,216,237)",
    borderColor: "black",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  borderEven: {
    backgroundColor: "rgb(233,238,244)",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "black",
  },
  borderEvenEnd: {
    backgroundColor: "rgb(233,238,244)",
    borderWidth: 1,
    borderColor: "black",
  },

  titleView: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgb(81,130,188)",
  },
  title: {
    color: "white",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 0,
  },
  boldUnderline: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  secondView: {
    fontSize: 15,
    marginLeft: 20,
    width: Dimensions.get("window").width * 0.45,
    borderColor: "white",
    borderLeftWidth: 1,
  },
});
