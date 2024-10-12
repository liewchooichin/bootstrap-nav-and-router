import axios from "axios";

// https://geocode.search.hereapi.com/v1/geocode?q=Invalidenstr+117+Berlin&apiKey=YOUR_API_KEY
const HERE_API_BASE_URL = "https://revgeocode.search.hereapi.com/v1";
export const geocode = "/revgeocode";

// HERE instance
export const hereApi = axios.create({
  baseURL: HERE_API_BASE_URL,
  timeout: 10000,
  /* headers: headers, */
})
