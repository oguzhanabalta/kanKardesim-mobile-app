import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function MyAccountScreen(){
    return(
        <View style={{flex:1}}>
            <HomeHeader title="Profilim"/>
           <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

            <Text>Profilim</Text>
        </View> 
        </View>
        
    )
}