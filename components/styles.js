import { React, StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 0
    },
    subHeader: {
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 7,
        marginTop: 7
    },
    subText: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5
    },
    subTextNoLineHeight: {
        fontSize: 15.5
    },
    subTextBold: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5,
        fontWeight: "bold"
    },
    SubTextItalic: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5,
        fontStyle: "italic"
    },
    subTextUnderline: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5,
        textDecorationLine: "underline"
    },
    subTextBoldUnderline: {
        fontSize: 15.5,
        lineHeight: 30,
        marginBottom: 5,
        textDecorationLine: "underline",
        fontWeight: "bold"
    },
    superScript: {
        fontSize: 8,
        lineHeight: 18
    },
    contentContainer: {
        margin: 10
    },
    subTextList: {
        fontSize: 15.5,
        lineHeight: 30,
        marginLeft: 16,
        marginBottom: 8
    },
    subTextListNoLineHeight: {
        fontSize: 15.5,
        marginLeft: 16,
        marginBottom: 5
    },
    subTextList2: {
        fontSize: 15.5,
        lineHeight: 30,
        marginLeft: 32,
        marginBottom: 8
    },
    subTextList3: {
        fontSize: 15.5,
        lineHeight: 30,
        marginLeft: 58,
        marginBottom: 8
    },
    subTextList4: {
        fontSize: 15.5,
        lineHeight: 30,
        marginLeft: 74,
        marginBottom: 8
    },
    subTextLink: {
        fontSize: 15.5,
        lineHeight: 30,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    subTextPhone: {
        fontSize: 15.5,
        lineHeight: 30,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    boldText: {
        fontSize: 15.5,
        lineHeight: 30,
        fontWeight: "bold"
    },
    centered: {
        justifyContent: "center",
        textAlign: "center"
    },
    downArrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 14,
        borderRightWidth: 7,
        borderBottomWidth: 0,
        borderLeftWidth: 7,
        borderTopColor: 'black',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    downArrowBar: {
        width: 8,
        height: 14,
        backgroundColor: "black"
    }
});