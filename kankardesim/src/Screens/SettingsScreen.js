import React from "react";
import { View, ImageBackground, Text } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function SettingsScreen({navigation}){
    return(
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <HomeHeader title="Ayarlar" navigation={navigation}/>
            <View>
                <Text>aksjdlaksdj</Text>
            </View>
        </ImageBackground>
    )
}