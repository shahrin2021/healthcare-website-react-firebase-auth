import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'


const Banner = () => {
    return (
        <div  className='bannerArea'>
           <Container>
           <div className='banner-text'>
               <div className='bannerBar'></div>
               <h6>TOTAL HEALTH CARE SOLUTION</h6>
               <h1>Your Most Trusted Health Partner</h1>
               <p>We provide best leading medicle service to our patiant.</p>
           </div>
           <Link to='/booking'>
           
           <button className='bannerBtn btn btn-danger'>Make an Appoinment <i className="uil uil-arrow-right banner-icon"></i></button>
           </Link>
           </Container>
        </div>
    );
};

export default Banner;