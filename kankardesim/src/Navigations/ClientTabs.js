import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { colors,parameters } from "../Global/styles";
import HomeScreen from "../Screens/HomeScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";
import MyDonationScreen from "../Screens/MyDonationScreen";
import BloodFindScreen from "../Screens/BloodFindScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
            screenOptions = {{
                tabBarActiveTintColor:colors.buttons
                
            }}
        
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component= {HomeScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Anasayfa",
                        tabBarIcon : ({color,size}) => (
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size} 
                            
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="BloodFindScreen"
                component= {BloodFindScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Kan Bul",
                        tabBarIcon : ({color,size}) => (
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size} 
                            
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="MyDonationScreen"
                component= {MyDonationScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Bağışlarım",
                        tabBarIcon : ({color,size}) => (
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size} 
                            
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name="MyAccountScreen"
                component= {MyAccountScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Profilim",
                        tabBarIcon : ({color,size}) => (
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size} 
                            
                            />
                        )
                    }
                }
            />
           
        </ClientTabs.Navigator>
    )
}