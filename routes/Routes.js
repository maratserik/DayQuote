import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Home"
import ViewQuote from "../components/ViewQuote"
import Categories from '../components/Categories';
import Popular from '../components/Popular';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();



function MyTabs() {
  return (
    <Tab.Navigator 
    barStyle={{ backgroundColor: '#fff' }}
    screenOptions = {({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName 
        if(route.name == "Latest" ){
          iconName = "ios-refresh" 
        }
        else if(route.name == "Popular" ){
          iconName="ios-flame" 
        }
        else if(route.name == "Categories" ){
          iconName="ios-apps"
        }
        return <Ionicons name= {iconName} size={25} color="black"/>
      }
    })}>
      <Tab.Screen name="Latest" component={Home} />
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name = "Categories" component = {Categories} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function StackNavigator(){
  return(
      <NavigationContainer initialRouteName="Home">
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name = "Home" component = {MyTabs}/>
          <Stack.Screen name = "ViewQuote" component = {ViewQuote}/>
          <Stack.Screen name = "Categories" component = {MyTabs}/>
          <Stack.Screen name = "Popular" component = {MyTabs}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
