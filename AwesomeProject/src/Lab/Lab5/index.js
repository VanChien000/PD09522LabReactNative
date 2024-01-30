// import React from 'react';
import {styles} from '../Lab5/styles';
import  {ImageBackground, StatusBar, Text, Touchable, View} from "react-native"   
import {TouchableOpacity} from 'react-native'

const Lab5 =()=>{
    return(
        <View style={styles.container}> 
           <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
           <ImageBackground
              source={require('../../assets/image/travel.png')}
              style={styles.image}
           >
            <View style={styles.details}>
                <Text style={styles.text}>
                    <Text style={styles.firstLine}> Discover {'\n'}</Text>
                    <Text style={styles.secondLine}> world with us</Text>
                </Text>
                <Text style={styles.textStyle}> Discover world us</Text>
                <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}> Get Started</Text>
                </TouchableOpacity>
            </View>

            </ImageBackground> 
           </View>
    );
};
export default Lab5;