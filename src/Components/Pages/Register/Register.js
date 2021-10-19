import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import useFirebase from '../../../Hook/useFirebase';
import './Register.css'

const Register = () => {
    const {toggleLogin,setUserName, handleChangeName ,handleEmail ,handlePassword ,handelRegister,user,login, error,handleGoogleSignIn }= useAuth()
    return (
        <div id="register">
            <div className="container">
        <div className="form-area">
  <div className="form-container">
    <div><h2 className='text-white'>{login ? "Please Login" : "Please Register"}</h2></div>
<form onSubmit={handelRegister} className=''>
         {!login && <div className="mb-3">
        <label htmlFor="example" className="form-label text-white">Name</label>
        <input onBlur={handleChangeName} type="text" className=" inputBox w-100 form-control " id="exampleInput1" aria-describedby="nameHelp" required/>
      </div> }
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
        <input  onBlur={handleEmail}type="email" className=" inputBox w-100 form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
      <input onBlur={handlePassword} type="password" className=" inputBox w-100 form-control " id="exampleInputPassword1" required/>
    </div>
      <div className="mb-3 form-check">
        <input onChange={toggleLogin}type="checkbox" className="form-check-input  " id="exampleCheck1"/>
        <label className="form-check-label text-white" htmlFor="exampleCheck1">Already Registered</label>
      </div>
        <div><p className="text-danger">{error}</p></div>
       <div className="text-center">
       <button type="submit" className="btn btn-primary">{login ? "Login" : 'Register'}</button>
       </div>
</form>

<div className='text-center mt-3'>
<button className='btn btn-warning' onClick= {handleGoogleSignIn}>sign in with google</button>
</div>

          </div>
         
        </div>
      
      </div>
        </div>
    );
};

export default Register;