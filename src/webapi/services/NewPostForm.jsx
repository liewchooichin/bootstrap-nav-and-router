import { useState, useEffect } from "react";
import { createPost } from "./postService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { updatePost } from "./postService";


NewPostForm.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
  setPosts: PropTypes.func.isRequired,
  editPost: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  setEditPost: PropTypes.func.isRequired,
}
export function NewPostForm({
  posts, setPosts,
  editPost, setEditPost,
}){
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // set the state for editing post
  useEffect(() => {
    // if there is an editing post
    if(editPost){
      setTitle(editPost.title);
      setBody(editPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editPost])

  function handleSubmit(e){
    e.preventDefault();
    
    if(editPost){
      // edit post
      requestEditPost();
    } else {
      // add post
      requestAddPost();
    }
    
    // reset the form after the request.
    setTitle("");
    setBody("");
    setEditPost("");
  }

  function requestAddPost(){
    createPost({title, body})
      .then(function(response){
        // status: 201
        console.log("create post " + response.status);
        const newData = response.data;
        // manually update the state because
        // we are using an mock api.
        setPosts([newData, ...posts]);
      })
      .catch(function(err){
        console.error(err);
      })
  }
  function requestEditPost(){
    const newPost = {
      id: editPost.id,
      title: title, 
      body: body
    };
    updatePost(editPost.id, newPost)
      .then(function(response){
        console.log("update post: " + response.status);
        // manually update the state because
        // we are using an mock api.
        const newItem = response.data;
        const newList = posts.map(function(p){
          if(p.id===editPost.id){
            return newItem;
          } else {
            return p;
          }
        })
        setPosts(newList);
      })
      .catch(function(err){
        console.error(err);
      })
  }


  return(
    <>
    <h2>{editPost ? "Edit a post" : "Create a new post"}</h2>
    <h3>Post id: {editPost ? editPost.id : ""}</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
        name="inputTitle"
        type="text"
        value={title}
        onChange={(e)=>(setTitle(e.target.value))}
      ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Your post</Form.Label>
        <Form.Control
          name="inputBody"
          as="textarea" rows={3}
          value={body}
          onChange={(e)=>(setBody(e.target.value))}
        ></Form.Control>
      </Form.Group>

      <Button
        name="btnCreate"
        type="submit"
        onSubmit={(e)=>handleSubmit(e)}
      >
        {editPost ? "Edit post" : "Add post"}
      </Button>
    </Form>
    </>
  );
}