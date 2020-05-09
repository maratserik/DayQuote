import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Search from "./SearchBar"



export default function Navigation(){
    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}> 
                <Image source = {require('../assets/search.png')} style = {styles.image}/>
            </View>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    imageContainer: {
        position: "absolute",
        marginTop: "15%",
        marginLeft: "10%"
    },
    buttons:{
        flexDirection: "row",
        marginTop: 35,
        justifyContent: "space-around"
    },
    text: {
        justifyContent: "center",
        alignSelf: "center"
    },
    buttonContainer: {
        width: "15%",
        backgroundColor: "#7DABCE",
        borderRadius: 60,
        paddingTop: 10,
        paddingBottom: 10
    },
    
    buttonContainer2: {
        width: "200%"
    },
    buttonContainer3: {
        width : "150%"
    },
    buttonContainer4: {
        width : "150%"
    },
    currentChoose : {

    }
})