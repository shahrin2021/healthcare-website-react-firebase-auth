import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
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
           <button className='bannerBtn btn btn-danger'>Make an Appoinment <i className="uil uil-arrow-right banner-icon"></i></button>
           </Container>
        </div>
    );
};

export default Banner;