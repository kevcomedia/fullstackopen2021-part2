import React from 'react'
import Button from './Button'

const PhonebookEntry = ({ entry, onDelete }) => {
  const handleDelete = () => {
    onDelete(entry)
  }

  return (
    <li className="mb-0.5">
      <b className="text-slate-800">{entry.name}</b> <span>{entry.number}</span>{' '}
      <Button onClick={handleDelete} x_type="danger" x_size="small">
        delete
      </Button>
    </li>
  )
}

export default PhonebookEntry
