import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ImageBackground,Image } from 'react-native';
import { colors,parameters, title } from '../../Global/styles';
import Header from '../../Components/Header';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';


export default function WelcomeScreen({navigation}) {
    return(
        <ImageBackground source={require('../../Assets/image/back.png')} style={{flex:1}}  >
        <View style={{flex:1}}>
            
            <View style={{flex:3, justifyContent:"flex-start", alignItems:"center", paddingTop:20}}>
                    <Text style={{fontSize:26, color:"white", fontWeight:"bold"}}>KAN BAĞIŞÇISI OL</Text>
                    <Text style={{fontSize:26, color:"white", fontWeight:"bold"}}>UMUT OL</Text>
            </View>
            <View style={{flex:4, justifyContent:"center"}}>
                <Swiper 
                    autoplay={true}                    
                >
                    <View style={styles.slide1}>
                        <Image
                            source={{uri:"https://image.freepik.com/free-vector/world-blood-donor-day-with-blood-drop_1017-19253.jpg"}}
                            style={{height:"95%", width:"95%", borderRadius:10}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{uri:"https://image.freepik.com/free-vector/world-blood-donation-day-concept-poster-with-blood-drop_1017-25529.jpg"}}
                            style={{height:"95%", width:"95%", borderRadius:10,}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://image.freepik.com/free-vector/hands-saving-blood-drop_1017-19141.jpg"}}
                            style={{height:"95%", width:"95%", borderRadius:10,}}
                        />
                    </View>
                    <View style={styles.slide4}>
                        <Image
                            source={{uri:"https://image.freepik.com/free-vector/red-donor-day-concept-background_1017-19050.jpg"}}
                            style={{height:"95%", width:"95%", borderRadius:10,}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4, justifyContent:"flex-end"}}>
                <View style={{marginHorizontal:20, marginVertical:10}}>
                    <Button
                        title="Giriş Yap"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />                
                </View>
                <View style={{marginHorizontal:20, marginVertical:10, borderColor:"#dc2619", borderWidth:2, borderRadius:30}}>
                    <Button
                        title="Yeni bir hesap oluştur"
                        buttonStyle={parameters.createButton}
                        titleStyle={parameters.createButtonTitle}
                    />                
                </View>

            </View>
        </View>
        </ImageBackground>
        
    )
}


const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    slide4:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    
})