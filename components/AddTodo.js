import React, { useState, useEffect } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

function AddTodo({AddHandler, currentTodo}) {
  const [ todo, setTodo ] = useState({ text: '', key: false})
  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo)
    }
  }, [currentTodo]);
  const changeHandler = (val) => {
    setTodo(prevTodo => {
      return { ...prevTodo, text: val };
    });
  }

  const toAddHandler = (val) => {
    if(val.text.length > 3){
      // if(val.key){

      // } else {
        AddHandler(val.text)
        setTodo({ text: '', key: false})
      // }
    } else {
        Alert.alert('Aleee Babu', 'Atleast 4 chars required', [{text: 'GOT IT', onPress: ()=> console.log('Alert closed')}])
    }
  }

  return (
    <View>
        <TextInput style={styles.input} placeholder='New todo...' value={todo.text} onChangeText={(val) => changeHandler(val)} />
        <Button onPress={() => toAddHandler(todo)} title='Add todo' color='green' />
    </View>
  )
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 8,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
})