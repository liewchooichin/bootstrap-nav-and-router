import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from "react-bootstrap/Nav";


function PageWithSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sidebar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link className="border-bottom" as={Link} to="page6">Page 6</Nav.Link>
            <Nav.Link className="border-bottom" as={Link} to="page5" eventKey="link-1">Page 5</Nav.Link>
            <Nav.Link className="border-bottom" as={Link} to="page4" eventKey="link-2">Page 4</Nav.Link>

            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Outlet />
    </>
  );
}

export { PageWithSidebar };