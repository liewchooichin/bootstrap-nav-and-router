import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { currentEndpoint } from "./AddUnicorn";
import { deleteData } from "./utils";


/* ListUnicorns.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
} */
export function ListUnicorns(/*{baseUrl, endpoint} */){

  // get the base url of the api server
  const {state} = useLocation();
  const baseUrl = state.baseUrl;
  console.log("List unicorns " + baseUrl);
  // state 
  const [name, setName] = useState("");
  const [element, setElement] = useState([]);
  const [power, setPower] = useState([]);  
  const [data, setData] = useState([]);
  // editing the form
  const [isDelete, setIsDelete] = useState(false);
  
  useEffect(()=>{
    // get the whole list of unicorns.
    let ignore = false;
    if(!ignore){
      // reset the delete state to false
      setIsDelete(false);
      axios({
        method: "GET",
        baseURL: baseUrl,
        url: currentEndpoint,
      }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        setData(response.data);
      }).catch((err) => {
        console.error(err);
      })
    }
    // clean up
    return (()=>{
      ignore=true; 
      console.log("Clean up")})
  }, [baseUrl]);

  function handleDelete(e, _id){
    setIsDelete(true);
    // Call the utils to DELETE the
    // item from the api library.
    deleteData(_id, baseUrl, currentEndpoint);
    return;
  }

  return(
    <>
    <h1>Unicorns in Unicorn Land</h1>
    
    <Outlet />

    <ListGroup>
      {
        data.map((i)=>(
        <ListGroup.Item key={i._id}>
        <h3>{i.name}</h3>
        <h4>Element</h4>
        {
          i.element.map((ele)=>{
            if(ele.isElement){
            return(
              <ul key={ele.elementId} style={{listStyleType: "✨"}}>
                <li>{ele.elementName}</li>
              </ul>
            )}
          })
        }
        
        <h4>Superpowers</h4>
        {
          i.power.map((pow)=>{
            if(pow.isPower){
              return (
              <ul key={pow.powerId} style={{listStyleType: "❇"}}>
              <li>{pow.powerName}</li>
              </ul>
            )}
          })}
      
        <div className="d-flex justify-content-around">
        <Button
            as={Link}
            to={`/unicorns/editUnicorn/${i._id}`}
            state={{ baseUrl: `${baseUrl}` }}
        >Edit</Button>
      
        <Button
          type="button"
          name="btnDelete"
          onClick={(e)=>handleDelete(e, i._id)}
        >Delete</Button>
        </div>
      </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  )
}
