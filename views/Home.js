import * as React from 'react';
import {Button, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from '../assets/css/Css';
        
export default function Home(props) {
    return (
        <View style = {css.view}>
            <Text style = {css.homeContent}>Esse é o compoente Login</Text>
            <TouchableOpacity ti onPress = { () => props.navigation.navigate('Login')}>
            <Text style = {{color: "#00A859", textAlign: 'center'}}>Fazer Login</Text>
            <Image style = {css.img}
                source={require('../img/btn.png')}/>
            </TouchableOpacity>
            <TouchableOpacity ti onPress = { () => props.navigation.navigate('Rastreio')}>
            <Text style = {{color: "#00A859", textAlign: 'center'}}>Rastrear Produto</Text>
            <Image style = {css.img}
                source={require('../img/btn-rastrear.png')}/>
            </TouchableOpacity>
        </View>
    );
}