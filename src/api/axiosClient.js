import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3030/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;