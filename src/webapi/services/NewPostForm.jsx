import { useState } from "react";
import { createPost } from "./postService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export function NewPostForm({posts, setPosts}){
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    // add post
    addPost();
    // reset the form after the request.
    setTitle("");
    setBody("");
  }

  function addPost(){
    createPost({title, body})
      .then(function(response){
        // status: 201
        console.log("create post " + response.status);
        const newData = response.data;
        setPosts([newData, ...posts]);
      })
      .catch(function(err){
        console.error(err);
      })
  }

  return(
    <>
    <h2>Create a new post</h2>
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
      >Add post</Button>
    </Form>
    </>
  );
}