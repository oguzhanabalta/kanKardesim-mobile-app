import React from "react";
import { View,Text,StyleSheet, ImageBackground } from "react-native";
import {Icon} from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";


export default function HomeScreen(){
    return(
        <ImageBackground source={require('../Assets/image/back.png')} style={{flex:1}} >
            <View style={styles.container}>
                <HomeHeader title="Anasayfa"/>
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }

})
