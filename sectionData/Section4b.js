import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from "../components/styles"

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Imaging Selection</Text>
                <Text style={styles.subText}> - Presence of DWI-FLAIR mismatch: defined as an acute ischemic lesion visible on DWI but no marked parenchymal hyperintensity visible on FLAIR in same region as DWI lesion (subtle FLAIR hyperintensity is allowed) </Text>
                <Text style={styles.subText}> - Exclude patient if poor MRI quality precluding interpretation of DWI-FLAIR mismatch  </Text>
                <Text style={styles.subText}> - Exclude patient if chronic stroke/white matter disease prevents interpretation of DWI-FLAIR mismatch </Text>
                <Text style={styles.subText}> - Exclude for acute or recent intracranial hemorrhage (not microhemorrhages) </Text>
                <Text style={styles.subText}> - Exclude large DWI lesion > 1/3 of the MCA territory or >50% of the ACA or PCA territory by visual inspection </Text>
                <Text style={styles.subText}> - Exclude for any MRI findings indicative of a high risk of symptomatic hemorrhage in the setting of IV thrombolytic (i.e. intracranial mass, numerous microhemorrhages or signs of CAA) </Text>
            </View>
        );
    }
}
