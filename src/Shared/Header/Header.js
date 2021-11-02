import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
  const { user,logOut } = useAuth();
  console.log('ald',user);
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
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/service'>services</Nav.Link>
              {
                user?.email && <button onClick={logOut}>Log Out </button>
              }
              <b className='text-white pt-2 ps-5'>{user.displayName}</b>
             
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;