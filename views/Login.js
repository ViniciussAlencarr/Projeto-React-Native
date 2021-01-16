import React, { useState, useEffect } from 'react'; 
import {KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Platform, StatusBar, Alert, AsyncStorage} from 'react-native';
import { css } from '../assets/css/Css';


export default function Login(props) {
    
    const [display, setDisplay] = useState( 'none' );
    const [user, setUser] = useState( null );
    const [password, setPassword] = useState( null );
    const [login, setLogin] = useState( null );

    async function sendForm() {
        let response = await fetch('http://192.168.0.9:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json = await response.json();
        if (json === '[error]!!') {
            setDisplay('flex');
            setTimeout( () => {
                setDisplay('none');
            }, 5000);   
            await AsyncStorage.clear();
        } else {
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
            //props.navigation.navigate('AreaRestrita');
            let resData = await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData)); 
        }
    };
    
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style = {[css.container, css.darkBg]}>
            <TouchableOpacity>
            </TouchableOpacity>
            <View style = {css.login_logo}>
                <Image style = {{width: 100, height: 125, alignSelf: 'center'}} source={require('../assets/vini.png')}></Image>
            </View>
            <View>
                <Text style = {css.login_msg(display)}>Usúario ou senha inválidos!!</Text>
            </View>
            <View style = {css.login_form}>          
                <TextInput style = {css.input} placeholder = {'User'} onChangeText = {text => setUser(text)} ></TextInput>      
                <TextInput style = {css.input} placeholder = {'Password'} onChangeText = {text => setPassword(text)} secureTextEntry = {true}/>
                <TouchableOpacity style = {css.btn} onPress = { () => sendForm()}>
                    <Text style = {css.btnText}>Sign In</Text>
                </TouchableOpacity>
                <StatusBar backgroundColor = '#00A859'/>
            </View>
        </KeyboardAvoidingView>
        
    );
} 