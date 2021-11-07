import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function MyDonationScreen({navigation}){
    return(
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
         <View style={{flex:1}}>
            <HomeHeader title="Bağışlarım & İlanlarım" navigation={navigation}/>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

                <Text>Bağışlarım İlanlarım</Text>
            </View> 
        </View>
        </ImageBackground>
        
        
    )
}