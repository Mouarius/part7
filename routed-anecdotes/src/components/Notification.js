import React from 'react'

const Notification = ({ message }) => {
  const notificationStyle = {
    border: 'solid 1pt black',
    padding: '5px',
  }
  console.log(message)
  if (message) {
    return <div style={notificationStyle}>{message}</div>
  }
  return null
}

export default Notification
