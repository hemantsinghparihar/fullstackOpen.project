import React from 'react'

function Numbers(props) {
  const {persons,handleDeletePerson}=props
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person=>
        <React.Fragment key={person._id}>
        <p>{person.name} - {person.number} <button onClick={() => handleDeletePerson(person._id)}>Delete</button></p>
      </React.Fragment>
        )}
    </div>
  )
}

export default Numbers
