import * as React from 'react';
import {Button, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from '../assets/css/Css';
        
export default function Home(props) {
    return (
        <View style = {css.view}>
            <Text style = {css.homeContent}>Esse é o componente Home!!</Text>
            <Button style = {css.btn} color = '#00A859' title = {'Fazer Login'} onPress = {() => props.navigation.navigate('Login', {id: 30})}/>
        </View>
    );
}