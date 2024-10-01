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

// "_id":"66fb8db4fe837603e816da88",
const testPayload = {"name":"Va","power":[{"powerId":1,"powerName":"Nutrition preparation","isPower":false},{"powerId":2,"powerName":"Herbal healing","isPower":true},{"powerId":3,"powerName":"Herbs foraging","isPower":false},{"powerId":4,"powerName":"Spirit guarding","isPower":false},{"powerId":5,"powerName":"Weather forecasting","isPower":false},{"powerId":6,"powerName":"Story telling","isPower":false}],"element":[{"elementId":1,"elementName":"wood","isElement":false},{"elementId":2,"elementName":"water","isElement":true},{"elementId":3,"elementName":"metal","isElement":false},{"elementId":4,"elementName":"earth","isElement":false},{"elementId":5,"elementName":"fire","isElement":false}]};

const testData = {
  "name": "Sparkle Gem",
  "age": "2 years 6 months",
};

function putUnicorn(){
  const id = "66fb8db4fe837603e816da88";
  const endpoint = "/unicorns/" + id;
  axios({
    method: "PUT",
    baseURL: "https://crudcrud.com/api/d4d442a82e0843bfa8662d791e8a86c5",
    url: endpoint,
    data: testPayload,
  }).then((response) => {
    console.log(response.status);
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
putUnicorn();

// Delete unicorn
//deleteUnicorn();

// Get data
//getUnicorn();
