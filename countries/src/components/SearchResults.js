import React from 'react'

const SearchResults = ({ results }) => {
  if (results.length <= 1 || results.length > 10) {
    return null
  }

  return (
    <ul>
      {results.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  )
}

export default SearchResults
