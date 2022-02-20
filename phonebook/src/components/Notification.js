import React from 'react'

const Notification = ({ notification }) => {
  if (!notification) return null

  const className = `border-2 rounded-md px-4 py-3 mb-3 ${
    notification.success
      ? 'border-green-700 text-green-700 bg-green-50'
      : 'border-red-700 text-red-700 bg-red-50'
  }`
  return <div className={className}>{notification.message}</div>
}

export default Notification
