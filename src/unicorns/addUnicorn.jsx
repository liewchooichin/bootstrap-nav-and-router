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

function methodPOST(endpoint, data){
  const ENDPOINT = endpoint + "/unicorns";
  axios({
    method: "POST",
    BASE_URL: BASE_URL,
    url: ENDPOINT,
    data: data,
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

export async function actionAddUnicorn({request, params}){
  const formData = await request.formData();
  const endpoint = formData.get("API_ENDPOINT");
  const unicorn = {
    "name":"Sparkle Angel", 
    "age":2, 
    "colour":"blue",
  }
  
  // call the post method
  methodPOST(endpoint, unicorn)
    .then(response=>{
      console.log("Data\n" + response.data);
      console.log("Status\n" + response.status);
      console.log("Status text\n" + response.statusText);
      console.log("Headers\n" + response.headers);
      console.log("Config\n" + response.config);
    })
}