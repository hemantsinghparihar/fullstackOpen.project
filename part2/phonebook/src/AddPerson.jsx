import React from 'react'

function AddPerson(props) {
    const{newName,handleNewName,newNum,handleNewNum,handleAddPerson,handleNotification}=props
  return (
    <div>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNewName}/>
          number: <input type='text' value={newNum} onChange={handleNewNum}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson
