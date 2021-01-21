import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile, Cadastro, Edicao} from './Index';

import { css } from '../assets/css/Css';

export default function AreaRestrita() {
    const Tab = createMaterialBottomTabNavigator();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    }, [])

    return (
        /*<Tab.Navigator>
            <Tab.Screen name="Prifile" component={Profile} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Edicao" component={Edicao} />
        </Tab.Navigator>*/
        <View><Text>asd</Text></View>
    );
}