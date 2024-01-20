import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Attendance</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'green',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
    }
})