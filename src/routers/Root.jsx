// Router
import { Link, Outlet } from "react-router-dom";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Root() {
  const expand = "md"; // or "md", "lg", "xl"
  return (
    <Container>
      {
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/unicorns">Unicorns</Nav.Link>
                  <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                  <NavDropdown
                    title="Mini projects"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/product-list">
                      Jumble-Jumble Product List</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/quotes">
                      Random Quotes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/webapi">
                      JSONPlaceHolder
                      </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/interesting-places">
                      Interesting places
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sidebar">
                      Page with sidebar
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/page5">
                      Page 5
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }
      
      <Outlet />
    </Container>
  );
}

export { Root };