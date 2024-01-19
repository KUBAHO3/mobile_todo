import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

function AddTodo() {
  const [ todo, setTodo ] = useState('')

  const changeHandler = (val) => {
    setTodo(val)
  }

  return (
    <View>
        <TextInput style={styles.input} placeholder='New todo...' onChangeText={(val) => changeHandler(val)} />
        <Button onPress={() => console.log('Text', todo)} title='Add todo' color='green' />
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