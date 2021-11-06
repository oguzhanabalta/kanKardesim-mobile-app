import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function BloodFind({navigation}){
    return(
        <View style={{flex:1}}>
            <HomeHeader title="Kan Bul" navigation={navigation}/>
           <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

            <Text>Kan bul</Text>
        </View> 
        </View>
        
    )
}