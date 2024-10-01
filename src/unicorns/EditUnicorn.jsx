import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentEndpoint } from "./AddUnicorn";
import { putData } from "./utils";
import { Link } from "react-router-dom";

export function EditUnicorn(){

  // get the item id
  const params = useParams();
  const unicornId = params.unicornId;
  console.log("In Edit unicorn id " + unicornId);
  
  // get the state from the Link state param
  const {state} = useLocation(); // destructuring
  const baseUrl = state.baseUrl;
  console.log("In Edit base url " + baseUrl);

  // state
  const [name, setName] = useState("");
  const [element, setElement] = useState([]);
  const [power, setPower] = useState([]);
  // Store the original data. It is used for restoring
  // the data when user clicks undo.
  const [originalData, setOriginalData] = useState(null);

  // use effect to get the unicorn item
  useEffect(()=>{
    // setup connection
    let ignore = false;
    console.log(baseUrl);
    const itemEndpoint = `${currentEndpoint}/${unicornId}`;
    console.log("In Edit item endpoint " + itemEndpoint);
    if(!ignore){
      axios({
        method: "GET",
        baseURL: baseUrl,
        url: itemEndpoint,
      }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        // set the state
        setName(response.data.name);
        setElement(response.data.element);
        setPower(response.data.power);
        setOriginalData(response.data);
      }). catch((err)=>{
        console.error(err);
      })
    }
    // clean up
    return(()=>{ignore=true; console.log("Get item -- clean up");})
  }, [baseUrl, unicornId]);

  // event handler
  // event handler
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
  
  function handleSave(e){
    // IMPORTANT: Do NOT put in the _id. Doing so
    // will result in internal server error 500.
    // assemeble the data for the api
    const unicorn = {
      name: name,
      power: power,
      element: element,
    }
    // get the item id for the api utils to form
    // the correct item endpoint
    const originalId = originalData._id;
    // call the api handler to PUT the updated data
    putData(originalId, unicorn, baseUrl, currentEndpoint);
  }

  function handleUndo(e){
    // reset the input fields according to the 
    // original state;
    const originalName = originalData.name;
    const originalPower = originalData.power;
    const originalElement = originalData.element;
    setName(originalName);
    setPower(originalPower);
    setElement(originalElement);
    return;
  }

  return(
    <>
    <h1>Unicorns in Unicorn Land</h1>
    <h3>Edit a unicorn</h3>  
      <h3>{name}</h3>

      <Form>
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
      { 
        element.map((ele)=>(
        <Form.Check
        key={ele.elementId}
        type="radio"
        name="element"
        value={ele.elementId}
        label={ele.elementName}
        checked={ele.isElement}
        onChange={(e)=>{handleElement(e)}
      }
      ></Form.Check>))}
    </Form.Group>

    <Form.Group>
      <Form.Label>Superpower</Form.Label>
      {
        power.map((pow)=>(
        <Form.Check
        key={pow.powerId}
        type="checkbox"
        name="power"
        value={pow.powerId}
        label={pow.powerName}
        checked={pow.isPower}
        onChange={(e)=>{handlePower(e)}}
      ></Form.Check>))}
    </Form.Group>
    </Form>

    <div className="d-flex justify-content-around">
    <Button
      type="button"
      name="btnSave"
      onClick={(e)=>handleSave(e)}
    >Save</Button>

    <Button
      type="button"
      name="btnUndo"
      onClick={(e)=>handleUndo(e)}
    >Undo</Button>

    <Button
      as={Link}
      to="/unicorns/listUnicorns"
      state={{baseUrl: baseUrl}}
    >Close</Button>
    </div>
  </>
 )
}
