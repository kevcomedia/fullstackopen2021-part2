import React from 'react'
import Button from './Button'

const PhonebookEntry = ({ entry, onDelete }) => {
  const handleDelete = () => {
    onDelete(entry)
  }

  return (
    <li>
      {entry.name} {entry.number} <Button onClick={handleDelete}>delete</Button>
    </li>
  )
}

export default PhonebookEntry
