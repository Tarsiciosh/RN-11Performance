import { combineReducers } from 'redux'
import { UPDATE_CONTACT, UPDATE_USER, LOG_IN_FULFILLED, LOG_IN_REJECTED, CHANGE_FIRST_CONTACT } from './actions'
import contacts from '../contacts'

const merge = (prev, next) => Object.assign({}, prev, next) // old way

const contactReducer = (state = contacts, action) => { // state= contacts
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  if (action.type === CHANGE_FIRST_CONTACT) {
    const [firstContact, ...rest] = state
    if (!firstContact) return state
    const newContact = {...firstContact, name: 'Jordan Hayashi'}
    return [newContact, ...rest]
  }
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    // case UPDATE_CONTACT:
    // return merge(state, {prevContact: action.payload})
    case LOG_IN_FULFILLED:
      return merge(state, { token: action.payload })
    case LOG_IN_REJECTED:
      return merge(state, { loginErr: action.payload })
    default: return state
  }
}

export default combineReducers({
  user: userReducer,
  contacts: contactReducer
})

/*
// more complex scenario
export const reducer = combineReducers ({
  user: combineReducers ({
    meta: userMetaReducer,
    logins: userLoginsReducer,
  }),
  contacts: contactReducer,
})
*/
