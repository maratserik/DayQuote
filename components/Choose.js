import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Choose(){
    return(
        <View style = {styles.container}>
            <TouchableOpacity style = {[styles.buttonContainer, styles.buttonContainer1]}>
                <Text style = {styles.text} >All</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.buttonContainer, styles.buttonContainer2]}>
                <Text style = {styles.text}>Latest</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.buttonContainer, styles.buttonContainer3]}>
                <Text style = {styles.text}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.buttonContainer, styles.buttonContainer4]}>
                <Text style = {styles.text}>Popular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginTop: 35,
    },
    text: {
        justifyContent: "center",
        alignSelf: "center"
    },
    buttonContainer: {
        width: "15%",
        backgroundColor: "#7DABCE",
        borderRadius: 60,
        paddingTop: "2%",
        paddingBottom: "2%"
    },
    
    buttonContainer2: {
        width : "30%"
    },
    buttonContainer3: {
        width : "30%"
    },
    buttonContainer4: {
        width : "25%"
    }
})