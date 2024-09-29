import axios from "axios";

const BASE_URL = "https://crudcrud.com/api/22378e23c3b04f13bfc0752bc851140e";

// callbacks
function uploadingProgress(){
  console.log("Uploading in progress");
}
function downlaodingProgress(){
  console.log("Downloading in progress");
}

/**Console to get started with CRUD */

const unicorn = {
  "name":"New unicorn", 
  "age":"-1", 
  "colour":"White",
}

function postUnicorn(){
  const endpoint = "/unicorns";
  axios({
    method: "POST",
    baseURL: BASE_URL,
    url: endpoint,
    data: unicorn,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
}

function putUnicorn(){
  const id = "66f91a20fe837603e816d7e2";
  const endpoint = "/unicorns/" + id;
  axios({
    method: "PUT",
    baseURL: BASE_URL,
    url: endpoint,
    data: {
      "name": "Sparkle Gem",
      "age": "2 years 6 months",
    },
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
}

function deleteUnicorn(){
  const id = "66f92361fe837603e816d7fe";
  const endpoint = "/unicorns/" + id;
  axios({
    method: "DELETE",
    baseURL: BASE_URL,
    url: endpoint,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
}


function getUnicorn(){
  const endpoint = "/unicorns";
  //const id = "66f91a20fe837603e816d7e2";
  //const endpoint = "/unicorns/" + id;
  axios({
    method: "GET",
    baseURL: BASE_URL,
    url: endpoint,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
}

// Post unicorn
//postUnicorn();

// Put unicorn
//putUnicorn();

// Delete unicorn
//deleteUnicorn();

// Get data
getUnicorn();
