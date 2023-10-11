import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';




export default function App() {

 const [addtodo, setAddtodo] = useState("");
 const [todoitems, setTodoitems] = useState([ {"key":"A"}, {"key":"B"} ]);
 const [errormessage, setErrormessage] = useState("fel fel fel");

 function addTothelist () {
   if (addtodo!=""){  
     const newtodo = todoitems. concat ({"key": addtodo});
      setTodoitems (newtodo) ;
    setErrormessage("");}
      else {
          setErrormessage("You need to enter something!");
      }
 }



  const [mynumber, setMynumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text>ToDo</Text>
      
      {errormessage != "" &&
        <Text>{errormessage}</Text>
       }

      <TextInput value={addtodo} onChangeText={setAddtodo} placeholder='Add todo'/>
     
     <Button title='Add' onPress={() =>{
      addTothelist();
     }}/>
     <FlatList 
     data={todoitems}
     renderItem = {({item}) => 
      <Text>{item.key}</Text>
    }
      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:100,
  },
});


{/* <Image source={require('./98497-84.png')} /> 


<Text>{mynumber}</Text>
 <Button title='Plus' onPress={() => {
 setMynumber  (mynumber +1);
 }}/>
 
 <Text>{ mynumber < 10 ? "Liten siffra" : "Stor siffra" }</Text> 
 
 {mynumber > 5 &&
  <View>
    <Text>Mer än fem</Text>
    <Text>mer text</Text>
  </View>
  } */}