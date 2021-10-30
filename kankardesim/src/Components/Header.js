import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from '../Global/styles';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function Header({title}){
    return(
        <View style = {styles.header}>
            <View  style= {styles.backButton}>
                <Icon
                    type="material-community"
                    name="arrow-left"
                    color={colors.headerText}
                    size={30}
                    onPress={()=>{}}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View>
                <Text></Text>
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