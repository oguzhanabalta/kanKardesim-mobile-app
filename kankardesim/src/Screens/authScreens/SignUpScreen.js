import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground } from 'react-native'
import { colors, parameters } from '../../Global/styles'
import Header from '../../Components/Header'
import { Formik } from 'formik'
import SignInScreen from './SignInScreen'
import { Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'

const initialValues = { tel_no: '', ad: '', soyad: '', kanGrubu: '', password: '', email: '', username: '' }

export default function SignUpScreen({ navigation }) {

    const [passwordFocussed, setPasswordFocussed]=useState(false)
    const [passwordBlured,setPasswordBlured] = useState(false)
    return (

        <View style={styles.container}>
            <Header title="KAYIT OL" type="arrow-left" navigation={navigation} />
            <ScrollView
                keyboardShouldPersistTaps="always"
            >
                <View style={styles.view1}>
                    <Text style={styles.text1}>Kayıt Ol</Text>
                </View>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { SignInScreen(values) }}
                >
                    {(props) => (
                        <View style={styles.view2}>
                            <View>
                                <Text style={styles.text2}>KanKardeşim'de yeni bir hesap oluştur.</Text>
                            </View>
                            <View style={styles.view6}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="Telefon Numarası"
                                    keyboardType="number-pad"
                                    autoFocus={true}
                                    onChangeText={props.handleChange('tel_no')}
                                    value={props.values.tel_no}
                                />
                            </View>
                            <View style={styles.view6}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="Ad"
                                    autoFocus={false}
                                    onChangeText={props.handleChange('ad')}
                                    value={props.values.ad}
                                />
                            </View>
                            <View style={styles.view6}>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="Soyad"
                                    autoFocus={false}
                                    onChangeText={props.handleChange('soyad')}
                                    value={props.values.soyad}
                                />
                            </View>
                            <View style={styles.view10}>
                                <View>
                                    <Icon
                                        name="email"
                                        style={styles.email}
                                        color={colors.grey3}
                                        type="material"
                                    />
                                </View>
                                <View style={styles.view11}>
                                    <TextInput
                                        style={styles.input1}
                                        placeholder="Email"
                                        autoFocus={false}
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                    />
                                </View>
                            </View>
                            <View style={styles.view14}>
                                <Animatable.View animation={passwordFocussed?"fadeInRight":"fadeInLeft" } duration={400}>
                                    <Icon
                                        name="lock"
                                        color={colors.grey3}
                                        type="material"
                                    />
                                </Animatable.View>
                                <TextInput
                                    style={styles.input4}
                                    placeholder="Şifre"
                                    autoFocus={false}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    onFocus={()=>{setPasswordFocussed(true)}}
                                    onBlur={()=>{setPasswordBlured(true)}}
                                />
                                <Animatable.View animation={passwordBlured?"fadeInLeft":"fadeInRight" } duration={400}>
                                    <Icon
                                        name="visibility-off"
                                        color={colors.grey3}
                                        type="material"
                                        style={{marginRight:10}}
                                    />
                                </Animatable.View>
                            </View>
                            <View style={styles.view15}>
                                <View style={styles.view16}>
                                    <Text style={styles.text3}></Text>
                                    <Text style={styles.text4}>Şartlar & Koşullar</Text>
                                    <Text style={styles.text3}> ve </Text>
                                <Text style={styles.text4}>Gizlilik Sözleşmesi</Text>
                                </View>
                                
                            </View>
                            <View style={styles.view17}>
                                <Button 
                                    title="Hesabımı oluştur"
                                    buttonStyle={styles.button1}
                                    titleStyle={styles.title1}
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
                <View style={styles.view18}>
                    <Text style={styles.text5}>VEYA</Text>
                </View>
                <View style={styles.view19}>
                    <View style={styles.view20}>
                        <Text style={styles.text6}>Eğer KanKardeşim'de bir hesabınız varsa..</Text>
                    </View>
                    <View style={styles.view21}>
                        <Button
                            title="Giriş Yap"
                            buttonStyle={styles.button2}
                            titleStyle={styles.title2}
                            onPress={()=>{navigation.navigate('SignInScreen')}}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    view1: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15
    },
    text1: {
        fontSize: 22,
        color: colors.buttons,
        fontWeight: "bold",
    },
    view2: {
        justifyContent: "flex-start",
        backgroundColor: "white",
        paddingHorizontal: 15
    },
    view3: {
        marginTop: 5,
        marginBottom: 10
    },
    text2: {
        fontSize: 15,
        color: colors.grey2
    },
    view4: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 12,
        paddingLeft: 5
    },
    view5: {
        marginLeft: 30,
        maxWidth: "65%"
    },
    input1: {
        fontSize: 16,
    },
    view6: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 12,
        paddingLeft: 5,
        marginTop: 20,
        height: 48
    },
    view7: {
        marginLeft: 0,
        maxWidth: "65%",
    },
    input2: {
        fontSize: 16,
        marginLeft: 0,
        marginBottom: 0,
    },
    view8: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 12,
        paddingLeft: 5,
        marginTop: 20,
        height: 48
    },
    view9: {
        marginLeft: 0,
        maxWidth: "65%"
    },
    input3: {
        fontSize: 16,
        marginLeft: 0,
        marginBottom: 0,
    },
    view10: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.grey4,
        borderRadius: 12,
        paddingLeft: 5,
        marginTop: 20,
        height: 48,
    },
    email: {
        fontSize: 24,
        padding: 0,
        marginBottom: 0,
        marginTop: 11,
        marginLeft: 2,
    },
    view11: {
        marginLeft: 15,
        maxWidth: "65%"
    },
    input4: {
        fontSize: 16,
        flex:1,marginLeft:15
    },
    view13: {
        flexDirection: "row",
        height: 40
    },
    view14: {

        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: colors.grey4,
        justifyContent:"space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 5,
        marginTop: 20,
    },
    view15: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    text3: {
        fontSize: 13,
    },
    view16: {
        flexDirection: "row"
    },
    text4: {
        textDecorationLine: "underline",
        color: "green",
        fontSize: 13,
    },
    button1: {
        backgroundColor: colors.buttons,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 50,
        paddingHorizontal: 20,
        width: "100%"
    },
    title1: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    },
    view17: {
        marginVertical: 10,
        marginTop: 30
    },
    view18: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 15,
    },
    text5: {
        fontSize: 15,
        fontWeight: "bold"
    },
    view19: {
        backgroundColor: "white",
        paddingHorizontal: 15,
    },
    view20: {
        marginTop: 5,
    },
    view21: {
        marginTop: 5,
        alignItems: "flex-end",
    },
    button2: {
        backgroundColor: colors.buttons,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 40,
        paddingHorizontal: 20,

    },
    title2: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})
