import axios from 'axios';

// const baseUrl = 'http://localhost:3001/personsTest';
const baseUrl = 'http://localhost:3001/';

const getAllPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addPerson = async (newPerson) => {
  const response = await axios.post(`${baseUrl}api/persons`, newPerson);
  return response.data;
};

const deletePerson=async(id)=>{
  console.log('id in the services file',id)
  const response = await axios.delete(`${baseUrl}api/persons/${id}`);
  return response.data;

};

const updateNumber = async (id, newPerson) => {
  const response = await axios.put(`${baseUrl}api/persons`, {id,newPerson});
  return response.data;
};


const personService = {
  getAllPersons,
  addPerson,
  deletePerson,
  updateNumber
};

export default personService;
