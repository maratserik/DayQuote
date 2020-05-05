import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import StackNavigator from "./routes/homeStack"

const getFonts = () => Font.loadAsync({
    "RedHat": require("./assets/fonts/RedHatText-Regular.ttf")
})

export default function App() {
    const [loadedFonts, setLoadedFonts] = useState(false)
    if(loadedFonts){
      return (
        <StackNavigator/>
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
  