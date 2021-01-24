import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile({navigation}) {
    return (
        <View style = {css.area_menu}>
            <TouchableOpacity>
                <Icon style = {css.btn_home} name = 'home' size = {20} color = '#fff' onPress = {() => navigation.navigate('Home')}></Icon>
            </TouchableOpacity>
            <Text style = {css.area_title}>Esse é componente Profile</Text>
            <TouchableOpacity>
                <Icon style = {css.btn_logout} name = 'sign-out' size = {20} color = '#fff' onPress = {() => navigation.navigate('Home')}></Icon>
            </TouchableOpacity>
        </View>
    );
}