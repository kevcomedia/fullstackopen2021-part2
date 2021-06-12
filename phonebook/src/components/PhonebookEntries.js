import React from 'react'
import PhonebookEntry from './PhonebookEntry'

const PhonebookEntries = ({ entries, onDelete }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <PhonebookEntry entry={entry} onDelete={onDelete} key={entry.name} />
      ))}
    </ul>
  )
}

export default PhonebookEntries
