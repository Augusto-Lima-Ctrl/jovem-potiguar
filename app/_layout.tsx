
import { Stack } from 'expo-router/stack';

export default function RootLayoutNav() {
 

  return (
      <Stack>
        <Stack.Screen name='/(tabs)/index'/>
        <Stack.Screen name='/(tabs)/two'/>
        <Stack.Screen name='/(tabs)/HomeScreen'/>
        <Stack.Screen name='/(tabs)/DetailsScreen'/>
      
      </Stack>
 
  );
}
