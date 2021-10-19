import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hook/useAuth';
import useFirebase from '../../../../Hook/useFirebase';

const Header = () => {
  const {user,error,logOut}=useAuth()
  
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="green" variant="green">
    <Container>
    <Navbar.Brand  >Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
    <Nav className="ms-auto text-center">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to ="/services">Service</Nav.Link>
      <Nav.Link as={Link} to ="/doctor#doctor">Doctor</Nav.Link>
      <Nav.Link as={Link}  to="/booking#booking">Booking</Nav.Link>
      <Nav.Link as={Link} to='/register#register'>Register</Nav.Link>
      {user.email && <p>{user.displayName}</p>}
      { user.email ? <Button onClick={logOut} className='btn btn-success'>Sign Out</Button> : <Nav.Link as={Link} to="/login#login">Login</Nav.Link>
      }
    </Nav>

   
    </Navbar.Collapse>

    </Container>
  </Navbar>
            
        </div>
    );
};

export default Header;