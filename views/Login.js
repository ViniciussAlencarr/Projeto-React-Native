import React from 'react';
import {KeyboardAvoidingView, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { css } from '../assets/css/Css';

export default function Login(props) {
    return (
        <KeyboardAvoidingView>
            <View>
                <Image source={require('../assets/vini.png')}></Image>        
            </View>
            <View>

            </View>
        </KeyboardAvoidingView>
    );
}