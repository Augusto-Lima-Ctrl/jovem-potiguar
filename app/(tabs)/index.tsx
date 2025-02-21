import { StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';
/*import { Link } from 'expo-router';*/
import {Alice_400Regular} from'@expo-google-fonts/alice';
import { useFonts } from 'expo-font';

export default function StackOneScreen() {
  const [fontsLoaded] = useFonts({
    Alice_400Regular
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu APP</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="red" />

      <EditScreenInfo path="app/(Stack)/index.tsx" />
      
      {/* <Link href={'/(tabs)/HomeScreen'}>teste HOME</Link> */}
      <TouchableOpacity><Text style={styles.title}>teste HOME</Text></TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="red"  />

      {/* <Link href={'/(tabs)/two'}>teste TWO</Link> */}
      <TouchableOpacity><Text  style={styles.title}>teste TWO</Text></TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="red" />
      
      {/* <Link href={'/(tabs)/DetailsScreen'}>teste DETAILS</Link> */}
      <TouchableOpacity><Text style={styles.title}>teste DETAILS</Text></TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="red" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    fontFamily: "Alice_400Regular"
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'red',
    fontFamily: "Alice_400Regular"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '20%',
  },
});
