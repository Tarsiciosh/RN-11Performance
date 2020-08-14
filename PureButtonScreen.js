import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import PureButton from './PureButton'

export default class PureButtonScreen extends React.Component {
  state = {
    count: 0,
  }

  inc = () => {
    this.setState(prevState => 
      ({count: prevState.count + 1}))
  }
  
  render () {
    return (
      <View style={{flex: 1 , justifyContent: 'center'}} >
        <Text > {this.state.count} </Text>
        <PureButton 
          title='increment count'
          //style ={{alignSelf: 'center'}} 
          style = {styles.button}    
          onPress = {this.inc} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  button: {
    alignSelf: 'center'
  }
})

// Every time a literal is use in the props it re renders again
// the string (title) is also a literal but it === s the value and not the 
// reference as is would be with an object and it knows it is the same
// string
  
