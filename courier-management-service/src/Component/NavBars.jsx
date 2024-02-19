import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function NavBars() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="mt-4">
        <Navbar.Brand href="#home">CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/AboutUs">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact-Us">
              <Nav.Link>Contact-Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/Admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer> */}

            <LinkContainer to="/Services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/Admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer> */}

            {/* <LinkContainer to="/SignUp">
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer> */}

            {/* <LinkContainer to="/Careers">
                            <Nav.Link>Careers</Nav.Link>
                        </LinkContainer> */}

            {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add Courier</NavDropdown.Item>
                             <NavDropdown.Item href="#action/3.2">
                                Courier List
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Update</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                         </NavDropdown> */}

            {/* <NavDropdown title="login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">admin</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.3">user</NavDropdown.Item>
                            
                           
                        </NavDropdown>  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
