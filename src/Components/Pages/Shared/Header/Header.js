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
    <Navbar collapseOnSelect expand="lg" style={{background:"skyblue" ,opcity:".1"}}>
    <Container>
    <Navbar.Brand style={{fontSize:'40px',color:'#10feab'}}  >SaveWay<sub style={{fontSize:"14px",color:"orange"}}>.clinic</sub></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
    <Nav className="mx-auto text-center d-flex justify-content-center align-items-center">
      <Nav.Link style={{fontSize:'20px',color: '#090909'}} as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link style={{fontSize:'20px',color: '#090909'}} as={HashLink} to="/about#about">About</Nav.Link>
      <Nav.Link style={{fontSize:'20px',color: '#090909'}} as={HashLink} to="/booking#booking">Booking</Nav.Link>
      <Nav.Link style={{fontSize:'20px',color: '#090909'}} as={HashLink} to ="/doctor#doctor">Doctor</Nav.Link>
      <Nav.Link  style={{fontSize:'20px',color: '#090909'}} as={Link}  to="/medicen">Medicens</Nav.Link>
      <Nav.Link style={{fontSize:'20px',color: '#090909'}} as={HashLink} to='/register#register'>Register</Nav.Link>
      <Nav.Link style={{fontSize:'20px',color: '#090909'}}as={Link} to='/contact'>Contact</Nav.Link>
      {user?.email && <div className="d-flex align-items-center ms-1 ">
        <div  style={{width:'45px',height:'45px',borderRadius:'50%',border:'2px solid #ddd'}}>
        <img style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}} src={user.photoURL} alt="" />
        </div>
        <p className='m-0 ms-1'>{user.displayName}</p>
      </div> }
    
    </Nav>
   <div className='text-center'>
   { user?.email ? <Button onClick={logOut} className='btn btn-success'>Sign Out</Button> : <Nav.Link style={{fontSize:'20px',color: '#090909'}}  as={HashLink} to="/login#login">Login</Nav.Link>
      }
   </div>

   
    </Navbar.Collapse>

    </Container>
  </Navbar>
            
        </div>
    );
};

export default Header;