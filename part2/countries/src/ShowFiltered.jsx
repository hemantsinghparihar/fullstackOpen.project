import React,{useEffect,useState}from 'react'

import country from './service/country' 

function CountryInfo(props){
 // const [Weather,setWeather]=useState([]);
  const [Weather, setWeather] = useState({ main: {} });
  console.log('✌️Weather data--->', Weather.main);
  
console.log('✌️Array.isArray(variable); --->', Array.isArray(Weather));
  
// console.log('✌️Weather.main.temp --->', Weather.main.temp);
  useEffect(()=>{
    country.getWeather(props.country).then(res=>{
       console.log('✌️ Weather response --->', res);
       console.log('✌️ Weather response icon --->', res.weather[0].icon)
      
       setWeather(res);
    })
  },[])
console.log(props.country)

//console.log("weather icon--->",Weather?.weather[0])
  return(
    <>
        
                <div key={props.country.name.common}>
                  <h1>{props.country.name.common}</h1>
                  <h3>{props.country.capital[0]}</h3>
                  <h3>languages</h3>
                  <ul>
                  {Object.values(props.country.languages).map(single=><li key={single}>{single}</li>)}
                  </ul>
                  <div><img src={props.country.flags.png }alt="" /></div>
                  <h2>{`Weather of ${props.country.capital[0]}`}</h2>

                  <h3>{`Temprature 🌡is ${Weather?.main?.temp}℃`}</h3>
                   
                  {Weather.weather && (
                 <img src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}          alt="Weather Icon"/>
                  )}
                  <h3>{`Wind 🌫 - ${Weather?.wind?.speed}m/s`}</h3>
                  
                  {/* weather.temp */}
                  
                </div>
                
        
    </>

  )

}

function ShowFiltered(props) {
    const setShowCountry=props.setShowCountry
     
console.log('✌️showCountry --->', props.showCountry);

  // const handleButtonClick = (country ) => {
  //   props.setFilter(country.name.common);
  // };

   if(props.filteredCountries.length>=10){
    return(
        <>
            <div style={{ color: 'red' }}>
             {props.message }
             </div>
        </>
    )
   }  
   else{
    if(props.filteredCountries.length==1){
      const one = props.filteredCountries[0];  
        return(
          <>
           <CountryInfo country={one} />;
            </>
        )
    }
    else{
         
      return (
        <div>
          {props.filteredCountries.map(one => {
            return (
              <div key={one.name.common}>
                <p>{one.name.common}</p>
                <button value={one.name.common} onClick={(event) =>setShowCountry({show:true,
                  country:one})}>show</button>

              
                {/* <button value={one.name.common} onClick={(event) =>handleButtonClick(one)}>show</button> */}
              </div>
              
            );
            // if(props.showCountry.show==true){
            //   return(
            //     <>
            //     <CountryInfo country={props.showCountry.country}/>
            //     </>
            //   )
            // }
          })}
          {props.showCountry.show === true && (
            <>
              {/* Moved CountryInfo outside the map loop */}
              <CountryInfo country={props.showCountry.country} />
            </>
          )}
        </div>
      );
     }
   }
   
}

export default ShowFiltered
