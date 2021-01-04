import React, { useState, useEffect } from 'react';
import {KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login(props) {
    
    const [display, setDisplay] = useState( 'none' );

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {[css.container, css.darkBg]}>
            <View style = {css.login_logo}>
                <Image style = {{width: 100, height: 125, alignSelf: 'center'}} source={require('../assets/vini.png')}></Image>        
            </View>
            <View>
                <Text style = {css.login_msg(display)}>Usúario ou senha inválidos!!</Text>
            </View>
            <View style = {css.login_form}>          
                <TextInput style = {css.input} placeholder = {'User'}></TextInput>      
                <TextInput style = {css.input} placeholder = {'Password'} secureTextEntry = {true}/>
                <TouchableOpacity style = {css.btn} onPress = { () => setDisplay( 'flex' )}>
                    <Text style = {css.btnText}>Sign In</Text>
                </TouchableOpacity>
                <StatusBar backgroundColor = '#00A859'/>
            </View>
        </KeyboardAvoidingView>
        
    );
} 