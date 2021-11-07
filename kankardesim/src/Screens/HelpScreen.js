import React from "react";
import { View,ImageBackground,Text } from "react-native";
import HomeHeader from "../Components/HomeHeader";


export default function HelpScreen({navigation}){
    return(
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <HomeHeader title="Yardım" navigation={navigation}/>
            <View>
                <Text>safksdjfksdf</Text>
            </View>
        </ImageBackground>
    )
}