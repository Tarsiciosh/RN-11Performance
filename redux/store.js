import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

// import { addContact } from './actions'
import reducer from './reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

// non-persistent store:
export default createStore(reducer, applyMiddleware(thunk))


/*
store.dispatch(addContact({name:'John Appleseed', phone: '5555-55555'}))
store.dispatch(addContact({name:'Peter Malek', phone: '4444-444444'}))
store.dispatch(addContact({name:'Jordan Hahashi', phone: '33333-333333'}))
store.dispatch(addContact({name:'Sebastian Bach', phone: '222222-222222'}))
*/

// console.log(store.getState())

/*
const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
}
*/
