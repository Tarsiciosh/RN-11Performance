import React from 'react'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import { connect } from 'react-redux'

function AppNavigator ({ token }) {
  return (
    <NavigationContainer>
      {token == null ? (<SignInScreen/>) : (<HomeScreen/>)}
    </NavigationContainer>
  )
}

AppNavigator.propTypes = {
  token: PropTypes.string
}

// REDUX
const mapStateToProps = state => ({
  token: state.user.token
})
export default connect(mapStateToProps)(AppNavigator)
