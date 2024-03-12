import { useState,useEffect } from 'react'
import axios from 'axios'
import personService from './services/personsServices';
import Numbers from './Numbers'
import AddPerson from './AddPerson'
import Phonebook from './Phonebook'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
console.log('✌️persons --->', persons);
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [filter, setfilter] = useState('');
  const [filteredUsers, setfilterUser] = useState([]);
  const [notification, setNotification] = useState(null);
  
console.log('✌️notification --->', notification);
  


  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/personsTest')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       const personsTest=response.data
  //       setPersons(personsTest)
  //       console.log("kya sabse pahle use effect chalta hai agar chalta hai tb to ..")
  //     })
  // }, [])
  useEffect(() => {
    personService.getAllPersons().then(initialPersons => {
      setPersons(initialPersons);
    });
  
  }, []);

  const handleNotification = (message) => {
    setNotification(message);
  console.log('✌️message --->', message);
  
    // Clear the notification after a few seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000); 
  };

  // ----------------handling addition of the new inputs---------------------

  const handleAddPerson=async(event)=>{
    event.preventDefault(); //this prevent the default behaviour of form submission which is reloading the page automatically when the form is submitted
    
     const newPerson={
      name:newName,
      number:newNum,
     }
    
    const existingPerson = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());
 
     if(existingPerson){
      //alert(`${newPerson.name} already exists here bro stop copying other's name  please!`)
      const wantToChange=window.confirm(`${newPerson.name} exists in db,do you want to update the number?`);

      if(wantToChange){
        console.log('✌️existingPerson.id --->', existingPerson._id);
        const updatedPerson=await personService.updateNumber(existingPerson._id,newPerson)// what if i put it into dependency array?
        setPersons(persons.map(person => (person._id === updatedPerson._id ? updatedPerson : person)));
        console.log('✌️updatedPerson --->', updatedPerson);
        
        //setPersons(persons.map(person => (person._id === updatedPerson._id ? updatedPerson : person)));
        // const updatedPerson = await personService.updateNumber(existingPerson.id, newPerson);
        //setPersons(persons.map(person => (person.id === updatedPerson.id ? updatedPerson : person)));
        setNewName("")
        setNewNum("")
        handleNotification(`${existingPerson.name} got updated`)
        
      console.log('✌️existingPerson --->', existingPerson);
      }
     }
     else{
      
      try{
        const addedPerson = await personService.addPerson(newPerson);
        setPersons(persons.concat(addedPerson));
        setNewName("")
        setNewNum("")
        handleNotification(` added ${addedPerson?.name} in the db`)
       console.log('✌️newPerson.name --->', addedPerson.name);
      }
      // catch(error){
      // console.log('✌️error while creating user --->', error);
      //   handleNotification(`${error} `)
      // }
      catch (error) {
        console.log('✌️error while creating user --->', error);
        if (error.response && error.response.data && error.response.data.error) {
          // Handling backend validation errors
          handleNotification(`Error: ${error.response.data.error.join(', ')}`);
        } else {
          // Handling other types of errors
          handleNotification('Error: Failed to create user.');
        }
      }
    // const persiano=persons.concat(newPerson)
      // // setPersons(persons.concat(newPerson));
      // setPersons(persiano)
      // if(newPerson.name.length>=3){
      //   const addedPerson = await personService.addPerson(newPerson);
      //   setPersons(persons.concat(addedPerson));
      //   setNewName("")
      //   setNewNum("")
      //   handleNotification(` added ${addedPerson?.name} in the db`)
      //  console.log('✌️newPerson.name --->', addedPerson.name);
      // }
      // else{
      //   handleNotification(`the person name should include more then 3 characters`)
      // }
      

    //   axios
    // .post('http://localhost:3001/persons', newPerson)
    // .then(response => {
    //   setPersons(persons.concat(response.data))
    // })
    
      // console.log('persons.concat(newPerson) --->', persons.concat(newPerson));
     
    }    

  }

  // --------delete
  const handleDeletePerson=async(_id)=>{
     console.log('✌️id  to be deleted --->', _id);
     const personToBeDeleted= persons.find(person => person._id === _id)
     const confirmation=window.confirm(`sure you wanna delete ${personToBeDeleted.name}`)
     if(confirmation){
      console.log('✌️id  to be deleted inside if block--->', _id);
     const deletedUser= await  personService.deletePerson(_id);
      setPersons(persons.filter(person => person._id !== _id))//this is because we instantly want to render the list of new users after deletion. if we dont do it the user will still get deleted but we cant see any changes in our list untill we reload it
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
  // filtering---
  const hadleFiltering=(event)=>{
    const filter=event.target.value.toLowerCase();

    setfilter(filter)
    //here we will be finding the person by comparing the input with existing people
     const filtered = persons.filter(user =>
      user.name.toLowerCase().includes(filter)
    );
    if(filter==''){
      setfilterUser([])
    }
    else{
      setfilterUser(filtered)
    }
    

  }
  //processing part  --------------
  // so i have to create a filter feature which will be done using an input field when user starts entering the name we have to take each letter of input and match it with our name which existing and those name are matching should be displayed there

// rendering part-----------------------------------------------
  return (
    <div>
      <h1>Phonebook</h1>
      <Phonebook filter={filter} hadleFiltering={hadleFiltering} filteredUsers={filteredUsers} />
      {/* <div>
        filter by name: <input type="text" value={filter} onChange={hadleFiltering}/>
        <ul>
        {filteredUsers.map(user => (
          <li key={user.name}>
            {user.name} - {user.number}
          </li>
        ))}
      </ul>
      </div> */}
      <h2>Add A New Person</h2>
      <AddPerson newName={newName} handleNewName={handleNewName} newNum={newNum} handleNewNum={handleNewNum} handleAddPerson={handleAddPerson}/>

       <Notification message={notification}/>
      {/* <form onSubmit={handleAddPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNewName}/>
          number: <input type='number' value={newNum} onChange={handleNewNum}/> 
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <Numbers persons={persons} handleDeletePerson={handleDeletePerson}/>
      {/* <h2>Numbers</h2>
      {persons.map(person=>
        <p key={person.name}>{person.name} -  {person.number}</p>
        )} */}
      {/* <p>{persons[0].name}</p> */}
       
       
    </div>
  )
}

export default App