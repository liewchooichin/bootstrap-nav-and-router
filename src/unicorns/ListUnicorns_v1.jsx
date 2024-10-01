import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

ListUnicorns.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
}
export function ListUnicorns({baseUrl, endpoint}){

  // state 
  const [name, setName] = useState("");
  const [element, setElement] = useState([]);
  const [power, setPower] = useState([]);  
  const [data, setData] = useState([]);
  // editing the form
  const [isEdit, setIsEdit] = useState(false);
  
  useEffect(()=>{
    // If the item id is available in the params url
    let ignore = false;
    if(!ignore){
      axios({
        method: "GET",
        baseURL: baseUrl,
        url: endpoint,
      }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        setData(response.data);
      }).catch((err) => {
        console.error(err);
      })
    }
    // clean up
    return (()=>{ignore=true; console.log("Clean up")})
  }, [baseUrl, endpoint]);
  
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

  // handle save, edit, undo
  function handleEdit(e){
    // set edit is true
    setIsEdit(true);
    // set the input fields to the
    // state variables
    // find the corresponding item.
    
  }
  function handleSave(e){
    // after saving, reset the edit
    // button to false
    setIsEdit(false);

    // send PUT request
  }
  function handleUndo(e){
    // revert the data to the original
    // one at the initially loaded data.
    return;
  }
  function handleDelete(e){
    setIsEdit(false);
    return;
  }

  

  return(
    <>
    <h1>Unicorns in Unicorn Land</h1>
    <ListGroup>
      {
        data.map((i)=>(
      <ListGroup.Item key={i._id}>
        <h3>{i.name}</h3>
        <Form>
        <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control 
          type="text"
          id="name"
          name="name"
          value={i.name}
          disabled={!isEdit}
          onChange={(e)=>{setName(e.target.value)}}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Element</Form.Label>
        { 
          i.element.map((ele)=>(
          <Form.Check
          key={ele.elementId}
          type="radio"
          name="element"
          value={ele.elementId}
          label={ele.elementName}
          checked={ele.isElement}
          disabled={!isEdit}
          onChange={(e)=>{handleElement(e)}}
        ></Form.Check>))}
      </Form.Group>

      <Form.Group>
        <Form.Label className="fw-bold">Superpower</Form.Label>
        {
          i.power.map((pow)=>{
            if(pow.isPower){
              return (
              <ul style={{list-style-type: "✧"}}>
              <li>{pow.powerName}</li>
              </ul>
            )}
          })}
      </Form.Group>
      </Form>
      
      {!isEdit && (
        <Button
          type="button"
          name="btnEdit"
          onClick={(e)=>handleEdit(e, i._id)}
        >Edit</Button>
      )}
      {!isEdit && (
        <Button
          type="button"
          name="btnEdit"
          onClick={(e)=>handleDelete(e)}
        >Delete</Button>
      )}
      {isEdit && (
        <Button
          type="button"
          name="btnEdit"
          onClick={(e)=>handleSave(e)}
        >Save</Button>
      )}
      {isEdit && (
        <Button
          type="button"
          name="btnEdit"
          onClick={(e)=>handleUndo(e)}
        >Undo</Button>
      )}

      </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  )
}
