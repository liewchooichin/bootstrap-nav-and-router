// router
import {LinkContainer} from "react-router-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";


export function Page1(){
  return(
    <>
      <h1>Page 1</h1>
    </>
  )
}

export function Page2(){
  return (
    <>
    <h1>Page 2</h1>
    <Link to="/page2/page21" preventScrollReset={true}>
    <Button>To Page 2-1</Button>
    </Link>

    <Link to="page22" preventScrollReset={true}>
    <Button>To Page 2-2</Button>
    </Link>

    {<Outlet />}
    </>
  )
}

export function Page21(){
  return (
    <>
    <h1>Page 2-1</h1>
    <h2>
    Specify Link to=&quot;/page2/page21&quot; in full.
    </h2>
    </>
  )
}
export function Page22(){
  return (
    <>
    <h1>Page 2-2</h1>
    <h2>Can use Link to=&quot;page22&quot;
      directly. But in the router map, must specify
      the full path.
    </h2>
    </>
  )
}


export function Page3(){
  // from the state in Link
  const loc = useLocation().state;
  
  return (
    <>
    <h1>Action 3</h1>
    <h2>useLocation: {loc.animal}</h2>
    </>
  )
}

export function Page4(){
  return (
    <>
    <h1>Page 4</h1>
    <Link to="/page3" 
      preventScrollReset={true}
      state = {{animal: "pangolin"}}
    >
      <Button>To Page 3</Button>
    </Link>
    </>
  )
}

export function Page5(){
  const params = useParams();
  //console.log(params);

  return (
    <>
    <h1>Action 5</h1>
    </>
  )
}

export function Page6(){
  return (
    <h1>Page 6</h1>
  )
}