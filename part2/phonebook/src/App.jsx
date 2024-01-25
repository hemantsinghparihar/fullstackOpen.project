import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');

  const handleAddPerson=(event)=>{
    event.preventDefault(); //this prevent the default behaviour of form submission which is reloading the page automatically when the form is submitted
     const newPerson={
      name:newName,
     }
     setPersons(persons.concat(newPerson));
console.log('✌️persons.concat(newPerson) --->', persons.concat(newPerson));
     setNewName("")
     

  }
  const handleNewName=(event)=>{
     
    console.log('✌️event.target.value() --->', event.target.value);//in the event.target.value we receive the inputs that the user is typing on every time he enters a letter we recieve that letter
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>
        <p>{person.name}</p>
        )}
      {/* <p>{persons[0].name}</p> */}
       
       
    </div>
  )
}

export default App