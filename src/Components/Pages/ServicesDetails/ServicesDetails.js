import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './ServicesDetails.css'

const ServicesDetails = () => {
    const {id}= useParams()

    const [service, setService]=useState([])
    // const [singleService , setSingleService]=useState({})
   
  useEffect(()=>{
      fetch(`https://raw.githubusercontent.com/shahrin2021/service-data/main/service.json`)
      .then(res=>res.json())
      .then(data=>{
        setService(data)
        console.log(data)
      })
  } ,[id])

const serviceItem = service.filter(item=> item.id === id)



  


console.log(serviceItem)
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
                      
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='service-img'>
                    { service.name}
                        
                    </div>
                    </Col>
                </Row>
            </Container>


         
        </div>
    );
};

export default ServicesDetails;                      