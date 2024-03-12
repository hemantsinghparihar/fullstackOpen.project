import axios from 'axios'
 const baseURL='http://localhost:1337/api/institution-csrs?populate=*'

 const getInstitutionCSR=async()=>{
    const response=await axios.get(baseURL);
    return response.data
 }

 const institutionAndCSR={
    getInstitutionCSR
 }

 export default institutionAndCSR;