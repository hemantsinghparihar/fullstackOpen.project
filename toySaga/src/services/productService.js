import axios from 'axios'


const baseURL='http://localhost:1337/api/products?populate=*';

const getProducts=async()=>{
    const response=await axios.get(baseURL)
    return response.data;
}

const products={
    getProducts
}

export default products