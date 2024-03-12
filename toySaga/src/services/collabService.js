import axios from 'axios'

const baseURL='http://localhost:1337/api/collaborates'

const getCollabContent=async()=>{
    const response=await axios.get(baseURL)
    return response.data
}

const content={
    getCollabContent
}
export default content