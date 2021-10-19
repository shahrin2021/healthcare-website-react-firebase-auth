import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Scedule from '../Scedule/Scedule';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Scedule></Scedule>
        <Services></Services>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;