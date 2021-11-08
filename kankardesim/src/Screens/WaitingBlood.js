import React from "react";
import { View,Text, ImageBackground } from "react-native";
import HomeHeader from "../Components/HomeHeader";
import SearchComponent from "../Components/SearchComponent";

export default function WaitingBlood(){
    return(
            <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
                <View>
                    <SearchComponent/>
                </View>
            </ImageBackground>
            
        
    )
}