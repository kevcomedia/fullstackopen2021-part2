import React from 'react'

const Notification = ({ notification }) => {
  if (!notification) return null

  const className = `notification ${
    notification.success ? 'notification__success' : 'notification__failure'
  }`
  return <div className={className}>{notification.message}</div>
}

export default Notification
