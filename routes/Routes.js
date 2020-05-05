import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Home"
import ViewQuote from "../components/ViewQuote"

const Stack = createStackNavigator();

export default function StackNavigator(){
  return(
      <NavigationContainer initialRouteName="Home">
          <Stack.Navigator>
              <Stack.Screen name = "Home" component = {Home}/>
              <Stack.Screen name = "ViewQuote" component = {ViewQuote}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}