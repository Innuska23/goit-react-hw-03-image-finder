import axios from 'axios';
import { BASE_PIXABAY_URL, DEFAULT_SEARCH_PARAM } from './constans';

const getImages = async (requestParam, prevPage) => {
  const { data } = await axios.get(BASE_PIXABAY_URL, { params: { ...DEFAULT_SEARCH_PARAM, q: requestParam, page: prevPage } });

  return { ...data, totalPage: Math.ceil(data.totalHits / DEFAULT_SEARCH_PARAM.per_page) };
}

export default getImages;