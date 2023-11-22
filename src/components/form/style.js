import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputs:{
        marginBottom: 25,
        marginTop: 10,
        padding: 5,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
    },
    labelStyle:{
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 5
    },
    resultContainer:{
        marginTop: 15,
    },
    textResult:{
        fontSize: 20,
        color:"#FF0043",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    },
    imcResult:{
        color:"#FF0043",
        width: "100%",
        textAlign: "center",
        borderRadius: 30,
        padding: 2,
        fontSize: 45,
        fontWeight: "bold"
    },
    btnContaienr:{
        backgroundColor: "#FF0043",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginLeft: 15,
        padding: 20,
        borderRadius: 30
    },
    bntText:{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#FFFF"
    }
})
export default styles