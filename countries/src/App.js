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

  console.log(countries)

  return (
    <div>
      <p>
        find countries:{' '}
        <input type="search" value={search} onChange={handleSearchChange} />
      </p>
    </div>
  )
}

export default App
