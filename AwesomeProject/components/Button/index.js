import React from "react";
import {styles} from './styles'
import { Text, TouchableOpacity } from "react-native";


const Button = ({title}) =>{
    const handlePress =()=>{
        console.log("Test event button")
    }
    return(
        <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        >
           <Text style={styles.textContent}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Button;