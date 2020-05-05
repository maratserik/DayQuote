import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    "RedHat": require("../assets/fonts/RedHatText-Regular.ttf")
})



export default function Body(){
    const [quote, setQuote] = useState([
        {author: "Albert Einstein", text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", id: "1"},
        {author: "Albert Einstein", text: "The only thing that interferes with my learning is my education", id: "2"},
        {author: "Albert Einstein", text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", id: "3"},
    ])
    const [loadedFonts, setLoadedFonts] = useState(false)
    if(loadedFonts){
        return(
            <View style = {styles.container}>
                <FlatList  
                    keyExtractor = {(item) => item.id}
                    data = {quote}
                    renderItem = {({item}) => (
                        <TouchableOpacity style = {styles.itemContainer}  >
                            <View>
                                <LinearGradient
                                    colors={["rgba(202, 255, 148, 0.49) ", "rgba(152, 241, 255, 0.47)"]} {...deg(267)}
                                    style= {styles.LinearGradient}>
                                    <View>
                                        <View>
                                            <Text>{item.text}</Text>
                                        </View>
                                        <View>
                                            <Text>{item.author}</Text>
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
        marginLeft: "5%"
        
    },
    itemContainer: {
        marginBottom: "10%"
    },
    LinearGradient: {
        borderRadius: 20,
        paddingLeft: 23,
        paddingRight: 29,
    },
   
})