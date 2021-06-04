import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  console.log(matchingCountries)

  return (
    <div>
      <p>
        find countries:{' '}
        <input type="search" value={search} onChange={handleSearchChange} />
      </p>
      {matchingCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}

      {1 < matchingCountries.length && matchingCountries.length <= 10 && (
        <ul>
          {matchingCountries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
