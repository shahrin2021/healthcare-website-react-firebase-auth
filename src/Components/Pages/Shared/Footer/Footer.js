import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="container">
                <h1>SAVEWAY...</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-envelope-minus footer-icon"></i>
                               </div>
                                <div>
                                <p className='email'>shahrinrpi18@gmail.com</p>
                                <p className='email'>shahrin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-phone-alt footer-icon"></i>
                               
                               </div>
                               <div>
                               <p className='email'>+8801796795850</p>
                               <p className='email'>+8801760482215</p>
                               </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                               <div>
                               <i className="uil uil-location-point footer-icon"></i>
                               
                               </div>
                               <div>
                               <p className='email'>Saidpur Rangpur , Bangladesh</p>
                              
                               </div>
                            </div>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to='/home' className='footer-item '>Home</NavLink></li>
                                <li><NavLink  to='/about' className='footer-item '>About us</NavLink></li>
                                <li><NavLink  to='/doctor' className='footer-item '>Doctor</NavLink></li>
                                <li><NavLink  to='/services' className='footer-item '>service</NavLink></li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center ">
                        <div>
                            <h4 className='mb-3'>Send us your feedback</h4>
                            <form action="" >
                                <label htmlFor=""> Name</label>
                                <div className='footer-form'>
                                    <input type="text" />
                                </div>
                                <label htmlFor=""> Phone</label>
                                <div className='footer-form'>
                                    <input type="text" />
                                </div>
                                <label htmlFor=""> Massage</label>
                                <div className='footer'>
                                 <textarea name="" id="" cols="20" rows="10"></textarea>
                                </div>

                            <div className=" mt-4">
                            <button className='btn btn-success'>Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;