import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

function AddTodo({AddHandler}) {
  const [ todo, setTodo ] = useState('')

  const changeHandler = (val) => {
    setTodo(val)
  }

  const toAddHandler = (val) => {
    if(val.length > 3){
        AddHandler(val)
        setTodo('')
    } else {
        Alert.alert('Aleee Babu', 'Atleast 4 chars required', [{text: 'GOT IT', onPress: ()=> console.log('Alert closed')}])
    }
  }

  return (
    <View>
        <TextInput style={styles.input} placeholder='New todo...' value={todo} onChangeText={(val) => changeHandler(val)} />
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