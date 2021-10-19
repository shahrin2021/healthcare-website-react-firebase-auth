import React from 'react';
import { Col } from 'react-bootstrap';

const Medicen = ({madicen}) => {

    const {name, price , company}=madicen
    return (
       
            <Col lg={4} md={6} sm={12}>
            
            <div className='medi-items'>
                <h5>{name}</h5>
                <h6>{company}</h6>
                <p>{price}</p>
                <button className="btn btn-danger">Buy Now</button>
            </div>
            
            </Col>
      
    );
};

export default Medicen;