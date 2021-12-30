import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import HomeHeader from "../Components/HomeHeader";
import { colors, parameters } from "../Global/styles";
import firestore from "@react-native-firebase/firestore";

export default function UpdateIlanScreen({ navigation, route }) {
    const {ilanToUpdate}=route.params
    const ilanId= ilanToUpdate.id
    const [ilan, setIlan] = useState({
        isim: ilanToUpdate.isim,
        kan_grubu: ilanToUpdate.kan_grubu,
        sehir: ilanToUpdate.sehir,
        ilce: ilanToUpdate.ilce,
        hastane: ilanToUpdate.hastane,
        tel_no: ilanToUpdate.tel_no,
        aciklama:ilanToUpdate.aciklama,
        type: 'ilan'
    })

    const resetForm = () => {
        setIlan({
            isim: '',
            kan_grubu: '',
            sehir: '',
            ilce: '',
            hastane: '',
            tel_no: '',
            aciklama: '',
        })
    } 
    const ilanGuncelle = async (ilan) => {
        try{
            await firestore().collection('ilanlar').doc(ilanId).update(ilan)
            console.log(ilan)
            resetForm()
            navigation.navigate('Feed')
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <View style={{ flex: 1 }}>
            <HomeHeader title="İlanı Güncelle" navigation={navigation} />
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
                            onPress={()=>{ilanGuncelle(ilan)}}
                            title="Güncelle"
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