import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import HomeHeader from "../Components/HomeHeader";
import { colors, parameters } from "../Global/styles";

export default function BloodFind({ navigation }) {
    const [ilan, setIlan] = useState({
        isim: '',
        kan_grubu: '',
        sehir: '',
        ilce: '',
        hastane: '',
        adres: '',
        tel_no: '',
    })
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
                            placeholder="Kan Grubu"
                        />
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View>
                        <TextInput
                            placeholder="Şehir"
                        />
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View>
                        <TextInput
                            placeholder="İlçe"
                        />
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View>
                        <TextInput
                            placeholder="Hastane"
                        />
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View>
                        <TextInput
                            placeholder="Telefon Numarası"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{marginBottom:10}}>
                        <Button
                            title="OLUŞTUR"
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}
                            />
                    </View>



            </View>

        </View>



    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: colors.buttons,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
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