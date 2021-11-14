import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { colors } from '../Global/styles'
import { Icon } from 'react-native-elements'
import { kanBekleyenData, kanGruplariData, ilcelerData } from '../Global/data'


export default function SearchResultCard({
    OnPressHospitalCard,
    hospitalImages,
    hospitalName,
    address,
    city,
    district,
    distance,
    baslik,
    kanGrubu,
    telNo,
    tarih,
    screenWidth,
}) {
    return (
        <View>
            <View style={styles.view1}>
                <View style={{height:150, width:300}}>
                    <ImageBackground
                        style={{height:160}}
                        source={{uri:hospitalImages}}
                        imageStyle={styles.imageStyle}
                    />
                    <View style={styles.imageStyle}>
                        <Text>{kanGrubu}</Text>
                        <Text>{tarih}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{
        position:"absolute",
        top:0,
        left:20,
        right:0,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    imageStyle:{
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    text1:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3
    },
    text2:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    },
    view2:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:-5
    },
    text3:{
        fontSize:10,
        fontWeight:"bold",
        color:colors.grey3,
    },
    text4:{
        fontSize:10,
        fontWeight:"bold",
        color:colors.grey2
    },
    view3:{
        flexDirection:"column",
        marginHorizontal:5,
        marginBottom:10,
        marginLeft:0,
    },
    text5:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1
    },
    view4:{
        flex:4,
        flexDirection:"row",
        borderRightWidth:1,
        borderRightColor:colors.grey4,
        paddingHorizontal:5
    },
    view5:{
        fontSize:12,
        fontWeight:"bold",
        paddingTop:5,
        color:colors.grey3
    },
    text6:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,
    }

})
