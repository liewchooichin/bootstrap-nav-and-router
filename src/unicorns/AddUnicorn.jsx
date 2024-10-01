import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { unicornStructure } from "./unicornStructure";
import { SidebarUnicorn } from "./SidebarUnicorn";
import { postData } from "./utils";
import { useParams } from "react-router-dom";
//import axios from  "axios";
import { ListUnicorns } from "./ListUnicorns";
import { Link, Outlet } from "react-router-dom";

// Name of endpoint is /unicorns
export const currentEndpoint = "/unicorns";

export function AddUnicorn(){

    // if item id is available in the params,
    // then fetch the item id.
    //const params = useParams();
    //const selectedUnicornId = params.unicornId;

    // For sidebar functions. DO NOT MODIFY.
    const [show, setShow] = useState(false);
    function handleClose(){
      setShow(false)
    };
    function handleShow(){
      setShow(true);
    }
  // state of the form
  const [baseUrl, setBaseUrl] = useState("");

  // state 
  const [name, setName] = useState("");
  const [element, setElement] = useState(unicornStructure.element);
  const [power, setPower] = useState(unicornStructure.power);
  // Show the list of items when at least one new item is added.
  const [showListing, setShowListing] = useState(false);

  // change of endpoint
  function handleBaseUrl(e){
    setBaseUrl(e.target.value);
  }
  function handleElement(e){
    const eleId = Number.parseInt(e.target.value);
    // look for the id in the current element list.
    // then return the current target.value.
    const newList = element.map((ele)=>{
      if(ele.elementId===eleId){
        const newElement = {...ele, isElement: true}
        return newElement;
      } else {
        // the state has already toggle
        const newElement = {...ele, isElement: false}
        return newElement;
      }
    })
    setElement(newList);
  }
  function handlePower(e){
    // the pow id selected in the checkboxes
    const powId = Number.parseInt(e.target.value);
    // look for the id the current list,
    // then return the current target.value (checked
    // or not checked).
    const newList = power.map((p)=>{
      if(p.powerId===powId){
        const newPower = {...p, isPower: e.target.checked}
        return newPower;
      } else {
        return p;
      }
    })
    setPower(newList);
  }
  function handleAdd(e){
    const newData = {
      name: name,
      power: power,
      element: element,
    }
    // reset the input fields
    setName("");
    setElement(unicornStructure.element);
    setPower(unicornStructure.power);
    // IMPORTANT: Do NOT turn the data using JSON.
    // Use the new data as it is.
    const current_base_url = baseUrl;
    postData(newData, current_base_url, currentEndpoint);
    // Set the new listing
    //setShowListing(true);
    return;
  }

  return(
    <>
    {/* <Button variant="primary" onClick={handleShow}>
        List Unicorns
      </Button>
    <SidebarUnicorn 
      show={show} 
      handleClose={handleClose}
      baseUrl={baseUrl}
      endpoint={currentEndpoint}
    ></SidebarUnicorn> */}
    

    <h1>Unicorn Land</h1>
    <p>Create unicorns to populate the Unicorn Land.</p>
    <p>Step 1: Go to <a href="https://crudcrud.com/">CrudCrud.com</a> to get
    a new endpoint for the API request.</p>
    <p>Step 2: Create a new unicorn.</p>
    <p>Step 3: Fetch the new unicorn that you have just created.</p>

    <h3>Step 1: Get a new base URL</h3>
    <Form>
      <Form.Group>
      <Form.Label>
        Endpoint from CrudCrud.com.
        <p>It should look like this: <code>https://crudcrud.com/api/e5602554f4524cd7a926a97b3da31ecb</code>
        </p></Form.Label>
      <Form.Control
        type="text"
        id="API-ENDPOINT"
        name="API-ENDPOINT"
        value={baseUrl}
        onChange={handleBaseUrl}
      ></Form.Control>
      <Button className="mb-3"
        type="button"
        id="btnAddUnicorn"
        name="btnAddUnicorn"
      >Create base URL</Button>
      </Form.Group>
      {baseUrl && <p><i>Created base URL {baseUrl}.</i></p>}

      <h3>Step 2: Create a unicorn here.</h3>

      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control 
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Element</Form.Label>
        { element.map((ele)=>(
          <Form.Check
          key={ele.elementId}
          type="radio"
          name="element"
          value={ele.elementId}
          label={ele.elementName}
          checked={ele.isElement}
          onChange={(e)=>{handleElement(e)}}
        ></Form.Check>))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Superpower</Form.Label>
        {
          power.map((p)=>(
          <Form.Check
          key={p.powerId}
          type="checkbox"
          name="power"
          value={p.powerId}
          label={p.powerName}
          checked={p.isPower}
          onChange={(e)=>{handlePower(e)}}
        ></Form.Check>))}
      </Form.Group>
    </Form>
    
    <Button
      type="button"
      onClick={(e)=>handleAdd(e)}
    >Add
    </Button>
    
    <div className="mt-3">
    <h3>Step 3: See the unicorn details.</h3>
    <Button 
      as={Link}
      to="/unicorns/listUnicorns"
      state={{baseUrl: `${baseUrl}`}}
    >List unicorns
    </Button>
    </div>
    </>
  )
}