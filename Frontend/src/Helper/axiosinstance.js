import axios from 'axios'

const axiosinstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
  });



export default axiosinstance
