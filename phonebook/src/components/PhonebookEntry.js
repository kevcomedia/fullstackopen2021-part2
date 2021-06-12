import React from 'react'

const PhonebookEntry = ({ entry, onDelete }) => {
  const handleDelete = () => {
    onDelete(entry)
  }

  return (
    <li>
      {entry.name} {entry.number} <button onClick={handleDelete}>delete</button>
    </li>
  )
}

export default PhonebookEntry
