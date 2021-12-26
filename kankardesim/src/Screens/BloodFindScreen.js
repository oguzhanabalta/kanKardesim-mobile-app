import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import HomeHeader from "../Components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import firestore from "@react-native-firebase/firestore";

export default function BloodFind({ navigation }) {
    const [ilan, setIlan] = useState({
        isim: '',
        kan_grubu: '',
        sehir: '',
        ilce: '',
        hastane: '',
        tel_no: '',
        aciklama:'',
    })

    const ilanOlustur = async (ilan) => {
        try{
            await firestore().collection('ilanlar').add(ilan)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <View style={{ flex: 1 }}>
            <HomeHeader title="Kan Bul" navigation={navigation} />
            <View style={styles.kanilani}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>KAN İLANI</Text>
                    <Text style={{ color: "white", fontSize: 11 }}>* Bilgileri eksiksiz doldurmaya dikkat edin.</Text>
                    <Text style={{ color: "white", fontSize: 11 }}>* Telefonunuzun ulaşılabilir olmasına özen gösterin.</Text>
                </View>

            </View>
            <ScrollView>
                <View style={{ marginTop: 10 }} >
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.isim}
                                onChangeText={(isim) => { setIlan({ ...ilan, isim: isim }) }}
                                placeholder="İsim"
                                LeftIcon={{ type: 'font-awesome', name: 'header' }}
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.kan_grubu}
                                onChangeText={(kan_grubu) => { setIlan({ ...ilan, kan_grubu: kan_grubu }) }}
                                placeholder="Kan Grubu"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.sehir}
                                onChangeText={(sehir) => { setIlan({ ...ilan, sehir: sehir }) }}
                                placeholder="Şehir"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.ilce}
                                onChangeText={(ilce) => { setIlan({ ...ilan, ilce: ilce }) }}
                                placeholder="İlçe"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.hastane}
                                onChangeText={(hastane) => { setIlan({ ...ilan, hastane: hastane }) }}
                                placeholder="Hastane"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.tel_no}
                                onChangeText={(tel_no) => { setIlan({ ...ilan, tel_no: tel_no }) }}
                                placeholder="Telefon Numarası"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <View>
                            <TextInput
                                value={ilan.aciklama}
                                onChangeText={(aciklama) => { setIlan({ ...ilan, aciklama: aciklama  }) }}
                                multiline
                                numberOfLines={4}
                                placeholder="Açıklama"
                            />
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Button
                            onPress={()=>{ilanOlustur(ilan)}}
                            title="OLUŞTUR"
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>



    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: colors.buttons,
        marginHorizontal: 10,
        borderRadius: 12,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    },
    kanilani: {
        backgroundColor: colors.buttons,
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        margin: 20,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "black"
    }
})