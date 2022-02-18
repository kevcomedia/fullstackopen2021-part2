import React from 'react'

const Input = (props) => {
  return (
    <input
      {...props}
      className="border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-blue-500 rounded px-2 py-1 bg-white"
    />
  )
}

export default Input
