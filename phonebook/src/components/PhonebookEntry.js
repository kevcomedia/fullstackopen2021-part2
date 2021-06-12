import React from 'react'

const PhonebookEntry = ({ entry }) => {
  return (
    <li>
      {entry.name} {entry.number} <button>delete</button>
    </li>
  )
}

export default PhonebookEntry
