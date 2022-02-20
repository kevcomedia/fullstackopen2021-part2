import React from 'react'

const Button = ({ x_size, x_type, ...props }) => {
  const colors = {
    danger: 'bg-red-500 hover:bg-red-600 focus:bg-red-600',
    primary: 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600',
  }

  return (
    <button
      {...props}
      className={`rounded px-3 py-1 ${colors[x_type]} ${
        x_size === 'small' ? 'text-sm' : ''
      } focus:outline-none focus:ring text-white`}
    />
  )
}

export default Button
