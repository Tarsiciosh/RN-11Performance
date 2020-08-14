import React from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { logInUser } from '../redux/actions'

//import {login} from '../api'

function SignInScreen ({logInUser, token, err, navigation}) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const _login = async () => {
    logInUser(username, password)
  }

  return (
    <View style={styles.container}>
      <Text style ={{marginBottom:20, color:"red"}}> {err} </Text>

      <TextInput
        style= {styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style= {styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => _login({username,password}) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin: 5
  }
})

// REDUX
const mapStateToProps = state => {
  return ({
    err: state.user.loginErr,
    token: state.user.token
  })
}
const mapDispatchToProps = {logInUser}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
