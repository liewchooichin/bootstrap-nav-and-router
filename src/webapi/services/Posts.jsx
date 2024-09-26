import { useState, useEffect } from "react";
import { getPosts, deletePost } from "./postService";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NewPostForm } from "./NewPostForm";


export function Posts(){

  const [posts, setPosts] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(()=>{
    getPosts()
      .then(function(response){
        console.log(response.status);
        setPosts(response.data);
      })
      .catch(function(err){
        console.log(err)
      });
  }, []);


  function handleDeletePost(postId){  
    // disable other delete buttons
    // while the current request is processed.
    setIsProcessing(true);
    // send the request to delete
    deletePost(postId)
      .then(function(response){
        console.log(response.status);
        // filter the current posts data
        // to remove the id that we want
        // to remove.
        setPosts(
          posts.filter(function(p){
            return p.id !== postId;
          }));
        // After deleting is successful,
        // reset the isProcessing to false
        setIsProcessing(false);
      })
      .catch(function(err){
        console.log(err);
      });
  };

  return(
    <>
    <h1>Getting posts</h1>
    <NewPostForm posts={posts} setPosts={setPosts}></NewPostForm>
    <p>Number of posts: {posts.length}</p>
    <ListGroup>
    {
      posts.map((p)=>(
        <ListGroup.Item key={p.id}>
          <h3>{p.id} {p.title}</h3>
          <p>{p.body}</p>
          <Button
            type="button"
            name="btnDeletePost"
            disabled={isProcessing}
            onClick={()=>handleDeletePost(p.id)}
          >Delete
          </Button>
        </ListGroup.Item>
      ))
    }
    </ListGroup>
    </>
  )
}