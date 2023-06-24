import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text className="header" style={styles.header}>To Do</Text>
                <Text style={styles.subTextList}>1) Implement All of Section 2 <Text style={{ borderWidth: 2, borderColor: "black" }}>✔️</Text></Text>
                <Text style={styles.subTextList}>2) Implement All of Section 5</Text><Text> ✔️</Text>
                <Text style={styles.subTextList}>3) Remove Section 2 from reference screen, remove reference screen from main componenent</Text>
                <Text style={styles.subTextList}>4) Clean up the code and write comments</Text>
                <Text></Text>
                <Text className="header" style={styles.header}>Questions</Text>
                <Text style={styles.subTextList}>For Section 1I, what do we implement?</Text>
                <Text style={styles.subTextList}>For Section 5E, what do we implement?</Text>
                <Text style={styles.subTextList}>What is the LNK Box?</Text>
                {/* <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>MRI</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143621676}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>South MRI Charge Tech</Text>
                            <Text style={styles.phoneNumber}>314 362-1676</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143621636}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>South MRI Charge Tech</Text>
                            <Text style={styles.phoneNumber}>314 362-1636</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143626349}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>South MRI Charge Tech, night phone</Text>
                            <Text style={styles.phoneNumber}>314 362-6349</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>RN</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3142994876}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>10500 Stroke RN</Text>
                            <Text style={styles.phoneNumber}>314 299-4876</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3145612366}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ACT RN North</Text>
                            <Text style={styles.phoneNumber}>314 561-2366</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3148014088}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ACT RN South</Text>
                            <Text style={styles.phoneNumber}>314 801-4088</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>Neuro-Interventional</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143622584}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Neuro-IR Reading Room</Text>
                            <Text style={styles.phoneNumber}>314 362-2584</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143627113}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Neuro-IR Front Desk</Text>
                            <Text style={styles.phoneNumber}>314 362-7113</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3147554482}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Neuro-IR Fellow on Call</Text>
                            <Text style={styles.phoneNumber}>314 755-4482</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>Neuro Radiology</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3143622562}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Neuro Rad Reading Room</Text>
                            <Text style={styles.phoneNumber}>314 362-2562</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3145083767}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Neuro Rad Fellow on Call</Text>
                            <Text style={styles.phoneNumber}>314 508-3767</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>ED</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3147586903}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ED Trauma Attending</Text>
                            <Text style={styles.phoneNumber}>314 758-6903</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3147586914}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ED Charge Nurse</Text>
                            <Text style={styles.phoneNumber}>314 758-6914</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3147586787}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ED Communication Center</Text>
                            <Text style={styles.phoneNumber}>314758-6787</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3147586895}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>ED Reading Room</Text>
                            <Text style={styles.phoneNumber}>314 758-6895</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionHeaderBackground}>
                    <Text style={styles.sectionHeaderText}>Neuro Residents</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3145741591}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>General Chief</Text>
                            <Text style={styles.phoneNumber}>314 574-1591</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity
                        onPress={
                            async () => {
                                Linking.openURL('tel:${3145650804}')
                                console.log("pressed")
                            }
                        }>
                        <View>
                            <Text style={styles.phoneName}>Stroke Chief</Text>
                            <Text style={styles.phoneNumber}>314 565-0804</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
            </View>
        );
    }
}
