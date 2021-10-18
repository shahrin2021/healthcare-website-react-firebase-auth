// import Button from '@restart/ui/esm/Button';
// import React from 'react';
// import { Container, Form } from 'react-bootstrap';
// import useFirebase from '../../../Hook/useFirebase';
// import './Register.css'

// const Register = () => {
//     const {handleSubmit,handleEmail ,handlePassword , handleName}= useFirebase()
//     return (
//         <div>
//            <div className="container">
//                <div className="row">
//                <div className="col-lg-8 offset-lg-2">
//                 <form onSubmit={handleSubmit}>
//                 <div class="mb-3">
//                             <label for="exampleInputname" class="form-label">Name</label>
//                             <input onBlur={handleName} type="text" class="form-control" id="exampleInputName"/>
//                         </div>
//                         <div class="mb-3">
//                             <label for="exampleInputEmail1" class="form-label">Email address</label>
//                             <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                         </div>
//                         <div class="mb-3">
//                             <label for="exampleInputPassword1" class="form-label">Password</label>
//                             <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1"/>
//                         </div>
//                         <button type="submit" class="btn btn-primary">Submit</button>
//                         </form>

//                         </div>
//                </div>
//            </div>
//         </div>
//     );
// };

// export default Register;