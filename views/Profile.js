import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity, AsyncStorage} from 'react-native';
import {css} from '../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../assets/components/MenuAreaRestrita';

export default function Profile({navigation}) {
    return (
        <View style = {[css.container, css.containerTop]}>
            <MenuAreaRestrita title = 'Profile' navigation = {navigation}></MenuAreaRestrita>
        </View>
    );
}