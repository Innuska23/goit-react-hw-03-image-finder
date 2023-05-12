import axios from 'axios';
import {BASE_PIXABAY_URL, DEFAULT_SEARCH_PARAM, PER_PAGE } from 'services/constants';

const requestParam = DEFAULT_SEARCH_PARAM;

export const getImages = (searchQuery) => {
    return fetch(
      `https://pixabay.com/api/?key=34753059-f7902d1f02de9c533025c1a5e&q=${searchQuery}&image_type=photo`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Error'));
    });
  }
  
  export default getImages;