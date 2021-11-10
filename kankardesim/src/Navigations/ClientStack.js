import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SearchResultScreen from '../Screens/SearchResultScreen';
import WaitingBlood from '../Screens/WaitingBlood';

const ClientSearch = createStackNavigator();

export default function ClientStack() {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="WaitingBlood"
                component={WaitingBlood}
                options={()=>({
                    headerShown:false
                })}
            />
            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={()=>({
                    headerShown:false
                })}
            />
        </ClientSearch.Navigator>
    )
}
