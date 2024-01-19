import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'My todo no1', key: '1'},
    { text: 'My todo no2', key: '2'},
    { text: 'My todo no3', key: '3'},
  ])

  return(
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.list}>
        <FlatList data={todos} renderItem={({ item }) => (<Text>{item.text}</Text>)} />
      </View>
    </View>
  </View>
  )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {    
    padding: 40,
  },
  list: {
    marginTop: 12,
  }
});

export default App;