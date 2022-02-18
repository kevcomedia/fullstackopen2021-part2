import React from 'react'
import Input from './Input'

const Search = ({ searchTerm, onSearchTermChange }) => {
  return (
    <p>
      filter shown with{' '}
      <Input type="search" value={searchTerm} onChange={onSearchTermChange} />
    </p>
  )
}

export default Search
