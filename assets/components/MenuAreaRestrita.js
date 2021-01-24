import React from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import {css} from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuAreaRestrita(props) {

    async function limparDados() {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return (
        <View style = {css.area_menu}>
            <TouchableOpacity>
                <Icon style = {css.btn_home} name = 'home' size = {20} color = '#fff' onPress = {() => props.navigation.navigate('Home')}></Icon>
            </TouchableOpacity>
            <Text style = {css.area_title}>{props.title}</Text>
            <TouchableOpacity onPress = {() => limparDados()}>
                <Icon style = {css.btn_logout} name = 'sign-out' size = {20} color = '#fff'></Icon>
            </TouchableOpacity>
        </View>
    );
}