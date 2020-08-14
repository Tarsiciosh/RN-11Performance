/* eslint-disable react/prop-types */
import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

class Row extends React.Component {
  
  shouldComponentUpdate(nextProps){
    
    return nextProps.name !== this.props.name
    /*
    if (nextProps.name !== this.props.name)
      true
    else
      false*/
  }
  
  render () {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.props.onSelectContact(name, phone)}>
      <Text>{this.props.name}</Text>
      <Text>{this.props.phone}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: { padding: 20 }
})

Row.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
  // onSelectContact: PropTypes.function
}

export default Row


/* // SECOND
class Row extends React.PureComponent {
  render () {
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.props.onSelectContact(name, phone)}>
      <Text>{this.props.name}</Text>
      <Text>{this.props.phone}</Text>
      </TouchableOpacity>
    )
  }
}
/*

/* // FIRST
const Row = ({ name, phone, onSelectContact }) => (
  <TouchableOpacity style={styles.row} onPress={() => onSelectContact(name, phone)}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </TouchableOpacity>
)
*/
