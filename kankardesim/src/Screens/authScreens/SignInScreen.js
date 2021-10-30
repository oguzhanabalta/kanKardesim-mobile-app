import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { colors,parameters, title } from '../../Global/styles';
import Header from '../../Components/Header';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


export default function SignInScreen () {
    
    const[textInput2Fossued, setTextInput2Fossued]= useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    
    
    
    return(
        <View style= {styles.container}>
          <Header title="KAN KARDEŞİM" type="arrow-left"/>
          <View style={{marginLeft:20, marginTop:10}}>
              <Text style={title}>Giriş Yap</Text>
          </View>
          <View style={{alignItems:"center",marginTop:10}}>
              <Text style={styles.text1}>Lütfen hesabınıza kayıtlı</Text>
              <Text style={styles.text1}> email ve şifreyi girin.</Text>
          </View>
          <View style={{marginTop:20}}>
              <View>
                  <TextInput
                    style={styles.textInput1}
                    placeholder="Telefon Numarası"
                    ref={textInput1}
                  />
              </View>
              <View style={styles.textInput2}>
                <Animatable.View>
                    <Icon
                        name="lock"
                        iconStyle={{color:colors.grey3}}
                        type="material"
                    />
                </Animatable.View>
                    <TextInput
                        style={{width:"80%"}}
                        placeholder="Password"
                        ref={textInput2}
                        onFocus={()=>{
                            setTextInput2Fossued(false)
                        }}
                        onBlur={()=>{
                            setTextInput2Fossued(true)
                        }}
                    />
                <Animatable.View animation = {textInput2Fossued ? "" : "fadeInLeft"} duration={400}>
                    <Icon
                        name="visibility-off"
                        iconStyle={{color:colors.grey3}}
                        type="material"
                        style={{marginRight:15}}
                    />
                </Animatable.View>
              </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16,
    },

    textInput1:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
    },
    textInput2:{
        borderWidth:1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:15,
    },

})