// screens/DetailsScreen.js
//import React from 'react';
//import { View, Text } from 'react-native';

//export default function DetailsScreen( ) {
//const itemId = 86;
//const otherParam = 'teste';
//    return (
//        <View>
  //          <Text>Details Screen</Text>
    //        <Text>Item ID: {itemId}</Text>
      //      <Text>Other Param: {otherParam}</Text>
        //</View>
   // )
//}

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function DetailsScreen({ route }) {
  const { valor } = route.params; // Pegamos o valor enviado da HomeScreen
  const isFocused = useIsFocused(); // Detecta se a tela está visível

  useEffect(() => {
    if (isFocused) {
      console.log('Tela de detalhes está visível!');
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Valor recebido: {valor}</Text>
    </View>
  );
}