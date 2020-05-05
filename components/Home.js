import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from '../node_modules/expo-linear-gradient';
import { deg } from '../node_modules/react-native-linear-gradient-degree';
import Navigation from "./Navik"
import Body from "./Body"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const pressHandler = () => {
    navigation.navigate('ViewQuote')
  }
  return (
    <View style = {styles.container}>
      <LinearGradient
      colors={["rgba(35, 118, 221, 0.78)", "rgba(255, 207, 113, 0.95)"]} {...deg(216)}
      style = {styles.LinearGradient}
      >
        <Navigation/>
        <View style = {styles.lineBorder}/>
        <TouchableWithoutFeedback title = "go" onPress = {pressHandler} style = {styles.touch}>
          <Body />
        </TouchableWithoutFeedback>
        
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
  LinearGradient: {
    width: "100%",
    height: "100%",
   
  },
  lineBorder: {
    backgroundColor: "white",
    width: "100%",
    height : 1,
    marginTop: "10%"
  }
});