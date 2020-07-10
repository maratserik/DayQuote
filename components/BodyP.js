import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';


const getFonts = () => Font.loadAsync({
    "RedHat": require("../assets/fonts/RedHatText-Regular.ttf")
})



export default function BodyP({pressHandler}){
    const [quote, setQuote] = useState([
        {author: "Jane Austen", text: "There is no charm equal to tenderness of heart.", id: "1"},
        {author: "Francis of Assisi", text: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.", id: "2"},
        {author: "Edgar Allan Poe", text: "All that we see or seem is but a dream within a dream.", id: "3"},
    ])
    const [loadedFonts, setLoadedFonts] = useState(false)
    if(loadedFonts){
        return(
            <View style = {styles.container}>
                <FlatList  
                    keyExtractor = {(item) => item.id}
                    data = {quote}
                    renderItem = {({item}) => (
                        <TouchableOpacity style = {styles.itemContainer} onPress = {() => pressHandler("ViewQuote", item)} >
                            <View>
                                <LinearGradient
                                    colors={["rgba(202, 255, 148, 0.49) ", "rgba(152, 241, 255, 0.47)"]} {...deg(267)}
                                    style= {styles.LinearGradient}>
                                    <View>
                                        <View>
                                            <Text style={{ fontFamily: 'RedHat', color: "white" }} numberOfLines={1} >{item.text}</Text>
                                        </View>
                                        <View style = {styles.textAuthor} >
                                            <Text style={{ fontFamily: 'RedHat', color: "white" }} >- {item.author}</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                
            </View>
        )
    }else{
        return(
          <AppLoading
            startAsync = {getFonts}
            onFinish = {()=>setLoadedFonts(true)}
          />
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: "5%",
        flex:1 
    },
    itemContainer: {
        marginBottom: "10%"
    },

    LinearGradient: {
        borderRadius: 20,
        paddingLeft: 23,
        paddingRight: 29,
        paddingTop: 10,
        paddingBottom: 24
    },
    textAuthor:{
        marginTop: 7,
        alignSelf: "flex-end"
    },
})