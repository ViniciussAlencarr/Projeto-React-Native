import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TextInput, Button, StatusBar, TouchableOpacity, AsyncStorage} from 'react-native';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../assets/components/MenuAreaRestrita';
import config from '../config/config.json';

export default function Profile({navigation}) {
    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        async function getIdUser() {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    })

    async function sendForm() {
        let response = await fetch(`${config.urlRoot}verifyPass`, {
            method:'POST',
            body:JSON.stringify({
                id: idUser, //recebe o id do usuário inserido no banco de dados
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json = await response.json();
        setMsg(json);
    }

    return (
        <View style = {[css.container, css.containerTop]}>
            <MenuAreaRestrita title = 'Profile' navigation = {navigation}></MenuAreaRestrita>            
            <View style = {css.viewProfile}>
                <Text>{msg}</Text>
                <TextInput style = {css.txtInputPassword} placeholder = {'Senha Antiga'} onChangeText = {text => setSenhaAntiga(text)}/>
                <TextInput style = {css.txtInputPassword} placeholder = {'Nova Senha'} onChangeText = {text => setNovaSenha(text)}/>
                <TextInput style = {css.txtInputPassword} placeholder = {'Confirmação da Nova Senha'} onChangeText = {text => setConfNovaSenha(text)}/>
                <TouchableOpacity style = {css.btn} onPress = {() => sendForm()}>
                    <Text style = {{color: '#fff'}}>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}