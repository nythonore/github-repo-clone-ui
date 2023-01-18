import axios from 'axios';
import { config } from '../config';

export const http = axios.create({
  baseURL: config.BASE_API,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
