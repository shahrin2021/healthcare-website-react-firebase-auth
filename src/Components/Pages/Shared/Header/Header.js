import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  >Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
    <Nav className="ms-auto text-center">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to ="/doctor#doctor">Doctor</Nav.Link>
      <Nav.Link as={Link}  to="/booking#booking">Booking</Nav.Link>
      <Nav.Link href="#pricing">Booking</Nav.Link>
      <Nav.Link href="#pricing">Login</Nav.Link>
      <Button className='btn btn-success'>Sign Out</Button>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </div>
    );
};

export default Header;