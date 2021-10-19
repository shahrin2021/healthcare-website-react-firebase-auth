import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({children , ...rest}) => {
    const {user,isLoading} = useAuth();
    console.log(user.email)
    if(isLoading){
        return  (<div  style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="danger" />
        </div>);
        
    }
    return (
        <Route 
        {...rest}
        render={({location})=> user.email ? children : <Redirect
        
        to={{
            pathname:"/login",
           state:{from:location}
        }}
        
        >


        </Redirect>}
        
        >
            
        </Route>
    );
};

export default PrivateRoute;