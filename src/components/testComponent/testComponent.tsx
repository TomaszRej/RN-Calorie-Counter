import React, { ReactElement } from 'react';
import {View, Text, StyleSheet } from 'react-native'

interface TestComponentProps {
  message: string, 
  fun: ()=>void
}


const TestComponent : React.FC<TestComponentProps>= ({message}):ReactElement => {

  return (
    <View style={styles.container} >
      <Text>Testing Typescript</Text>
      <Text>{message}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    width: '100%'
  }
})

export default TestComponent