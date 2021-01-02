import React from 'react';
import {View, Text} from 'react-native';
import {css} from './assets/css/Css';

export default function (props) {
    return (
         <View>
             <Text>
                Nome da empresa : {props.empresa}{"\n"}
                Nome do dono: {props.dono}{"\n"}
                Ele comprou uma {props.produto} no valor de R${props.valor}.
             </Text>
         </View>
    );
} 