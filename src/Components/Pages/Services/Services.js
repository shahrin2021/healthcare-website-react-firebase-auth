import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shahrin2021/service-data/main/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            

            <div>
                <Container>
                    <h2 className=' service-title text-center my-5'>Top Personalized Health Care Services</h2>
                    <Row>
                        {
                            services.map(service=> <Service key={service.id} service={service}></Service>)
                        }
                    </Row>
                </Container>
            </div>

            
        </div>
    );
};

export default Services;