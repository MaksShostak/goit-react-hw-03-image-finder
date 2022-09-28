import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '29606139-306393987ee25a09df02ffe92',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const getPixabayPhoto = async (page, input) => {
  const { data } = await axios.get(`?q=${input}&page=${page}`);
  return data.hits;
};
