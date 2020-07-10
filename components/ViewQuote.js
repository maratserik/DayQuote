import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from '../node_modules/expo-linear-gradient';
import { deg } from '../node_modules/react-native-linear-gradient-degree';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const getFonts = () => Font.loadAsync({
    "RedHat": require("../assets/fonts/RedHatText-Regular.ttf")
})

export default function ViewQuote({ route }){
    const { author } = route.params;
    const { text } = route.params;
    return(
        <View>
            <LinearGradient
                colors={["rgba(35, 118, 221, 0.78)", "rgba(255, 207, 113, 0.95)"]} {...deg(216)}
                style= {styles.LinearGradient}>
                    <View style = {styles.menu}>
                        <Ionicons name="ios-home" size={30} color="black" style = {styles.home} />
                        <MaterialCommunityIcons name="content-copy" size={30} color="black"  style = {styles.copy}/>
                    </View>
                    <View style = {styles.textContainer}>
                        <View style = {styles.quote}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 20 }}>
                                {text}
                            </Text>
                        </View>
                        <View style = {styles.author}>
                            <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 15 }}> - {author}</Text>
                        </View>
                    </View>
                    <View style = {styles.footer}>
                        <View style = {styles.footerText}>
                            <Text style={{ fontFamily: 'RedHat', color: "black", fontSize: 20 }}>See related</Text>
                        </View>
                    </View>
                    <View style = {styles.relatedQuotes}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity>
                                <LinearGradient colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(269)}
                                style= {styles.LinearGradientButtons}
                                >
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12 }} numberOfLines={3}> Some quote that is really related to above</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12, alignSelf: "flex-end" }}> - Author</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(269)}
                                style= {styles.LinearGradientButtons}
                                >
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12 }} numberOfLines={3}> Some quote that is really related to above</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12, alignSelf: "flex-end" }}> - Author</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(269)}
                                style= {styles.LinearGradientButtons}
                                >
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12 }} numberOfLines={3}> Some quote that is really related to above</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12, alignSelf: "flex-end" }}> - Author</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(269)}
                                style= {styles.LinearGradientButtons}
                                >
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12 }} numberOfLines={3}> Some quote that is really related to above</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12, alignSelf: "flex-end" }}> - Author</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient colors={["rgba(202, 255, 148, 0.59) ", "rgba(152, 241, 255, 0.47)"]} {...deg(269)}
                                style= {styles.LinearGradientButtons}
                                >
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12 }} numberOfLines={3}> Some quote that is really related to above</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: 'RedHat', color: "white", fontSize: 12, alignSelf: "flex-end" }}> - Author</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
            </LinearGradient>
        </View>
    )
}


//Learn How to pass as props the Linear gradient parameters and its style
const styles = StyleSheet.create({
    LinearGradient: {
        width: "100%",
        height: "100%",
       
    },
    menu: {
        width: "100%",
        flexDirection: "row",
        top: 40
    },
    home:{
        left: 30
    },
    copy:{
        marginLeft: "80%"
    },
    textContainer:{
        flex: 1,
        width: "70%",
        alignSelf: "center",
        marginTop: "40%"
    },
    quote: {
        marginBottom: "45%"
    },
    author: {
        alignSelf: "flex-end"
    },
    footer: {
        flex: 1,
        marginTop: "70%",
        
    },
    footerText: {
        left: 25
    },
    relatedQuotes: {
        bottom: "6%",
        left: 25,
        flex: 1,
    },
    LinearGradientButtons: {
        width: 135,
        height: 107,
        borderRadius: 20,
        paddingLeft: 23,
        paddingRight: 29,
        paddingTop: 10,
        paddingBottom: 20,
        justifyContent: "space-around",
        marginRight: 20
    }
})