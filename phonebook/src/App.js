import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Search from './components/Search'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personService.getAll().then((persons) => setPersons(persons))
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
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
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
