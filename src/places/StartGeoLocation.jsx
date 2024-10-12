import { useState } from "react";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap/ListGroup";
import { myNavigator } from "./utilsLocation";
import axios


export function StartGeoLocation(){
  // crd is the coor
  const [crd, setCrd] = useState(null);

  function handleLocateMe(e){
    const newCrd = myNavigator();
    if(newCrd){
      setCrd(newCrd);
    }
  }

  return(
    <>
      <h2>Geo Location &mdash; Getting Started</h2>

      <Button
        type="button"
        id="btnLocateMe"
        name="btnLocatedMe"
        onClick={handleLocateMe}
      >Locate me</Button>

    <h3>Your location now</h3>
    <ListGroup>
      <ListGroup.Item>Latitude {crd.latitude}</ListGroup.Item>
      <ListGroup.Item>Longitute{crd.longitute}</ListGroup.Item>
      <ListGroup.Item>More or less {crd.accuracy} metres.</ListGroup.Item>
    </ListGroup>

    </>
  )
}