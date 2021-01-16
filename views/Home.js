import * as React from 'react';
import {KeyboardAvoidingView, Button, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from '../assets/css/Css';
        
export default function Home(props) {
    return (
        <KeyboardAvoidingView>
            <Text style = {{color: "#00A859", textAlign: 'center', fontSize: 22, marginTop: 20, marginBottom: 0}}>Fazer Login</Text>
            <View style = {css.viewContainer}>
                <TouchableOpacity ti onPress = { () => props.navigation.navigate('Login')}>
                    
                    <Image style = {[css.img, css.img_Login]}
                        source={require('../img/btn.png')}/>
                </TouchableOpacity>
            </View>
            <Text style = {{color: "#00A859", textAlign: 'center', fontSize: 22, paddingRight: 85, marginTop: 20, marginBottom: 0}}>                    <Text style = {{color: "#00A859", textAlign: 'center'}}>Rastrear Produto</Text>
</Text>
            <View style = {css.viewContainer}>
                <TouchableOpacity ti onPress = { () => props.navigation.navigate('Rastreio')}>
                    <Image style = {[css.img, css.img_Rastreio]}
                        source={require('../img/btn-rastrear.png')}/>
                </TouchableOpacity>
                <StatusBar backgroundColor = '#00A859'/>
            </View>
            <View>
                <TouchableOpacity onPress = { () => props.navigation.navigate('AreaRestrita')}>
                    <Text>Area</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}