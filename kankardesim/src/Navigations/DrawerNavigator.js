import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../Global/styles';
import BloodFind from '../Screens/BloodFindScreen';
import DrawerContent from './DrawerContent';
import WaitingBlood from '../Screens/WaitingBlood';
import SettingsScreen from '../Screens/SettingsScreen';
import HelpScreen from '../Screens/HelpScreen';

const Drawer= createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
            drawerContent = {props =><DrawerContent {...props}/> }
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}

                options={{
                    headerShown:false,
                    title:'Anasayfa',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="BloodFindScreen"
                component={BloodFind}

                options={{
                    headerShown:false,
                    title:'Kan Bul',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="card-search"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="WaitingBlood"
                component={WaitingBlood}
                
                options={{
                    headerShown:false,
                    title:'Kan Ver',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="charity"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                
                options={{
                    headerShown:false,
                    title:'Ayarlar',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="account-cog"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="HelpScreen"
                component={HelpScreen}
                
                options={{
                    headerShown:false,
                    title:'Yardım',
                    drawerIcon: ({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="account-question"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}