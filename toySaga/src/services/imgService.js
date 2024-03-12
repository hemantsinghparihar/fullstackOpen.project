import axios from 'axios';

const baseUrl = 'http://localhost:1337/api/images?populate=*';

const getAllImages = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  };
const images={
  getAllImages
}
export default images;