import React from 'react'

const SearchResult = ({ country }) => {
  return (
    <li>
      {country.name} <button>show</button>
    </li>
  )
}

export default SearchResult
