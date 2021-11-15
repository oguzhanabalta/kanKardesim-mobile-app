import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../Screens/authScreens/SignInScreen';
import WelcomeScreen from '../Screens/authScreens/WelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import HospitalsMapScreen from '../Screens/HospitalsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../Screens/authScreens/SignUpScreen';


const Auth = createStackNavigator();

export default function AuthStack () {
    return(
        <Auth.Navigator>
            <Auth.Screen
                name="WelcomeScreen"
                component= {WelcomeScreen}
                options= {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignInScreen"
                component= {SignInScreen}
                options= {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignUpScreen"
                component= {SignUpScreen}
                options= {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="DrawerNavigator"
                component= {DrawerNavigator}
                options= {{
                    
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="HospitalsMapScreen"
                component= {HospitalsMapScreen}
                options= {{
                    
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            

        </Auth.Navigator>
    )
}