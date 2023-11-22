import { Text, TextInput, View, Button, TouchableOpacity, Vibration } from "react-native";
import styles from "./style";
import ResultImc from "./resultimc";
import React, { useState } from 'react';

export default function Form() {
    const [messageImc, setMessageImc] = useState(null)
    const [resultImc, setResultImc] = useState(null)
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [bntMessage, setBntMessage] = useState("Calcular")
    const [imcErrorMessage, setImcErrorMessage] = useState(null)

    function errorImc(){
        if(resultImc === null){
            setImcErrorMessage("*campo obrigatório")
            Vibration.vibrate()
        }
    }

    function validation(){
            if(altura != null && peso != null){
                const imc = (peso / (altura * altura)).toFixed(2);
                setMessageImc("Opa, Seu Imc é:")
                setResultImc(imc);
                setBntMessage("Calcular Novamente")
                setImcErrorMessage(null)
                
            }else{
                errorImc()
                setMessageImc("*Insira os campos acima")
                setResultImc(null);
                setBntMessage("Calcular")
            }
            setAltura(null)
            setPeso(null)
    }

    return (
        <View>
            <View>
                <Text style={styles.labelStyle}>Altura</Text>
                <Text style={styles.errorImcMessage}>{imcErrorMessage}</Text>
                <TextInput style={styles.inputs} 
                keyboardType="numeric" 
                onChangeText={setAltura}
                value={altura}
                placeholder="Ex. 1.80"></TextInput>

                <Text style={styles.labelStyle}>Peso</Text>
                <Text style={styles.errorImcMessage}>{imcErrorMessage}</Text>
                <TextInput style={styles.inputs} 
                keyboardType="numeric"
                onChangeText={setPeso} 
                value={peso}
                placeholder="Ex. 84.20"></TextInput>

                <TouchableOpacity onPress={validation} style={styles.btnContaienr}>
                    <Text style={styles.bntText}>{bntMessage}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc MessageResult={messageImc} ResultImc={resultImc}/>
        </View>
    )
}