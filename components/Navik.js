import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./SearchBar"


export default function Navigation(){
    return(
        <View style = {styles.container}>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})