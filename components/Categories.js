import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from '../node_modules/expo-linear-gradient';
import { deg } from '../node_modules/react-native-linear-gradient-degree';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
    "RedHat": require("../assets/fonts/RedHatText-Regular.ttf")
})

export default function Categories(){
    const pressHandler = (screen, param) => {
        navigation.navigate(screen, param)
    }
    return(
        <View >
            <LinearGradient
                colors={["rgba(35, 118, 221, 0.78)", "rgba(255, 207, 113, 0.95)"]} {...deg(216)}
                style = {styles.LinearGradient}
            >
                <ScrollView style = {styles.container}>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Success</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Mentality</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Talent</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Hard Work</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Kindness</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Money</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Love</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Friendship</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.itemContainer} >
                        <LinearGradient
                            colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(265)}
                            style= {styles.LinearGradientButtons}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>Trust</Text>
                            <View style = {styles.imageContainer}>
                                <Image source = {require('../assets/arrow.png')} style = {styles.image}/>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: "15%",
        flex: 1
    },
    itemContainer: {
        marginBottom: "10%",
    },
    LinearGradient: {
        width: "100%",
        height: "100%",
       
    },
    LinearGradientButtons: {
        borderRadius: 20,
        paddingLeft: 23,
        paddingRight: 29,
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: "row",
    },
    lineBorder: {
        backgroundColor: "white",
        width: "100%",
        height : 1,
        marginTop: "5%"
    },
    imageContainer:{
        justifyContent: "center",
        flex: 1,
    },  
    image:{
        width: 15,
        height: 15,
        left: "100%"
    }
})