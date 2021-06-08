import React from 'react'
import SearchResult from './SearchResult'

const SearchResults = ({ results }) => {
  if (results.length <= 1 || results.length > 10) {
    return null
  }

  return (
    <ul>
      {results.map((country) => (
        <SearchResult country={country} key={country.name} />
      ))}
    </ul>
  )
}

export default SearchResults
