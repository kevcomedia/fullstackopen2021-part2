import React from 'react'

const PhonebookEntries = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.name}>
          {entry.name} {entry.number}
        </li>
      ))}
    </ul>
  )
}

export default PhonebookEntries
