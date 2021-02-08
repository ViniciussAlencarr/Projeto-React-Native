import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Image, Text, Button, StatusBar, AsyncStorage, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import MenuAreaRestrita from '../assets/components/MenuAreaRestrita';
import { css } from '../assets/css/Css';
import config from '../config/config.json';

export default function Cadastro({navigation}) {
    const address = config.orign;
    const [code, setCode] = useState(null);
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
    const [response, setResponse] = useState('null');

    useEffect(() => {
        getUserId();
    }, []);


    useEffect(() => {
        randomCode();
    }, []);

    //Pegar id do usuário   
    async function getUserId() {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json.id);
    }

    //Gerar código randômico
    async function randomCode() {
        let result = '';
        let lenght = 20;
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = lenght; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
        setCode(result);
    }

    //Envio do formulario
    async function sendForm() {
        let response = fetch(config.urlRoot + 'create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user,
                code: code,
                product: product,
                local: address
            })
        });
        const json = await response.json();
        setResponse(json);
        Alert.alert('Produto adicionado com sucesso!');
    }

    return (
        <View>
            <MenuAreaRestrita title = 'Cadastro' navigation = {navigation}></MenuAreaRestrita>
            {response && (
                <View>
                    <Image source = {require('../assets/code.jpg')}></Image>
                </View>
            )}
            <View style = {css.input}>
                <TextInput placeholder = {'Nome do Produto'} onChangeText = {text => setProduct(text)}></TextInput>
            </View>
            <TouchableOpacity style = {css.btn} onPress = {() => sendForm()}>
                <Text style = {{color: '#fff'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}