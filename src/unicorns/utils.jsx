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
  })
}