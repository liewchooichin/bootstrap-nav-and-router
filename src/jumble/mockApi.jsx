//mockapi.js
import axios from 'axios';
const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';

const headers = {
  "Content-Type": "application/json",
}
const mockAPI = axios.create(
  { 
    baseURL: BASE_URL,
    headers: headers,
  }
);

export default mockAPI