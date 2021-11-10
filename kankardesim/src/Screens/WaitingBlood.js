import React from "react";
import { View, Text, ImageBackground, TouchableNativeFeedback, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HomeHeader from "../Components/HomeHeader";
import SearchComponent from "../Components/SearchComponent";
import { kanBekleyenData, kanGruplariData } from "../Global/data";
import { colors } from "../Global/styles";
import WaitingBloodCard from "../Components/WaitingBloodCard";
import { isTemplateElement } from "@babel/types";


const SCREEN_WIDTH = Dimensions.get('window').width

export default function WaitingBlood({ navigation }) {
    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <View style={{}}>
                <SearchComponent />
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
                                    <Text>{item.name}</Text>
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
        marginBottom: SCREEN_WIDTH * 0.035
    },
    card: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
        borderRadius: 10,
        backgroundColor: "white",
        marginLeft: 12,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    listHeader: {
        fontSize: 16,
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 12,
    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52,52,52,0.3)'
    }
})