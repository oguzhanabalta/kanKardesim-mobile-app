import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { colors,parameters } from "../Global/styles";
import HomeScreen from "../Screens/HomeScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";
import BloodFindScreen from "../Screens/BloodFindScreen";
import WaitingBlood from "../Screens/WaitingBlood";
import ClientStack from "./ClientStack";

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
                name="ClientStack"
                component= {ClientStack}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Kan Ver",
                        tabBarIcon : ({color,size}) => (
                            <Icon
                                name='charity'
                                type='material-community'
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
                                type="material-community"
                                name="card-search"
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