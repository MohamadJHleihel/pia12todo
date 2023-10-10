import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';




export default function App() {
  const [mynumber, setMynumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require('./98497-84.png')} /> 


      <Text>{mynumber}</Text>
       <Button title='Plus' onPress={() => {
       setMynumber  (mynumber +1);
       }}/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
