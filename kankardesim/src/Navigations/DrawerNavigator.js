import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../Global/styles';

const Drawer= createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}

                options={{
                    headerShown:false,
                    title:'Hesabım',
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
        </Drawer.Navigator>
    )
}