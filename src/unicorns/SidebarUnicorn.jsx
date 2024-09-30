import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import PropTypes from "prop-types";
import { AddUnicorn } from "./AddUnicorn";


SidebarUnicorn.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  baseUrl: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
}
export function SidebarUnicorn({show, handleClose, baseUrl, endpoint}) {
  // For sidebar functions. DO NOT MODIFY.
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // on closing
  function onHide(){
    handleClose();
  }

  // Get data.
  const [data, setData] = useState([]);

  // Fetch data
  useEffect(()=>{
    let ignore = false;
    if(!ignore){
      axios({
        method: "GET",
        baseURL: baseUrl,
        url: endpoint,
      })
      .then(response=>{
        setData(response.data);
      })
      .catch((err) => {
        console.error("Error: " + err);
      })
    } 
    // clean up function
    return(()=>{ignore=true; console.log("Clean up.");})
  }, [baseUrl, endpoint]);
  
  return (
    <>
      {/*
      <Button variant="primary" onClick={handleShow}>
        List Unicorns
      </Button>
      */}

      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Unicorn Land</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          List of Unicorns
          <Nav className="flex-column">
          {
          data.map((i) => (
            <Nav.Link key={i._id}
              className="border-bottom" 
              as={Link} 
              to={i._id}
              eventKey={`link-${i._id}`}
            >
                {i.name}
            </Nav.Link>
          ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>


      
    </>
  );
}
