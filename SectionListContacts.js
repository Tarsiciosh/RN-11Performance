import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

// eslint-disable-next-line react/prop-types
const renderSectionHeader = ({ section }) => <Text> { section.title } </Text>

const SectionListContacts = ({ contacts, onSelectContact }) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact]
    }
  }, {})

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      data: contactsByLetter[letter],
      title: letter
    }))

  return (
    <SectionList
      keyExtractor={item => item.phone}
      sections={sections}
      renderItem={({ item }) => <Row {...item} onSelectContact={onSelectContact} />}
      renderSectionHeader={renderSectionHeader}
    />
  )
}

SectionListContacts.propTypes = {
  contacts: PropTypes.array
  // onSelectContact: PropTypes.function
}

export default SectionListContacts
