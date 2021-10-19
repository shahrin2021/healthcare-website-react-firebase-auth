import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Medicen from '../Medicin/Medicen';
import './Medicens.css'

const Medicens = () => {

    const [medicins , setMedicens]= useState([])
    useEffect(()=>{
        fetch('./medicen.json')
        .then(res=>res.json())
        .then(data=> setMedicens(data) )
    },[])
    return (
        <div>
            <div className="medicen-area mb-5">
                    <h2 className='text-danger'>Our Medicen Store</h2>
            </div>
            <Container>
                <Row>
                    {
                       medicins.map(madicen=> <Medicen key={madicen.name} madicen={madicen}></Medicen>) 
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Medicens;