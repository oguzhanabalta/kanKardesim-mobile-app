import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, Pressable,Image, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import {menuData, kanBekleyenData} from "../Global/data";
import WaitingBloodCard from "../Components/WaitingBloodCard";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen() {


    const [kanara, setKanara] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }} >
            <View style={styles.container}>
                <HomeHeader title="Anasayfa" />
                <ScrollView
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={true}
                >
                    <View>
                        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-evenly" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setKanara(true)
                                }}
                            >
                                <View style={{ ...styles.kanAraButton, backgroundColor: kanara ? "black" : "white" }}>
                                    <Text style={styles.kanAraText}>Kan Ara</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setKanara(false)
                                }}
                            >
                                <View style={{ ...styles.kanBulButton, backgroundColor: kanara ? "white" : "black" }}>
                                    <Text style={styles.kanBulText}>Kan Ver</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row",justifyContent: "space-evenly"}}>
                            <View style={{flexDirection:"row", backgroundColor:"black", marginTop:20, borderRadius:30, paddingVertical:5}}>
                                    <View style={{flexDirection:"row", alignItems:"center",paddingVertical:3, backgroundColor:"red", borderRadius:30,marginLeft:12, paddingHorizontal:10}}>
                                        <Icon
                                            type="material-community"
                                            name="map-marker"
                                            color="white"
                                        />
                                        <Text style={{color:"white"}}>Kan bekleyen kişi sayısı</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"red", borderRadius:30, marginLeft:15, paddingHorizontal:10, width:"25%"}}>
                                        <Icon
                                            type="material-community"
                                            name="map-marker"
                                            color="white"
                                        />
                                        <Text style={{ color:"white"}}>30</Text>
                                    </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",justifyContent: "space-evenly"}}>
                            <View style={{flexDirection:"row", backgroundColor:"black", marginTop:10, borderRadius:30, paddingVertical:5, }}>
                                    <View style={styles.kanBekleyenView}>
                                        <Icon
                                            type="material-community"
                                            name="map-marker"
                                            color="white"
                                        />
                                        <Text style={{color:"white"}}>Bugün yapılan bağış sayısı</Text>
                                    </View>
                                    <View style={styles.yapilanBagisView}>
                                        <Icon
                                            type="material-community"
                                            name="map-marker"
                                            color="white"
                                        />
                                        <Text style={{ color:"white"}}>52</Text>
                                    </View>
                            </View>
                        </View>
                        <View style={styles.headerBarView}>
                            <Text style={{color:"black", fontSize:16, fontWeight:"800"}}>Kategoriler</Text>
                        </View>
                        <View>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={menuData}
                                keyExtractor={(item)=>item.id}
                                extraData={indexCheck} 
                                renderItem={({item, index}) =>(
                                    <Pressable
                                        onPress={()=> {setIndexCheck(item.id)}}
                                    >
                                        <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard} }>
                                            <View style={{backgroundColor:colors.grey5, borderRadius:20, width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
                                                <Image
                                                    style={{height:60,width:60,}}
                                                    source= {item.image}
                                                />
                                                <View style={{marginTop:10}}>
                                                    <Text style={indexCheck === item.id ? {color:colors.buttons, fontWeight:"bold"}: {color:"black", fontWeight:"bold"}}>{item.name}</Text>
                                                </View>
                                            </View>
                                            
                                        </View>
                                    </Pressable>
                                )}
                            />
                        </View>
                        <View style={styles.headerBarView}>
                            <Text style={{color:"black", fontSize:16, fontWeight:"800"}}>Kan Bekleyenler</Text>
                        </View>
                        <View>
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
                </ScrollView>


            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    kanAraButton: {
        paddingHorizontal: 20,
        borderRadius: 30,
        paddingVertical: 5
    },
    kanAraText: {
        marginLeft: 5,
        fontSize: 16,
        color: "#dc2619",
    },
    kanBulButton: {
        paddingHorizontal: 20,
        borderRadius: 30,
        paddingVertical: 5
    },
    kanBulText: {
        marginLeft: 5,
        fontSize: 16,
        color: "#dc2619",
    },
    kanBekleyenView:{
        flexDirection:"row", 
        alignItems:"center",
        paddingVertical:3, 
        backgroundColor:"red", 
        borderRadius:30,
        marginLeft:12, 
        paddingHorizontal:10
    },
    yapilanBagisView: {
        flexDirection:"row", 
        alignItems:"center", 
        backgroundColor:"red", 
        borderRadius:30,
         marginLeft:15, 
         paddingHorizontal:10, 
         width:"25%"
    },
    headerBarView:{
        backgroundColor:colors.grey5, 
        marginTop:20, 
        paddingHorizontal:15, 
        paddingVertical:5, 
        borderRadius:10
    },
    smallCard: {
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:120,
        margin:10,
        height:150,
    },
    smallCardSelected: {
        borderRadius:30,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:120,
        margin:10,
        height:150,
    }

})
