import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login(props) {
    return (
        <View style = {css.container}>
            <Text style = {css.homeContent}>Esse é o compoente Login {props.route.params.id}</Text>
            <TouchableOpacity ti onPress = { () => props.navigation.navigate('Home')}>
            <Image
                source={require('../img/btn.png')}/>
                <Text>Voltar ao Inicio (Home)</Text>
            </TouchableOpacity>
        </View>
    );
}