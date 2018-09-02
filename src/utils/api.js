import axios from 'axios';

const URL = 'https://developers.zomato.com/api/v2.1';
const API_KEY = process.env.REACT_APP_ZOMATO_API_KEY;
const HEADERS = { "user-key": API_KEY};

export const searchCities = async (term) => {
  return axios.get(`${URL}/cities?q=${term}`, { headers: HEADERS });
}

export const getCuisinesByCity = async (cityId) => {
  return axios.get(`${URL}/cuisines?city_id=${cityId}`, { headers: HEADERS });
}

export const getRestaurantsByCity = async (cityId, cuisines = null) => {
  const queryCuisines = (cuisines) ? `&cuisines=${cuisines.join(',')}` : '';
  return axios.get(`${URL}/search?entity_id=${cityId}&count=18&entity_type=city${queryCuisines}`, { headers: HEADERS });
}