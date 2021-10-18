import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './Scedule.css'

const Scedule = () => {
    return (
        <div className='sceduleArea'>
            <Container>
                <Row>
                
                    <Col lg={4}>
                    <div className="working-scedule">
                        <p>24/7 hour service</p>
                        <h4 className='mb-3'>Online Appoinment</h4>
                        <p>Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                        <button className= 'booking-btn btn btn-danger'>Make an Appoinment</button>
                    </div>
                    
                    </Col>
                    <Col lg={4}>
                        <div className="working-scedule">
                            <p>Timing Scedule</p>
                            <h4 className='mb-3'>Working hour</h4>
                             <div>
                             <Table striped bordered hover >
                                        <thead>
                                            <tr>
                                          
                                            <th>Day</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                         
                                            <td>Sat-sun</td>
                                            <td>8:00</td>
                                            <td>5:00</td>
                                            </tr>
                                            <tr>
                                         
                                            <td>Mon- Wed</td>
                                            <td>9:00</td>
                                            <td>54:00</td>
                                            </tr>
                                            <tr>
                                   
                                            <td >Thu - Fri</td>
                                            <td> 8:00</td>
                                            <td>5:00</td>
                                            </tr>
                                        </tbody>
                                        </Table>
                                        
                                        </div> 
                        </div>
                    
                    </Col>
                    <Col lg={4}>
                    <div className="working-scedule">
                    <p>Emegency Cases</p>
                    <h4 className='mb-3'>1-800-700-6200</h4>
                    <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                    </div>

                    
                    </Col>
                    </Row>
            </Container>
            
        </div>
    );
};

export default Scedule;