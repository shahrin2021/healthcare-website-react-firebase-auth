import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = () => {
    const {serviceId}= useParams()
    console.log(serviceId)
    const [service, setService]=useState({})

    useEffect(()=>{
        fetch(`/service.json/${serviceId}`)
        .then(res=>res.json())
        .then(data=>console.log(data) )
    },[])


    return (
        <div>
            <div className='service-details-area'>
            <div className='d-flex align-items-center'>
                     <div className='text-center'>
                     <h2 className='docTitle'>Meet Our Qualified Doctors</h2>
                    
                     <NavLink className='docMenu' to ='/home'>Home</NavLink>
                    <i className="uil uil-angle-right-b docIcon"></i>
                    <NavLink className='docMenu' to ='/doctor'>ServiceDetails</NavLink>
             
                   
                     </div>
                    </div>
            </div>

            <Container>

                <Row>
                    <Col lg={6}>
                    <div className='service-img'>
                        <img src="" alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
            <h1>hi{serviceId}</h1>
        </div>
    );
};

export default ServicesDetails;                      