import React, { useState } from 'react'
import Country from './Country'

const SearchResult = ({ country }) => {
  const [isCountryShown, setCountryShown] = useState(false)

  const handleShowClick = () => {
    setCountryShown(!isCountryShown)
  }

  return (
    <li>
      {country.name}{' '}
      <button onClick={handleShowClick}>
        {isCountryShown ? 'hide' : 'show'}
      </button>
      {isCountryShown && <Country country={country} />}
    </li>
  )
}

export default SearchResult
