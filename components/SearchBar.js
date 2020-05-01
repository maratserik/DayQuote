import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';


export default function Search(){
    const[text, setText] = useState("")
    const typeHandler = (val) =>{
        setText(val)
    }
    return(
        <View style = {styles.searchContainer}>
            <LinearGradient
                colors={["rgba(254, 206, 113, 0.83) ", "rgba(152, 241, 255, 0.51)"]} {...deg(269.37)}
                style = {styles.searchGradient}
                >
                <TextInput
                    style = {styles.searchBar}
                    placeholder = "Search"
                    placeholderTextColor= "white"
                    onChangeText = {typeHandler}
                />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        width: "70%",
        marginTop: "12%",
        marginLeft: "14%",
    },
    searchGradient:{
        borderRadius: 69
    },
    searchBar :{
        padding: 5,
        paddingLeft: 15,
        color: "black",
        
    }   
})