import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props){
    return(
        <View style={styles.resultContainer}>
            <Text style={styles.textResult}>{props.MessageResult}</Text>
            <Text style={styles.imcResult}>{props.ResultImc}</Text>
        </View>
    )
}