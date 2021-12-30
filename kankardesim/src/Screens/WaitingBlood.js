import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Linking, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, Icon, } from "react-native-elements";
import SearchComponent from "../Components/SearchComponent";
import { colors } from "../Global/styles";

import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
const SCREEN_WIDTH = Dimensions.get('window').width

export default function WaitingBlood({ navigation }) {

    const [ilanlar, setIlanlar] = useState([])

    const fetchIlanlar = async () => {
        const ilanlarCollection = await firestore().collection('ilanlar').get()
        console.log(ilanlarCollection.docs)
        setIlanlar(
            ilanlarCollection.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
        )
    }

    const deleteIlan = async (id) => {
        const res = await firestore().collection('ilanlar').doc(id).delete()
        console.log(res)
        fetchIlanlar()
    }


    useEffect(() => {
        fetchIlanlar()
        firestore().collection('ilanlar').where("type", "==", "ilan").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    console.log('New ilan:', change.doc.data())
                }
                if (change.type == 'modified') {
                    console.log('Modified ilan:', change.doc.data())
                }
                if (change.type == 'removed') {
                    console.log('Removed ilan:', change.doc.data())
                }
                fetchIlanlar
            })
        })

    }, [])



    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <View style={{}}>
                <SearchComponent />
                <ScrollView>
                    {
                        ilanlar.map(ilan => {
                            return (
                                <Card key={ilan.id}>
                                    <Card.Title style={{ fontSize: 16, color: colors.buttons }}>{ilan.isim} - {ilan.kan_grubu}</Card.Title>
                                    <Card.Divider />
                                    <Card.Title style={{ fontSize: 13, color: "black" }}>{ilan.hastane}/{ilan.ilce}/{ilan.sehir}</Card.Title>
                                    <Card.Title style={{ fontSize: 13, color: "black" }}>{ilan.aciklama} - {ilan.tel_no}</Card.Title>
                                    <Card.Divider />
                                    <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                                        <Icon
                                            name="call"
                                            type="Ionicons"
                                            color={"black"}
                                            size={20}
                                            onPress={()=>{
                                                let phoneNumber=ilan.tel_no;
                                                console.log(phoneNumber);
                                                Linking.openURL(`tel:${phoneNumber}`);
                                            }}

                                        />




                                    </View>
                                </Card>
                            )
                        })
                    }
                </ScrollView>


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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        fontSize: 16,
        color: "white",
        padding: 15,
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
        borderRadius: 30,

    },
    textView: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52,52,52,0.3)'
    }
})