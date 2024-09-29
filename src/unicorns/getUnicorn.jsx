import axios from "axios";

const BASE_URL = "https://crudcrud.com/api/22378e23c3b04f13bfc0752bc851140e";

// create a default instance
const instance = axios.create({
  BASE_URL: BASE_URL,
})

// callbacks
function uploadingProgress(){
  console.log("Uploading in progress");
}
function downlaodingProgress(){
  console.log("Downloading in progress");
}

export function getUnicorns(){
  const ENDPOINT = "/unicorns";
  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: ENDPOINT,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    responseType: 'json', // default
    responseEncoding: 'utf8', // default,
    onUploadProgress: uploadingProgress,
    onDownloadProgress: downlaodingProgress,
    maxContentLength: 100,
    maxBodyLength: 200,
    decompress: true // default
  })
}
