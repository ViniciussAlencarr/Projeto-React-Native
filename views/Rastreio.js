import React from 'react';
import { View, Text, Button, StatusBar} from 'react-native';
import { css } from '../assets/css/Css';

export default function Rastreio() {
    return (
        <View style = {css.container}>
            <Text>Esse é o componente Rasteio!!</Text>
            <StatusBar backgroundColor = '#00A859'/>
        </View>
    );
}