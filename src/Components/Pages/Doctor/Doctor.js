import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name, img, expart}=doctor
    return (
        <Col lg={4} md={6} sm={12} >
            <Card style={{ width: '18rem' }} className='mb-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {expart}
                    </Card.Text>
                    <Link to='/booking'>
                    <Button className='btn btn-success' variant="primary">Get Appoinment</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;