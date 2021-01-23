import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar, AsyncStorage} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Tab.Navigator activeColor = '#999'
        inactiveColor = '#fff'
        barStyle = {css.area_Tab}>
            <Tab.Screen
            name = "Profile"
            component = {Profile}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "users" size = {20} color = "#999"/>
                )
            }}/>
            <Tab.Screen name="Cadastro" component={Cadastro}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "archive" size = {20} color = "#999"/>
                )
            }}/>
            <Tab.Screen name="Edição" component={Edicao}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "edit" size = {20} color = "#999"/>
                )
            }}/>
        </Tab.Navigator>
    );
}