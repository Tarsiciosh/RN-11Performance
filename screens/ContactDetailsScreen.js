/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

export default function ContactDetailsScreen ({ route, navigation }) {
  const { name } = route.params
  const { phone } = route.params

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [navigation, route])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  )
}

ContactDetailsScreen.propTypes = {
  phone: PropTypes.string,
  name: PropTypes.string
}

/*
export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name'),
  })

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('phone')}</Text>
        <Button title="Go to random contact" onPress={this.goToRandomContact} />
      </View>
    )
  }

  goToRandomContact = () => {
    const {contacts} = this.props.screenProps
    const phone = this.props.navigation.getParam('phone')
    let randomContact
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length)
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex]
      }
    }

    // this.props.navigation.navigate('ContactDetails', {
    //   ...randomContact,
    // });
    this.props.navigation.push('ContactDetails', {
      ...randomContact,
    })
  }
}
*/
