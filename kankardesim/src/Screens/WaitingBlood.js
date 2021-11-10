import React from "react";
import { View,Text, ImageBackground, TouchableNativeFeedback, Image,StyleSheet, Dimensions, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HomeHeader from "../Components/HomeHeader";
import SearchComponent from "../Components/SearchComponent";
import { kanBekleyenData, kanGruplariData } from "../Global/data";
import { colors } from "../Global/styles";
import WaitingBloodCard from "../Components/WaitingBloodCard";
import { isTemplateElement } from "@babel/types";


const SCREEN_WIDTH = Dimensions.get('window').width

export default function WaitingBlood(){
    return(
            <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
                <View style={{}}>
                    <SearchComponent/>
                    
                        <View style={{padding:10}}>
                        <FlatList
                            style={{marginTop:10, marginBottom:10}}
                            horizontal={true}
                            data={kanBekleyenData}
                            keyExtractor={(item, index)=>index.toString()}
                            renderItem={({item})=>(
                                <View>
                                    <WaitingBloodCard
                                        screenWidth = {SCREEN_WIDTH*0.8}
                                        hospitalImages= {item.hospitalImages}
                                        hospitalName={item.hospitalName}
                                        address={item.address}
                                        distance={item.distance}
                                        baslik={item.baslik}
                                        kanGrubu={item.kanGrubu}
                                        tarih={item.tarih}
                                    />
                                </View>
                            )}

                        />
                </View>
               
                </View>
                
            </ImageBackground>
            
        
    )
}

const styles = StyleSheet.create({
    imageView:{
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },
    card:{
        height:SCREEN_WIDTH*0.4545,
        width:SCREEN_WIDTH*0.9455,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035,
        borderRadius:10,
        backgroundColor:colors.grey4,
        marginLeft:12,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    listHeader:{
        fontSize:16,
        color:"white",
        paddingTop:10,
        paddingBottom:10,
        marginLeft:12,
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52,52,52,0.3)'
    }
})