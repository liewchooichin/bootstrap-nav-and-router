import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { unicornStructure } from "./unicornStructure";
import { SidebarUnicorn } from "./SidebarUnicorn";
import { powers, elements } from "./unicornStructure";
import { initialPower, initialElement } from "./unicornStructure";

// create a context
import { createContext } from "react";
const EndpointContext = createContext(null);

export function AddUnicorn(){
    // For sidebar functions. DO NOT MODIFY.
    const [show, setShow] = useState(false);
    function handleClose(){
      setShow(false)
    };
    function handleShow(){
      setShow(true);
    }
  // state of the form
  const [endpoint, setEndpoint] = useState("");

  // state 
  const [name, setName] = useState("");
  const [element, setElement] = useState(unicornStructure.element);
  const [power, setPower] = useState(unicornStructure.power);
  const dummy = {
    id: 111, name:"dummy",
    element: {id: elements[0].id, elementName:elements[0].name, isElement: true},
    power: [{id: powers[0].id, powerName:powers[0].name, isPower: true}],
  }
  const [data, setData] = useState(null);

  // change of endpoint
  function handleEndpoint(e){
    setEndpoint(e.target.value);
  }
  function handleElement(e){
    const eleId = Number.parseInt(e.target.value);
    const ele = elements.find((e)=>(e.id===eleId));
    const newElement = {
      id: eleId,
      elementName: ele.name,
      isElement: e.target.checked,
    }
    setElement(newElement);
  }
  function handlePower(e){
    const powId = Number.parseInt(e.target.value);
    const pow = powers.find((p)=>(p.id===powId));
    // if the power has already existed, removed it.
    let currentPower = power;
    // if the checkbox is cleared, remove the power from
    // the current power state
    if(!e.target.checked){
      currentPower = currentPower.filter((p)=>(p.id!==pow.id));
      setPower(currentPower);
    }
    else{
    // create a new power
    const newPower = {
      id: powId,
      powerName: pow.name,
      isPower: e.target.checked,
    }
    let newPowerList;
    // the list has items in it.
    if(power.length > 0)
      newPowerList = [...currentPower, newPower];
    // this is a new list
    if(power.length === 0)
      newPowerList = [newPower];
    setPower(newPowerList);
    }
  }
  function handleAdd(e){
    const newData = {
      name: name,
      power: power,
      element: element,
    }
    console.log(newData);
    setData(newData);
    // reset the input fields
    setName("");
    setElement(initialElement);
    setPower(initialPower);
    return;
  }

  return(
    <>
    {/* For sidebar */}
    <Button variant="primary" onClick={handleShow}>
        List Unicorns
      </Button>

    <SidebarUnicorn 
      show={show} 
      handleClose={handleClose}
      endpoint={endpoint}
    ></SidebarUnicorn>

    <h1>Unicorn Land</h1>
    <p>Create unicorns to populate the Unicorn Land.</p>
    <p>Step 1: Go to <a href="https://crudcrud.com/">CrudCrud.com</a> to get
    a new endpoint for the API request.</p>
    <p>Step 2: Create a new unicorn.</p>
    <p>Step 3: Fetch the new unicorn that you have just created.</p>

    <Form method="POST">
      <Form.Group>
      <Form.Label>Endpoint from CrudCrud.com.
        <p>It should look like this: <code>https://crudcrud.com/api/e5602554f4524cd7a926a97b3da31ecb</code>
        </p></Form.Label>
      <Form.Control
        type="text"
        id="API-ENDPOINT"
        name="API-ENDPOINT"
        value={endpoint}
        onChange={handleEndpoint}
      ></Form.Control>
      <Button className="mb-3"
        type="submit"
        id="btnAddUnicorn"
        name="btnAddUnicorn"
      >Create endpoint</Button>
      </Form.Group>

      <h3>Create a unicorn here.</h3>

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
        { elements.map((e)=>(
          <Form.Check
          key={e.id}
          type="radio"
          name="element"
          value={e.id}
          label={e.name}
          onChange={(e)=>{handleElement(e)}}
        ></Form.Check>))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Superpower</Form.Label>
        {
          powers.map((p)=>(
          <Form.Check
          key={p.id}
          type="checkbox"
          name="power"
          value={p.id}
          label={p.name}
          onChange={(e)=>{handlePower(e)}}
        ></Form.Check>))}
      </Form.Group>
    </Form>

    <Button
      type="button"
      onClick={(e)=>handleAdd(e)}
    >Add</Button>

    </>
  )
}