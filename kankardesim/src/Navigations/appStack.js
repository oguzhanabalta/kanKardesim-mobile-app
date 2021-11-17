import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import HospitalsMapScreen from "../Screens/HospitalsMapScreen";
import DrawerNavigator from "./DrawerNavigator";


const App = createStackNavigator()

export default function AppStack(){
    return(
        <App.Navigator>
            <App.Screen
                name="App"
                component= {DrawerNavigator}
                options= {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="HospitalsMapScreen"
                component= {HospitalsMapScreen}
                options= {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            </App.Navigator>
    )
}