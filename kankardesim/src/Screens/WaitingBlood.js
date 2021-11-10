import React from "react";
import { View, Text, ImageBackground, TouchableNativeFeedback, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HomeHeader from "../Components/HomeHeader";
import SearchComponent from "../Components/SearchComponent";
import { kanBekleyenData, kanGruplariData, ilcelerData } from "../Global/data";
import { colors } from "../Global/styles";
import WaitingBloodCard from "../Components/WaitingBloodCard";
import { isTemplateElement } from "@babel/types";


const SCREEN_WIDTH = Dimensions.get('window').width
const imageCard = { uri: "https://www.nawpic.com/media/2020/red-background-nawpic.png" }

export default function WaitingBlood({ navigation }) {

    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <View style={{}}>
                <SearchComponent />
                <View style={styles.listHeader}>
                    <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>Kan Grupları</Text>
                </View>
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={kanGruplariData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableNativeFeedback
                            onPress={() => {
                                navigation.navigate("SearchResultScreen", { item: item.name });
                            }}
                        >
                            <View style={styles.imageView}>

                                <View style={styles.card}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                                </View>
                            </View>

                        </TouchableNativeFeedback>
                    )}
                />
                <View style={styles.listHeader}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>İlçeler</Text>
                </View>
                <FlatList
                    style={{ marginTop: 10, marginBottom: 10 }}
                    horizontal={true}
                    data={ilcelerData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableNativeFeedback
                            onPress={() => {
                                navigation.navigate("SearchResultScreen", { item: item.name });
                            }}
                        >
                            <View style={styles.imageView}>

                                <View style={styles.card}>
                                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                                </View>
                            </View>

                        </TouchableNativeFeedback>
                    )}
                />
                
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginRight: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        marginTop: SCREEN_WIDTH * 0.035,
    },
    card: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginLeft: 12,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    listHeader: {
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        fontSize: 16,
        color: "white",
        padding:15,
        marginLeft:15,
        marginTop:10,
        marginRight:15,
        borderRadius:30,
        
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52,52,52,0.3)'
    }
})