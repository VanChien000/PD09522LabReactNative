// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Splash from './src/screen/auth/Splash';
import SignUp from './src/screen/auth/SignUp';
import AuthHeader from './components/AuthHeader';
import Lab5 from './src/Lab/Lab5';
import Lab6 from './src/Lab/Lab6';
import SignIn from './src/screen/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Splash" component={Splash}/>
        <Stack.Screen  name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen  name="SignUp" component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
