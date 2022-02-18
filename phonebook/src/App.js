import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Search from './components/Search'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState(null)

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
      personService
        .delete(id)
        .catch(() => {
          setNotification({
            success: false,
            message: `Information of ${name} has already been removed from server`,
          })
          setTimeout(() => {
            setNotification('')
          }, 5000)
        })
        .then(() => {
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
        setNotification({
          success: true,
          message: `Updated ${updatedPerson.name}`,
        })
        setTimeout(() => {
          setNotification('')
        }, 5000)
        setPersons(
          persons.map((person) =>
            person.id === existingEntry.id ? updatedPerson : person
          )
        )
      })
      .catch((error) => {
        setNotification({
          success: false,
          message: error.response.data.error,
        })
        setTimeout(() => {
          setNotification('')
        }, 5000)
      })
  }

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(newPerson)
      .then((person) => {
        setNotification({
          success: true,
          message: `Added ${person.name}`,
        })
        setTimeout(() => {
          setNotification('')
        }, 5000)
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      })
      .catch((error) => {
        setNotification({
          success: false,
          message: error.response.data.error,
        })
        setTimeout(() => {
          setNotification('')
        }, 5000)
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
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-2">Phonebook</h1>
      <Notification notification={notification} />

      <div className="mb-3">
        <Search
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
        />
      </div>

      <div className="mb-3">
        <h2 className="text-xl font-bold">Add an entry</h2>
        <Form
          name={newName}
          number={newNumber}
          onNameChange={handleNameChange}
          onNumberChange={handleNumberChange}
          onSubmit={handleSubmit}
        />
      </div>

      <h2 className="text-xl font-bold">Numbers</h2>
      <PhonebookEntries entries={entriesToShow} onDelete={handleDelete} />
    </div>
  )
}

export default App
