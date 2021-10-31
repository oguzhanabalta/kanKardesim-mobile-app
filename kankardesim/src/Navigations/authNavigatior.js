import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInScreen from '../Screens/authScreens/SignInScreen';
import WelcomeScreen from '../Screens/authScreens/WelcomeScreen';

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
        </Auth.Navigator>
    )
}