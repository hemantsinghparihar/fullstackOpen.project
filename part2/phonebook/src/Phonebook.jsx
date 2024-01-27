import React from 'react'

function Phonebook(props) {
    const{filter,hadleFiltering,filteredUsers}=props
  return (
    <div>
      <div>
        filter by name: <input type="text" value={filter} onChange={hadleFiltering}/>
        <ul>
        {filteredUsers.map(user => (
          <li key={user.name}>
            {user.name} - {user.number}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Phonebook
