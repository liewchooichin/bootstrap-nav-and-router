import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const api = axios.create({
  baseURL: BASE_URL,
});

function getPosts(){
  const endpoint = "/posts";
  return axios({
    baseURL: BASE_URL,
    method: "GET",
    url: endpoint,
  });
}

function deletePost(postId){
  const endpoint = `/posts/${postId}`;
  return axios({
    baseURL: BASE_URL,
    method: "DELETE",
    url: endpoint,
  });

}

function createPost(post){
  const endpoint = "/posts";
  return axios({
    baseURL: BASE_URL,
    method: "POST",
    url: endpoint,
    data: post,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}

function updatePost(postId, post){
  const endpoint = `/posts/${postId}`;
  return axios({
    baseURL: BASE_URL,
    method: "PUT",
    url: endpoint,
    data: post,
    headers: {
      'Content-Type':  'application/json; charset=UTF-8',
    },
  })
}

export { api, getPosts, deletePost, createPost, updatePost, };