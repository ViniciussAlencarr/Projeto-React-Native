import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import Pages from './Pages';

export default function App() {

  const [product, setProduct] = useState('Bola');
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      Alert.alert('Novo produto adicionado!');
    }

  }, [value]);

  const props = {
    empresa: 'Empresa 01',
    dono: 'Vinicius',
    produto: product,
    valor: value,
};
  return (
    <View style={css.container}>
      <Text style={css.content}>Open up App.js to start working on your app!</Text> 
      <Text style={css.pages}><Pages {...props}></Pages></Text>

      <Button
      onPress = { () =>{
        setValue(value + 1);
      }} disabled={value == 10} title={value < 10  ? 'Adicionar Produto' : 'Número maximo de produtos'}></Button>

      <StatusBar style="dark" />
    </View>
    
  );
}
