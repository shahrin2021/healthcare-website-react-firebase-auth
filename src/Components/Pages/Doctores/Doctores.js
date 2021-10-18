import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import './Doctores.css'

const Doctores = () => {
    const [doctors , setDoctors]= useState([]);
    useEffect(()=>{
        fetch('./doctor.json')
        .then(res=>res.json())
        .then(data=> setDoctors(data))
    },[])
    return (
        <div id="doctor">

            <div className='doctor-area'>
                    <div className='d-flex align-items-center'>
                     <div className='text-center'>
                     <h2 className='docTitle'>Meet Our Qualified Doctors</h2>
                    <NavLink className='docMenu' to ='/home'>Home</NavLink>
                    <i className="uil uil-angle-right-b docIcon"></i>
                    <NavLink className='docMenu' to ='/doctor'>Doctor</NavLink>
                     </div>
                    </div>
            </div>
            <Container>

                <Row>
                    {
                        doctors.map(doctor=><Doctor
                        
                            key={doctor.id}
                            doctor={doctor}
                        
                        
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctores;