import axios from 'axios'

// const baseURL='http://localhost:1337/api/about-models?populate=*';

const instance = axios.create({
    baseURL: 'http://localhost:1337/api', 
    timeout: 5000, 
    headers: {
      'Content-Type': 'application/json', // Set default headers for all requests
    },
  });


  const getAboutSec=async()=>{
         const response=await instance.get('/about-models?populate=*')
         return response.data;
     }
// const getAboutSec=async()=>{
//     const response=await axios.get(baseURL)
//     return response.data;
// }

const aboutService={
    getAboutSec,
}

export default aboutService