import React from 'react'

const Button = (props) => {
  return (
    <button
      {...props}
      className="rounded px-3 py-1 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring text-white"
    />
  )
}

export default Button
