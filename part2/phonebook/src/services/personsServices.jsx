import axios from 'axios';

// const baseUrl = 'http://localhost:3001/personsTest';
const baseUrl = 'http://localhost:3001/';

const getAllPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addPerson = async newPerson => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const deletePerson=async(id)=>{
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;

};

const updateNumber = async (id, updatedPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
  return response.data;
};


const personService = {
  getAllPersons,
  addPerson,
  deletePerson,
  updateNumber
};

export default personService;
