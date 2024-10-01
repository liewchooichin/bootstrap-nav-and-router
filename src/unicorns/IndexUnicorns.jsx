import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


export function IndexUnicorns(){

  return(
    <>
    <h2>Welcome to the Unicorn Land.</h2>
    <p>Add some unicorns to get started.</p>
    <Button
      as={Link}
      to={`addUnicorn`}
    >Add a unicorn
    </Button>
    <Outlet />
    </>
  )
}
