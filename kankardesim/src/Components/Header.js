import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from '../Global/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Header({title,type, navigation}){
    return(
        <View style = {styles.header}>
            <View>
                <Icon
                    type="material-community"
                    name={type}
                    color={colors.headerText}
                    size={30}
                    onPress={()=>{navigation.goBack()}}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View>

            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
        width:parameters.headerWidth,
        justifyContent:"space-between",
        alignItems:"center"
    },
    backButton:{
        marginLeft:5,
    },
    headerText: {
        color:colors.headerText,
        fontSize: 22,
        marginLeft: -5,
        fontWeight:"bold",
    },
})