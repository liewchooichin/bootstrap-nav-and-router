import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { getUnicorns } from "./getUnicorn";

export function ListUnicorns(){

  const [data, setData] = useState([]);

  useEffect(()=>{
    let ignore = false;
    if(!ignore){
      getUnicorns()
      .then(response=>{
        setData(response.data);
        console.log("Data\n" + response.data);
        console.log("Status\n" + response.status);
        console.log("Status text\n" + response.statusText);
        console.log("Headers\n" + response.headers);
      });
      
    } 
    // clean up function
    return(()=>{ignore=true; console.log("Clean up.");})
  }, []);
  return(
    <>
    <ListGroup>
      {
        data.map((i)=>(
      <ListGroup.Item key={i._id}>
        Name: {i.name}
      </ListGroup.Item>
      ))
      }
    </ListGroup>
    </>
  )
}
