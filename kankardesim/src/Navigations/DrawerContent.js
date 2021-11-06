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
            </DrawerContentScrollView>
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

    }
})
