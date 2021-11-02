import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, parameters } from '../Global/styles';
import { Icon, withBadge, Badge } from 'react-native-elements';

export default function HomeHeader({title}){
const BadgeIcon=withBadge(1)(Icon)
    return(
        <View style = {styles.header}>
            <View style={{marginLeft:15}}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.headerText}
                    size={30}
                />
            </View>
            <View style={{alignItems:"center",justifyContent:"center", marginLeft:10}}>
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.headerText2}>#kanVerHayatVer</Text>
                </View>
                
            </View>
            <View style={{marginRight:15, flexDirection:"row",}}>
                <View>
                    <Icon
                            type="material"
                            name="person"
                            color={colors.headerText}
                            size={30}
                    />
                    
                </View>
                <View style={{marginRight:5}}>
                    <BadgeIcon
                            type="Ionicons"
                            name="notifications"
                            color={colors.headerText}
                            size={30}
                    />
                </View>
                
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
        alignItems:"center",
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
    headerText2: {
        color:colors.headerText,
        fontSize: 15,
        marginLeft: -5,
        fontWeight:"bold",
    },
})