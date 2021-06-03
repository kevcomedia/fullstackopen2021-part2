import React from 'react'

const Search = ({ searchTerm, onSearchTermChange }) => {
  return (
    <p>
      filter shown with{' '}
      <input type="search" value={searchTerm} onChange={onSearchTermChange} />
    </p>
  )
}

export default Search
