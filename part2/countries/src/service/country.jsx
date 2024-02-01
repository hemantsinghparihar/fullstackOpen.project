import axios from 'axios';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';



const getAllCountries = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getWeather=async(country)=>{
  const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${API_KEY}`)
  const temperatureInCelsius = Math.round(response.data.main.temp - 273.15);
  response.data.main.temp = temperatureInCelsius;
  return response.data;
}

 

const country = {
    getAllCountries,
    getWeather,
   
};

export default country;
