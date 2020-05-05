import axios from 'axios';

const api = axios.create({
  baseURL: "https://flourish.yupiweb.com"
})

export default api;