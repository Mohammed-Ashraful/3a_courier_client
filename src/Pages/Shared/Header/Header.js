import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <img src={`https://i.ibb.co/gyVQ0Sb/neurology.jpg`} width='50px' alt="" />
            </Nav>
            <Nav>
              <Nav.Link to='/home'>Home</Nav.Link>
             
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;