import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Name 1', key: '1'},
    { text: 'Name 2', key: '2'},
    { text: 'Name 3', key: '3'},
  ])

  const [todo, setTodo] = useState(false)

  const AddHandler = (text) => {
    setTodos((prevTodos)=> {
      return [{text: text, key: Math.random().toString()}, ...prevTodos]
    })
  }

  const removeHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key !== key);
    })
  }

  const editHandler = (item) => {
    setTodo(item);
    removeHandler(item.key)
  }

  return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo AddHandler={AddHandler} currentTodo={todo}/>
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => (<TodoItem item={item} removeHandler={removeHandler} editHandler={editHandler}/>)} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {    
    padding: 40,
    flex: 1,
    // backgroundColor: 'pink'
  },
  list: {
    marginTop: 12,
    flex: 1,
    // backgroundColor: 'yellow'
  }
});

export default App;