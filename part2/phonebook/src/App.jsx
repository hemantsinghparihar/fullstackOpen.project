import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number:7417111462 },{ name: 'hemu singh',number:74172222 },{ name: 'hemant parihar',number:74172222 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setfilter] = useState('');
  const [filteredUsers, setfilterUser] = useState([]);

  // ----------------handling addition of the new inputs---------------------

  const handleAddPerson=(event)=>{
    event.preventDefault(); //this prevent the default behaviour of form submission which is reloading the page automatically when the form is submitted
    
     const newPerson={
      name:newName,
      number:newNum,
     }
     //checking if the person already exists
     const areObjEqual=(person,newPerson)=>{
      
      if(person.name===newPerson.name){
        return true 
      }
      else{
        return false //if the name do not match with any existing name return a false
      }
            
     }
     
     const ifAleadyExists=persons.some(person=>areObjEqual(person,newPerson))
     if(ifAleadyExists){
      alert(`${newPerson.name} already exists here bro stop copying other's name  please!`)
     }
     else{
      const persiano=persons.concat(newPerson)
      // setPersons(persons.concat(newPerson));
      setPersons(persiano)
      console.log('persons.concat(newPerson) --->', persons.concat(newPerson));
       setNewName("")
       setNewNum("")
    }
     

  }
  // -------------------handling input-----------------------------------
  const handleNewName=(event)=>{
     
    console.log('✌️event.target.value() --->', event.target.value);//in the event.target.value we receive the inputs that the user is typing on every time he enters a letter we recieve that letter
    setNewName(event.target.value)
  }
  const handleNewNum=(event)=>{
     
    console.log('✌️event.target.value() --->', event.target.value);//in the event.target.value we receive the inputs that the user is typing on every time he enters a letter we recieve that letter
    setNewNum(event.target.value)
  }
  const hadleFiltering=(event)=>{
    const filter=event.target.value.toLowerCase();

    setfilter(filter)
    //here we will be finding the person by comparing the input with existing people
     const filtered = persons.filter(user =>
      user.name.toLowerCase().includes(filter)
    );
    setfilterUser(filtered)

  }
  //processing part  --------------
  // so i have to create a filter feature which will be done using an input field when user starts entering the name we have to take each letter of input and match it with our name which existing and those name are matching should be displayed there

// rendering part-----------------------------------------------
  return (
    <div>
      <h1>Phonebook</h1>
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
      <h2>Add A New Person</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNewName}/>
          number: <input type='number' value={newNum} onChange={handleNewNum}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>
        <p key={person.name}>{person.name} -  {person.number}</p>
        )}
      {/* <p>{persons[0].name}</p> */}
       
       
    </div>
  )
}

export default App