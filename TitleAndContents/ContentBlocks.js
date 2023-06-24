import React from 'react'
import ContentBlock from './ContentBlock'
import {Text, View} from 'react-native'

export const testBlock = <ContentBlock
    title= "test block"
    content= "Test Block content"
/>

export const How_Long_Is_Last_Normal_Time = <ContentBlock
    title = "How long is known normal time?"

/>

export const Triage_per_patient_diagnosis_and_level_of_care_needed = <ContentBlock
    title = "Triage"
    content = "Triage per patient’s diagnosis and level of care needed"
/>

export const Review_Wake_Up_Criteria = <ContentBlock
    title = "Review WAKE-UP CRITERIA"
    content = "
        Inclusion Criteria\n
        -	Clinical signs of acute stroke with disabling stroke deficit
        -	Patient is > 4.5 hr from last known normal (LKN) time
        -	Patient can get a hyperacute MRI (hMRI) and be treated with IV thrombolytic in < 4.5 hr from symptom discovery

        Exclusion Criteria
        -	Age > 80
        -	Contraindication to MRI (i.e. pacemaker)
        -	Pre-morbid mRS 3 or greater
        -	Early CT signs of ischemia > 1/3 of the MCA territory
        -	Large vessel occlusion and planned thrombectomy
        -	NIHSS > 25
        -	Contraindication to IV thrombolytic according to thrombolytic stroke protocol for < 4.5 hour window
        "
/>

// export const testBlock = <Text>test block</Text>;