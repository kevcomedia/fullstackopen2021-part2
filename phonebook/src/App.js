import React, { useState, useEffect } from 'react'
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

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.delete(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
    }
  }

  const updatePersons = (existingEntry) => {
    const willUpdateNumber = window.confirm(
      `${newName} is already added to phonebook, replace the current number with a new one?`
    )

    if (!willUpdateNumber) return

    personService
      .update(existingEntry.id, { ...existingEntry, number: newNumber })
      .then((updatedPerson) => {
        setPersons(
          persons.map((person) =>
            person.id === existingEntry.id ? updatedPerson : person
          )
        )
      })
  }

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    personService.create(newPerson).then((person) => {
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const existingEntry = persons.find((person) => person.name === newName)
    if (existingEntry) {
      updatePersons(existingEntry)
    } else {
      addPerson()
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
      <PhonebookEntries entries={entriesToShow} onDelete={handleDelete} />
    </div>
  )
}

export default App
