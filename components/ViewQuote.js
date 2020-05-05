import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from '../node_modules/expo-linear-gradient';
import { deg } from '../node_modules/react-native-linear-gradient-degree';

export default function ViewQuote(){
    return(
        <LinearGradient
            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(267)}
            style= {styles.LinearGradient}>
                <View>
                    <Text>
                        ViewQuote
                    </Text>
                </View>
        </LinearGradient>
        
    )
}


//Learn How to pass as props the Linear gradient parameters and its style
const styles = StyleSheet.create({

    LinearGradient: {
        borderRadius: 20,
        paddingLeft: 23,
        paddingRight: 29,
    },
   
})