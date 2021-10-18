import React from 'react';
import { NavLink } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    return (
        <div id='booking'>
            <div className='bookingArea'> 
            <div className='d-flex align-items-center'>
                     <div className='text-center'>
                     <h2 className='booking-title'>Get Appointment</h2>
                    <NavLink className='docMenu' to ='/home'>Home</NavLink>
                    <i className="uil uil-angle-right-b docIcon"></i>
                    <NavLink className='docMenu' to ='/booking'>Booking</NavLink>
                     </div>
                    </div>

            </div>

           
        <div className='booking-container'>
           <div className="container"> 
           <h2 className='text-center booking-subTitle'>Get confarm your Appoinment</h2>
               <div className="row">
                    <div className="col-lg-8 col-md-10 offset-md-1 offset-lg-2 col-12">
                        <form>
                        <div className="row">
                            <div className="col-lg-6">
                            
                                <div class="mb-3">
                                    <label className='lable' for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="" placeholder="your name"/>
                                </div>
                                <div class="mb-3">
                                    <label className='lable' for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="" placeholder="Email address"/>
                                </div>

                                <div class="mb-3">
                                    <label className='lable' for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="" placeholder="Phone"/>
                                </div>
                                
                            </div>
                            <div className="col-lg-6">
                              
                                <div class="mb-3">
                                    <label className='lable'for="exampleFormControlInput1" class="form-label">Date</label>
                                    <input type="date" class="form-control" id="" placeholder="Phone"/>
                                </div>

                                <select class="form-select" aria-label="Default select example">
                                <option selected>select doctor</option>
                                <option value="1">Dr furkan</option>
                                <option value="2">Dr Demit</option>
                                <option value="3">Dr Raja</option>
                                </select>
                                <div class="mb-4">
                                    <label className='lable' for="exampleFormControlInput1" class="form-label">Time</label>
                                    <input type="time" class="form-control" id="" placeholder="Phone"/>
                                </div>


                             
                            </div>
                        </div>

                              <div className='text-center'>
                              <button className="btn btn-warning">Booking Now</button>
                              </div>

                        </form>

                    </div>
               </div>
           </div>
        </div>
            
        </div>
    );
};

export default Booking;