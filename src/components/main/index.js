import { View, Text } from "react-native";
import React from "react";
import Form from "../form";
import styles from "./style";

export default function Main(){
    return(
        <View style={styles.containerMain}>
            <Form/>
        </View>
    )
}