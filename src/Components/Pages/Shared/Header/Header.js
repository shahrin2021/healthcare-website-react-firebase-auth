import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../Hook/useAuth';
import useFirebase from '../../../../Hook/useFirebase';

const Header = () => {
  const {user,error,logOut,isLoading}=useAuth()
  console.log(user)
  if(isLoading){
    return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
    <Spinner animation="border" variant="danger" />
    </div>);
    
}
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" style={{background:"green"}}>
    <Container>
    <Navbar.Brand  >SaveWay</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
    <Nav className="mx-auto text-center d-flex justify-content-center align-items-center">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
      <Nav.Link as={HashLink} to ="/doctor#doctor">Doctor</Nav.Link>
      <Nav.Link as={HashLink} to ="/doctor#doctor">Doctor</Nav.Link>
      <Nav.Link as={Link}  to="/medicen">Medicens</Nav.Link>
      <Nav.Link as={HashLink} to='/register#register'>Register</Nav.Link>
      <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
      {user?.email && <div>
        <img style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}} src={user.photoURL} alt="" />
        <p className='m-0 ms-3'>{user.displayName}</p>
      </div> }
    
    </Nav>
    { user?.email ? <Button onClick={logOut} className='btn btn-success'>Sign Out</Button> : <Nav.Link as={HashLink} to="/login#login">Login</Nav.Link>
      }

   
    </Navbar.Collapse>

    </Container>
  </Navbar>
            
        </div>
    );
};

export default Header;