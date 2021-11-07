import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import HomeHeader from "../Components/HomeHeader";

export default function BloodFind({ navigation }) {
    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <HomeHeader title="Kan Bul" navigation={navigation} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                    <Text>Kan bul</Text>
                </View>
            </View>
        </ImageBackground>


    )
}