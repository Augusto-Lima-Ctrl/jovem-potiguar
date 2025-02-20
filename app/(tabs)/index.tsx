import { Button, StyleSheet } from 'react-native';
// import 'react-native-gesture-handler';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View, } from '@/components/Themed';
import { Link } from 'expo-router';

export default function StackOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu APP</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="red" />

      <EditScreenInfo path="app/(Stack)/index.tsx" />
      {/* <Link href={'/(tabs)/HomeScreen'}>teste HOME</Link> */}
      <Button style={styles.title} color={'red'} title="teste HOME" onPress={() => {}} />

      <View style={styles.separator} lightColor="#eee" darkColor="red" />
      {/* <Link href={'/(tabs)/two'}>teste TWO</Link> */}
      <Button style={styles.title} color={'red'} title="teste TWO" onPress={() => {}} />

      <View style={styles.separator} lightColor="#eee" darkColor="red" />
      {/* <Link href={'/(tabs)/DetailsScreen'}>teste DETAILS</Link> */}
      <Button style={styles.title} color={'red'} title="teste DETAILS" onPress={() => {}} />

      <View style={styles.separator} lightColor="#eee" darkColor="red" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: 'red'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '30%',
  },
});
