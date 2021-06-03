import React, { useState } from 'react'
import PhonebookEntries from './components/PhonebookEntries'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234567' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isAlreadyAdded = persons.some((person) => person.name === newName)
    if (isAlreadyAdded) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    }
  }

  const entriesToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <p>
        filter shown with{' '}
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </p>

      <h2>Add an entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <PhonebookEntries entries={entriesToShow} />
    </div>
  )
}

export default App
