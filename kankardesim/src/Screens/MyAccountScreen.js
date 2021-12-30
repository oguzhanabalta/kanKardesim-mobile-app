import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import {
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import { Avatar, Icon, Button } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { colors } from "../Global/styles";

export default function MyAccountScreen({ navigation }) {

    return (
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
            <HomeHeader title="Profil" navigation={navigation} />
            <SafeAreaView style={styles.container}>

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={{ uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" }}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>Oğuzhan Balta</Title>
                            <Caption style={styles.caption}>0RH(+)</Caption>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.row}>
                            <Icon
                                name="place"
                                type="material"
                                color="black"
                                size={20}
                            />
                            <Text style={{ color: "black", marginLeft: 20, fontWeight: "bold" }}>Keçiören, Ankara</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="phone" color="black" size={20} />
                            <Text style={{ color: "black", marginLeft: 20, fontWeight: "bold" }}>+90 - 5423328567</Text>
                        </View>
                        <View style={styles.row}>
                            <Icon name="email" color="black" size={20} />
                            <Text style={{ color: "black", marginLeft: 20, fontWeight: "bold" }}>oguzhanbalta@gmail.com</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userDonation}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>1</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>YAPILAN BAĞIŞ</Text>
                        </View>
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userDonation}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>1</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>ALINAN BAĞIŞ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon
                                type="material-community"
                                name="format-list-bulleted-square"
                                size={25}
                                onPress={()=>{navigation.navigate('MyDonationScreen')}}
                            />
                            <Text style={styles.menuItemText}>İlanlarım</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon
                                type="material-community"
                                name="account-question"
                                size={25}
                            />
                            <Text style={styles.menuItemText}>Destek</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon
                                type="material-community"
                                name="account-cog"
                                size={25}
                            />
                            <Text style={styles.menuItemText}>Ayarlar</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </SafeAreaView>
        </ImageBackground>


    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.grey5,

    },
    userInfoSection: {
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 3,
        paddingVertical: 15,
        backgroundColor: "white",
        paddingHorizontal: 30,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 25,
    },
    userDonation: {
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: colors.buttons,
        borderRadius: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 'bold',
        color: colors.buttons,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 5,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: colors.buttons,
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    menuItemText: {
        color: 'white',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});