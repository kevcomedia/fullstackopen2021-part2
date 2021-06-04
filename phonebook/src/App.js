import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
    })
  }, [])

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
      <Search
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />

      <h2>Add an entry</h2>
      <Form
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      <PhonebookEntries entries={entriesToShow} />
    </div>
  )
}

export default App
