import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from '../node_modules/expo-linear-gradient';
import { deg } from '../node_modules/react-native-linear-gradient-degree';
import Navigation from "./Navik"

export default function Popular(){
    const pressHandler = (screen, param) => {
        navigation.navigate(screen, param)
      }
    return(
        <View>
            <LinearGradient
            colors={["rgba(35, 118, 221, 0.78)", "rgba(255, 207, 113, 0.95)"]} {...deg(216)}
            style = {styles.LinearGradient}
            >
                <Navigation/>
                <View style = {styles.lineBorder}/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    LinearGradient: {
        width: "100%",
        height: "100%",
       
    },
    lineBorder: {
        backgroundColor: "white",
        width: "100%",
        height : 1,
        marginTop: "5%"
    }
})