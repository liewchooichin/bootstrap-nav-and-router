import axios from "axios";

export function postData(data, base_url, endpoint){
  axios({
    method: "POST",
    baseURL: base_url,
    url: endpoint,
    data: data,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  }). catch((err)=>{
    console.error(err);
  })
}

export function deleteData(id, base_url, endpoint){
  const itemEndpoint = `${endpoint}/${id}`;
  axios({
    method: "DELETE",
    baseURL: base_url,
    url: itemEndpoint,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  }). catch((err)=>{
    console.error(err);
  })
}

export function putData(id, data, base_url, endpoint){
  const itemEndpoint = `${endpoint}/${id}`;
  axios({
    method: "PUT",
    baseURL: base_url,
    url: itemEndpoint,
    data: data,
  }).then((response) => {
    console.log(response.status);
    console.log(response.data);
  }). catch((err)=>{
    console.error(err);
  })
}
