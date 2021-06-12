import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const PhonebookEntries = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <PhonebookEntry entry={entry} key={entry.name} />
      ))}
    </ul>
  )
}

export default PhonebookEntries
