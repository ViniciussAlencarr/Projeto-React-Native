import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import Pages from './Pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Rastreio} from './views/Index';

export default function App() {

  const Stack = createStackNavigator();  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Bem Vindo',
          headerStyle: {
            backgroundColor: '#00A859',
          },
          headerTitleStyle: {
            color: '#DBECE9',
            alignSelf: 'center',
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: 'Tela de Login',
          headerStyle: {
            backgroundColor: '#00A859',
          },
          headerTitleStyle: {
            color: '#DBECE9',
            padding: 50,
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Rastreio" component={Rastreio}
        options={{
          title: 'Tela de Login',
          headerStyle: {
            backgroundColor: '#00A859',
          },
          headerTitleStyle: {
            color: '#DBECE9',
            padding: 50,
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>       
  );
}
