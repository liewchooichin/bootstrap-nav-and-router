import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Form as RouterForm } from "react-router-dom";


export function AddUnicorn(){
  // state of the form
  const [endpoint, setEndpoint] = useState("https://crudcrud.com/api/22378e23c3b04f13bfc0752bc851140e");

  // change of endpoint
  function handleEndpointChange(e){
    setEndpoint(e.target.value);
  }

  return(
    <>
    <h1>Add a unicorn</h1>
    <h2>Go to <a href="https://crudcrud.com/">CrudCrud.com</a> to get
    a new endpoint for the API request.</h2>

    <RouterForm>
    <Form method="POST">
      <Form.Label>ENDPOINT from CrudCrud.com</Form.Label>
      <Form.Control
        type="text"
        id="API-ENDPOINT"
        name="API-ENDPOINT"
        value={endpoint}
        onChange={handleEndpointChange}
      ></Form.Control>
      <Button 
        type="submit"
        id="btnAddUnicorn"
        name="btnAddUnicorn"
      >Add</Button>
    </Form>

    </RouterForm>
    </>
  )
}