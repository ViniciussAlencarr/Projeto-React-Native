import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar, BackHandler, Alert, AsyncStorage} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Profile, Cadastro, Edicao} from './Index';

import { css } from '../assets/css/Css';

export default function AreaRestrita({navigation}) {
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
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => {
                navigation.navigate('Home');
                BackHandler.exitApp();
            }
        }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    return (
        <Tab.Navigator activeColor = '#fff'
        inactiveColor = '#fff'
        barStyle = {css.area_Tab}>
            <Tab.Screen
            name = "Profile"
            component = {Profile}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "users" size = {20} color = "#fff"/>
                )
            }}/>
            <Tab.Screen name="Cadastro" component={Cadastro}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "archive" size = {20} color = "#fff"/>
                )
            }}/>
            <Tab.Screen name="Edição" component={Edicao}
            options = {{
                tabBarIcon:() => (
                    <Icon name = "edit" size = {20} color = "#fff"/>
                )
            }}/>
        </Tab.Navigator>
    );
}