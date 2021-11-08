import React from "react";
import { View,Text, ImageBackground, TouchableNativeFeedback, Image,StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HomeHeader from "../Components/HomeHeader";
import SearchComponent from "../Components/SearchComponent";
import { kanGruplariData } from "../Global/data";
import { colors } from "../Global/styles";


const SCREEN_WIDTH = Dimensions.get('window').width

export default function WaitingBlood(){
    return(
            <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
                <View style={{}}>
                    <SearchComponent/>
                    <View>
                        <FlatList
                            style={{marginBottom:1}}
                            data={kanGruplariData}
                            keyExtractor={item=>item.id}
                            renderItem={({item})=>(
                                <TouchableNativeFeedback>
                                    <View>
                                        <ImageBackground 
                                            style={styles.image}
                                            source = {{uri:item.name}}
                                        >
                                            
                                            <View>
                                                <Text style={{color:colors.buttons}}>{item.name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableNativeFeedback>
                            )}
                                horizontal={false}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
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
    image:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10
    },
    listHeader:{
        fontSize:16,
        color:colors.grey2,
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