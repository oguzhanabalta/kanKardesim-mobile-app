import React, {useState,useEffect} from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { Card, Header, Icon } from "react-native-elements";
import HomeHeader from "../Components/HomeHeader";
import { colors } from "../Global/styles";

export default function Feed({navigation}){

    const [ilanlar, setIlanlar] = useState([])

    const fetchIlanlar = async () => {
        const ilanlarCollection = await firestore().collection('ilanlar').get()
        console.log(ilanlarCollection.docs)
        setIlanlar(
            ilanlarCollection.docs.map((doc)=>{
                return {...doc.data(), id: doc.id}
            })
        )
    }

    const deleteIlan = async (id) => {
        const res=await firestore().collection('ilanlar').doc(id).delete()
        console.log(res)
        fetchIlanlar()
    }

    
    useEffect(()=>{
        fetchIlanlar()
        firestore().collection('ilanlar').where("type", "==", "ilan").onSnapshot(querySnapshot =>{
            querySnapshot.docChanges().forEach(change => {
                if(change.type =='added'){
                    console.log('New ilan:', change.doc.data())
                }
                if(change.type =='modified'){
                    console.log('Modified ilan:', change.doc.data())
                }
                if(change.type =='removed'){
                    console.log('Removed ilan:', change.doc.data())
                }
                fetchIlanlar
            })
        })

    }, []) 

    return(
        <ImageBackground source={require('../Assets/image/back.png')} style={{ flex: 1 }}>
         <View style={{flex:1}}>
            <HomeHeader title="Bağışlarım & İlanlarım" navigation={navigation}/>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ScrollView>
                    {
                        ilanlar.map(ilan =>{
                            return(
                                <Card key={ilan.id}>
                                    <Card.Title style={{fontSize:16, color:colors.buttons}}>{ilan.isim} - {ilan.kan_grubu}</Card.Title>
                                    <Card.Divider/>
                                    <Card.Title style={{fontSize:13, color:"black"}}>{ilan.hastane}/{ilan.ilce}/{ilan.sehir}</Card.Title>
                                    <Card.Title style={{fontSize:13, color:"black"}}>{ilan.aciklama} - {ilan.tel_no}</Card.Title>
                                    <Card.Divider/>
                                    <View style={{flexDirection:'row', justifyContent:"space-around"}}> 
                                        <Icon
                                            name="pencil"
                                            type="font-awesome"
                                            color={"black"}
                                            size={20}
                                            onPress={()=>{navigation.navigate('Update', {
                                                ilanToUpdate: ilan
                                            })}}
                                        />
                                        <Icon
                                            name="trash"
                                            type="font-awesome"
                                            color={colors.buttons}
                                            size={20}
                                            onPress={()=>{deleteIlan(ilan.id)}}
                                        />

                                    </View>
                                </Card>
                            )
                        })
                    }
                </ScrollView>

                
            </View> 
        </View>
        </ImageBackground>
        
        
    )
}