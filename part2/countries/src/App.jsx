import { useState,useEffect} from 'react'
import country from './service/country' 
import Notification from './Notification'
import ShowFiltered from './ShowFiltered'


function App() {
  const [filter, setFilter] = useState('');
  const [filteredCountries,setFilteredCountries]=useState([]);
 
  const [allCountries,setAllCountries]=useState([]);
 

  const [notifications,setNotifications]=useState(null);
  const [showCountry, setShowCountry] = useState({
    show: false,
    selectedCountry: ''
  })
 
console.log('✌️allCountries --->', allCountries);
console.log("this is supposed to be the array that is filtered",filteredCountries)

  useEffect(()=>{
    country.getAllCountries().then(res=>{
       console.log('✌️res --->', res);
      
       setAllCountries(res);
    })
  },[])
  
 

 const handleNotification=(msg)=>{
  setNotifications(msg)
 }


  const handleFilter=(event)=>{
    const input=event.target.value.toLowerCase()
    // const input = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase();
console.log('✌️input --->', input);

    setFilter(input)
    const filtered= allCountries.filter(oneCountry=>{

      return oneCountry.name.common.toLowerCase().includes(input)
    })
    console.log('✌️filtered --->', filtered);
    if(!input){
      setFilteredCountries([]);
    }
    else{
      handleNotification("because there are too many matches so please be more specific")
      setFilteredCountries(filtered);

    }
    
  }

  return (
     <>
      find countries <input type="text"  value={filter} onChange={handleFilter}/>
      {/* {filteredCountries.map(one => (
        <p key={one.name.common}>{one.name.common}</p>
      ))} */}
      <ShowFiltered filteredCountries={filteredCountries} message={notifications} setFilter={setFilter} handleFilter={handleFilter} setFilteredCountries={setFilteredCountries} showCountry={showCountry} setShowCountry={setShowCountry} />
      {/* <Notification message={notifications} /> */}
      <h1>All the countries</h1>
      <ul>
      {allCountries.map(oneCountry=>
        <li key={oneCountry.name.common}>{oneCountry.name.common}</li>
        )}
        </ul>
        
     </>
  )
}

export default App
