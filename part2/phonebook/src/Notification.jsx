import React from 'react'

const Notification = (props) => {
    if (props.message  === null) {
      return null
    }
  
    return (
      <div style={{ color: 'red' }}>
        {props.message }
      </div>
    )
  }

export default Notification
