import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,id, img}=service;
   
    return (
        <Col lg={4} md={6} sm={12}>
            <div className='service-items'>
            <Card style={{ width: '18rem',textAlign:'center',padding:'5px' }}>
                <Card.Img style={{borderRadius:'10px',
                height:'120px ',objectFit:'cover'
            
            }} variant="top" src={img} />
                    <Card.Body style={{background:'#fff'}}>
                    <Card.Title >{name}</Card.Title>
                    
                <Link style={{textDecoration:'none',fontSize:'20px'}} to={`/service/${id}`}>More Details <i class="uil uil-angle-double-right text-medium"></i></Link>
            </Card.Body>
            </Card> 
               
            </div>
            
        </Col>
    );
};

export default Service;