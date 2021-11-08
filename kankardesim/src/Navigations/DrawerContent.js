import React, { useState, useContext, useEffect } from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet } from "react-native";
import { colors } from "../Global/styles";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon, Button } from "react-native-elements";

export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons, }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 10, paddingVertical: 15 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={{ uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" }}
                        />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>Oğuzhan B.</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>oguzhanbalta99@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row",marginBottom:10, justifyContent:"space-evenly"}}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }} >1</Text>
                                <Text style={{ fontWeight: "bold", color: "white", fontSize: 14 }} >Kan İlanlarım</Text>
                            </View>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }} >1</Text>
                                <Text style={{ fontWeight: "bold", color: "white", fontSize: 14 }} >Bağışlarım</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <DrawerItemList {...props} />
                <View style={{borderWidth:1,borderTopColor:colors.grey3,borderBottomColor:colors.grey3, borderRightColor:"white", borderLeftColor:"white"}}>
                    <Text style={styles.secenekler}>Seçenekler</Text>
                </View>
                    <View style={styles.swtichText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor={{false:"#767572", true:"#dc2619"}}
                                thumbColor="f4f3f4"
                            />
                        </View>
                    </View>
                    <View style={styles.swtichText}>
                        <Text style={styles.darkThemeText}>Bildirimler</Text>
                        <View style={{paddingRight:10}}>
                            <Switch 
                                trackColor={{false:"#767572", true:"#dc2619"}}
                                thumbColor="f4f3f4"
                            />
                        </View>
                    </View>
                   
                
            </DrawerContentScrollView>
            <DrawerItem
                        label="Çıkış Yap"
                        icon={({color,size})=>(
                            <Icon
                                type="material-community"
                                name="logout"
                                color={color}
                                size={size}
                            />
                        )}
                    
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.grey5,

    },
    secenekler:{
        fontSize:15,
        color:colors.grey2,
        paddingTop:10, 
        paddingLeft:20,
        paddingBottom:10
    },
    swtichText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10,
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }
})
