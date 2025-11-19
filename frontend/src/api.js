import axios from 'axios';

// Base URL for backend API
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL 
});

// Add JWT token to every request if exists
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default API;
