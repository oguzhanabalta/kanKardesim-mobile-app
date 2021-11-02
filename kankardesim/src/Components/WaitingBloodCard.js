import React from "react";
import { Text, View, TouchableOpacity,Image, StyleSheet,Dimensions} from "react-native";

import { Icon } from "react-native-elements";
import { colors,parameters } from "../Global/styles";
import { kanBekleyenData } from "../Global/data";


export default function WaitingBloodCard({
    OnPressWaitingBloodCard,
    hospitalName,
    address,
    city,
    district,
    distance,
    hospitalImages,
    baslik,
    kanGrubu,
    telNo,
    tarih,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...styles.cardView, width:screenWidth}}>
                <Image
                    style={{...styles.image, width:screenWidth}}
                    source={{uri:hospitalImages}}
                />
            </View>
            <View>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text style={styles.hospitalNameText}>{baslik}</Text>
                </View>
                <View style={{flex:1, flexDirection:"row"}}>
                    <View style={styles.distanceIcon}>
                        <Icon
                            name="place"
                            type="material"
                            color= {colors.grey2}
                            size={18}
                            iconStyle={{
                                marginTop:3
                            }}
                        />
                        <Text style={styles.distanceText}>{distance} km</Text>
                    </View>
                    <View style={{flex:9, flexDirection:"row"}}>
                        <Text style={styles.addressText}>{address}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.kanGrubuReview}>
                <Text style={styles.kanGrubuText}>{kanGrubu}</Text>
                <Text style={styles.tarihText}>{tarih}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    cardView: {
        marginTop:10,
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    image:{
        borderRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    hospitalNameText:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
    },
    distanceIcon:{
         flex:4,
         flexDirection:"row",
         borderRightColor: colors.grey4,
         paddingHorizontal:5,
         borderRightWidth:1,
    },
    distanceText:{
        fontSize:12,
        fontWeight:"bold",
        paddingTop:5,
        color:colors.grey3,
    },
    addressText:{
        fontSize:9,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },
    kanGrubuReview:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(151,16,16,0.6)',
        padding:2, 
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
    },
    kanGrubuText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3,
    },
    tarihText:{
        color:"white",
        fontSize:10,
        marginTop:-3,
    }
    
})