import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Search from "./SearchBar"
import Choose from "./Choose"

export default function Navigation(){
    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}> 
                <Image source = {require('../assets/search.png')} style = {styles.image}/>
            </View>
            <Search/>
            <Choose/>
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
    
})