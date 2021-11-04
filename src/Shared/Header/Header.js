import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
  const { user, logOut } = useAuth();
  // console.log('ald', user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <img src={`https://i.ibb.co/PMSk98c/images-removebg-preview.png`} width='100px' height='60px' alt="" />
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/service'>services</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact us </Nav.Link>

              <Nav>
              {user?.email ?
                <NavDropdown title={<b className='text-white'>{user.displayName}</b>} id="basic-nav-dropdown">

                    <NavDropdown.Item as={Link} to='/orders'>My Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/myOrders'>Manage All Orders</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/addService'>Add service</NavDropdown.Item>
                    
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <button onClick={logOut}>Log Out </button>
                  </NavDropdown.Item>
                </NavDropdown> :
                <Nav.Link as={Link} to='/login' className='ps-3-0 m-0'>Login</Nav.Link>
              }
              </Nav>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;