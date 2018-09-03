import axios from 'axios';

const URL = 'https://developers.zomato.com/api/v2.1';
const API_KEY = '54a11c53d5942e2996c0360c8aa53ff9';
const HEADERS = { "user-key": API_KEY};

export const searchCities = async (term) => {
  return axios.get(`${URL}/cities?q=${term}`, { headers: HEADERS });
}

export const getCuisinesByCity = async (cityId) => {
  return axios.get(`${URL}/cuisines?city_id=${cityId}`, { headers: HEADERS });
}

export const getRestaurantsByCity = async (start, cityId, cuisines = null) => {
  const queryCuisines = (cuisines) ? `&cuisines=${cuisines.join(',')}` : '';
  return axios.get(`${URL}/search?entity_id=${cityId}&start=${start}&count=18&entity_type=city${queryCuisines}`, { headers: HEADERS });
}