import React from "react";
import {styles} from './styles'
import { Text, TouchableOpacity } from "react-native";


const ButtonApp = ({title,navigation}) =>{
    const handlePress =()=>{
        navigation.navigate('Crud');
        <ButtonApp title={title} navigation={navigation}/>
    };
    return(
        <TouchableOpacity
        onPress={handlePress}
        style={styles.container}>
           <Text style={styles.textContent}>{title}</Text>
        </TouchableOpacity>
    );
}
export default ButtonApp;