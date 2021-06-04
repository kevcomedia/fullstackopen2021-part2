import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResults from './components/SearchResults'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const matchingCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <p>
        find countries:{' '}
        <input type="search" value={search} onChange={handleSearchChange} />
      </p>
      {search !== '' && matchingCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}

      <SearchResults results={matchingCountries} />

      {matchingCountries.length === 1 && (
        <Country country={matchingCountries[0]} />
      )}
    </div>
  )
}

export default App
