import { login } from '../api'

// action types
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const UPDATE_USER = 'UDPATE_USER'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
export const CHANGE_FIRST_CONTACT = 'CHANGE_FIRST_CONTACT'

// actions creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update
})

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact
})

export const changeFirstContact = () => ({
  type: CHANGE_FIRST_CONTACT
})

// this fucntion logInUser takes a username and a password as parameters and it
// return an async function that takes a function as a parameter called dispatch and return void
// it has to be an async function because inside it calls an async function
export const logInUser = (username, password) => async dispatch => {
  dispatch({ type: LOG_IN_SENT }) // here the argument to dispatch is an obj
  try {
    const token = await login(username, password)
    dispatch({ type: LOG_IN_FULFILLED, payload: token })
  } catch (err) {
    dispatch({ type: LOG_IN_REJECTED, payload: err.message })
  }
}
