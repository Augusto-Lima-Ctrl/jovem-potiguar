import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

import * as Font from 'expo-font'
import { useFonts } from 'expo-font';

export default function App() {
  let [forntsLoaded] = useFonts({ 'Alice-400': require('@expo-google-fonts/alice'),
  'Alice-400': require('@expo-google-fonts/alice')
})

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}