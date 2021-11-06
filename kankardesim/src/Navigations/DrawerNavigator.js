import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../Global/styles';
import BloodFind from '../Screens/BloodFindScreen';
import DrawerContent from './DrawerContent';

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
                            name="charity"
                            color={focussed ? "#7cc" : colors.grey2 }
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}