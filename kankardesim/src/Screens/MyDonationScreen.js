import React, {useState,useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Card, Header, Icon } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { colors } from "../Global/styles";
import UpdateIlanScreen from "./UpdateIlanScreen";
import Feed from "./Feed";
import { createStackNavigator } from "@react-navigation/stack";

export default function MyDonationScreen({navigation}){
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator initialRouteName="Feed" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Feed" component={Feed}/>
            <Stack.Screen name="Update" component={UpdateIlanScreen}/>

        </Stack.Navigator>
        
    )
}