import React from 'react'
import { FlatList } from 'react-native'
// import PropTypes from 'prop-types'

import Row from './Row'

// eslint-disable-next-line react/prop-types
const renderItem = ({ item }) => <Row {...item} />

const FlatListContacts = props => <FlatList renderItem={renderItem} data={props.contacts} />

/*
FlatListContacts.propTypes = {
  contacts: PropTypes.array,
  item: PropTypes.array
}
*/
export default FlatListContacts
