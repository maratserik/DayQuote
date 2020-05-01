import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Navigation from "./components/Navik"

export default function App() {
  return (
    <View style = {styles.container}>
      <LinearGradient
        colors={["rgba(35, 118, 221, 1)", "rgba(255, 207, 113, 1)"]} {...deg(215.99)}
        style = {styles.LinearGradient}
      >
        <Navigation/>
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
    height: "100%"
  }
});
