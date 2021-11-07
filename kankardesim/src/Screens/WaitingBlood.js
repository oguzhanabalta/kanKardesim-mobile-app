import React from "react";
import { View,Text, ImageBackground } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function WaitingBlood({navigation}){
    return(
            <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
                <View>
                    <HomeHeader title="Bağış Bekleyenler" navigation={navigation}/>
                    <Text>sadsad</Text>
                </View>
            </ImageBackground>
            
        
    )
}