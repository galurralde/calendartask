import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);

  const onAddEvent = () => {
    if (text.length == 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }

    ]);
    setText('');
  }

  const renderItem = ({item}) =>(
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
    </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingresar Tarea' 
        style={styles.intup}
        value={text}
        onChangeText={(text) => setText(text)}
        />
        
        <Button title='Add' color='#1D3557' onPress={onAddEvent}/>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de Tareas</Text>
        <FlatList
          renderItem={renderItem}
          data={events}
          keyExtractor={(item)=>item.id}        
        />
      </View>
    </View>
  );
}
