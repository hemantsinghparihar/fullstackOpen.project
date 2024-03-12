import axios from 'axios'

const baseURL='http://localhost:1337/api/testimonials?populate=*';

const getTestimonials=async()=>{
    const response=await axios.get(baseURL)
    return response.data;
}

const testimonials={
    getTestimonials
}

export default testimonials