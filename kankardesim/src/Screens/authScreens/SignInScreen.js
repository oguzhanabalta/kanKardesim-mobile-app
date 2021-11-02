import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ImageBackground } from 'react-native';
import { colors,parameters, title } from '../../Global/styles';
import Header from '../../Components/Header';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';


export default function SignInScreen ({navigation}) {
    
    const[textInput2Fossued, setTextInput2Fossued]= useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    
    
    
    return(
        <View style= {styles.container}>
          <Header title="KAN KARDEŞİM" type="arrow-left" navigation={navigation}/>
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
                    placeholder="Email"
                    ref={textInput1}
                  />
              </View>
              <View style={styles.textInput2}>
                <Animatable.View>
                    <Icon
                        name="lock"
                        iconStyle={{color:colors.grey5}}
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
                        iconStyle={{color:colors.grey5}}
                        type="material"
                        style={{marginRight:15}}
                    />
                </Animatable.View>
              </View>
          </View>
          <View style={{marginHorizontal:20, marginVertical:10}}>
              <Button
                title="Giriş Yap"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={()=>{navigation.navigate('RootClientTabs')}}
              />
          </View>
          <View style={{alignItems:"center", marginTop:20}}>
              <Text style={{...styles.text2, textDecorationLine:"underline"}}>Şifremi Unuttum</Text>
          </View>
          <View style={{alignItems:"center", marginTop:20}}>
              <Text style={{fontSize:20, fontWeight:"bold"}}>VEYA</Text>
          </View>
          <View>
              <SocialIcon
                title="Facebook hesabın ile giriş yap"
                button
                type="facebook"
                onPress={()=>{}}
              />
          </View>
          <View>
              <SocialIcon
                title="Twitter hesabın ile giriş yap"
                button
                type="twitter"
                onPress={()=>{}}
              />
          </View>
          <View>
              <SocialIcon
                title="Google hesabın ile giriş yap"
                button
                type="google"
                onPress={()=>{}}
              />
          </View>
          <View style={{marginHorizontal:100}}>
              <Button
                title="Kayıt Ol"
                buttonStyle={parameters.styledButton}
                //titleStyle={parameters.buttonTitle}
              />
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
    text2:{
        color:colors.grey1,
        fontSize:16,
    },

    textInput1:{
        borderWidth:1,
        borderColor:colors.grey5,
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
    },
    textInput2:{
        borderWidth:1,
        borderColor:colors.grey5,
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