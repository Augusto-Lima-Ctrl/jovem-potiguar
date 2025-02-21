// screens/HomeScreen.js
//import React, { useState } from 'react';
//import { Button, View, Text } from 'react-native';

//export default function HomeScreen({ navigation }) {
  //const [ contador, setContador ] = useState(0);

  //return (
    //<View>
      //<Text>Home Screen</Text>
      //<Button
        //title="Go to Details"
        //onPress={() => navigation.navigate('Details', { itemId: 86, otherParam: 'anything you want here' })}
      ///>
    //</View>
  //);
//}

import React, { useState } from 'react';
import { View, Text, Button,} from 'react-native';
import * as Font from 'expo-font'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(Stack);

export default function HomeScreen({ navigation }) {
  const [contador, setContador] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details', { valor: contador })}
      />
    </View>
  );
}