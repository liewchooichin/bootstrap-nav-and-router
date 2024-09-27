import { useState, useEffect } from "react";
import { getPosts, deletePost, updatePost } from "./postService";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NewPostForm } from "./NewPostForm";

//initial post
const initialPost = {
  id: 0,
  title: "",
  body: "",
}

export function Posts(){

  const [posts, setPosts] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [editPost, setEditPost] = useState(initialPost);
  
  useEffect(()=>{
    let ignore = false;
    // establish the connection
    if(!ignore){
      getPosts()
        .then(function(response){
          console.log(response.status);
          setPosts(response.data);
        })
        .catch(function(err){
          console.log(err)
        });
    } 
    // clean up
    return (()=>{
      ignore = true;
      console.log("Clean up connection.");
    })
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

  // handle update post
  function handleEditPost(post){
    const newItem = {
      id: post.id,
      title: post.title,
      body: post.body,
    }
    setEditPost(newItem);
  }

  return(
    <>
    <h1>Posts</h1>
    <NewPostForm 
      posts={posts} setPosts={setPosts}
      editPost={editPost} setEditPost={setEditPost}
      ></NewPostForm>
    <h4>Number of posts: {posts.length}</h4>
    <ListGroup>
    {
      posts.map((p)=>(
        <ListGroup.Item key={p.id}>
          <h3>{p.id} {p.title}</h3>
          <p>{p.body}</p>

          <div className="grid text-center">
          <Button
            type="button"
            name="btnEditPost"
            disabled={isProcessing}
            onClick={()=>handleEditPost(p)}
          >Edit
          </Button>

          <Button
            type="button"
            name="btnDeletePost"
            disabled={isProcessing}
            onClick={()=>handleDeletePost(p.id)}
          >Delete
          </Button>
          </div>
        </ListGroup.Item>
      ))
    }
    </ListGroup>
    </>
  )
}