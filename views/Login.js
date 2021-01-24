import React, { useState, useEffect } from 'react'; 
import {KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Platform, StatusBar, Alert, AsyncStorage} from 'react-native';
import { css } from '../assets/css/Css';
import * as LocalAuthentication from 'expo-local-authentication';
import config from '../config/config.json';


export default function Login({navigation}) {
    
    const [display, setDisplay] = useState( 'none' );
    const [user, setUser] = useState( null );
    const [password, setPassword] = useState( null );
    const [login, setLogin] = useState( false );

    useEffect( () => {
        verifyLogin();
    }, []);  

    useEffect( () => {
        if (login === true) {
            biometric();
        }
    }, [login])

    async function verifyLogin() {
        let response = await AsyncStorage.getItem('userData');
        let json = await JSON.parse(response);
        if (json != null) {
            setUser(json.name);
            setPassword(json.password);
            setLogin(true);
        }

    };
    async function biometric() {
        let compatible = await LocalAuthentication.hasHardwareAsync();//verificando se o dispositivo é compativel com biometria
        if (compatible) { //verifica se há biometricas guardadas dentro do dispositivo
            let biometricRecords = await LocalAuthentication.isEnrolledAsync();
            if (!biometricRecords) {
                alert('Biometria não cadastrada!');
            } else {
                let result = await LocalAuthentication.authenticateAsync();
                if (result.success) {
                    sendForm();
                } else {
                    setUser(null);
                    setPassword(null);
                }
            }
        }
    }
    async function sendForm() {
        let response = await fetch(`${config.urlRoot}login`, {
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
            navigation.navigate('AreaRestrita');
            await AsyncStorage.clear();
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