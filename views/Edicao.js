import React, {useState, useEffect} from 'react';
import { View, Text, Button, StatusBar, AsyncStorage} from 'react-native';
import MenuAreaRestrita from '../assets/components/MenuAreaRestrita';

export default function Edicao({navigation}) {
    return (
        <View>
            <MenuAreaRestrita title = 'Edição' navigation = {navigation}></MenuAreaRestrita>
        </View>
    );
}