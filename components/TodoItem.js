import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function TodoItem({item, removeHandler, editHandler}) {
  return (
    <View style={styles.item}>
        <Text style={styles.text}>
          {item.text}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={()=> removeHandler(item.key)}>
            <View style={styles.icon}>
              <AntDesign name="delete" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> editHandler(item)}>
            <View style={styles.icon}>
              <AntDesign name="edit" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default TodoItem;

const styles = StyleSheet.create({
    item: {
        paddingVertical: 8,
        paddingLeft: 8,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
      paddingHorizontal: 8,
      borderColor: '#bbb',
      borderLeftWidth: 1,
      borderStyle: 'solid',
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
})