import axios from 'axios';
import {BASE_PIXABAY_URL, DEFAULT_SEARCH_PARAM} from './constans';

const getImages = async (requestParam) => {
  const { data } = await axios.get(BASE_PIXABAY_URL, {params: {...DEFAULT_SEARCH_PARAM, q: requestParam} });
  return data;
  }
  
  export default getImages;