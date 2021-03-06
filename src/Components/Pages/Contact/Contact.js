import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-area">
            <h2 className="contact-title">CONTACT US</h2>
            </div>


            <div className="container">
                <div className="text-center">
                <h2 >GET IN TOUCH </h2>
                <p>we are always glad to help you </p>
                </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="conatct-container">
                    <form action="">
                        <div className="contact-form-area" >
                        <label for="">Name :</label>
                        <input type="text" class="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label for="">Email :</label>
                        <input type="email" class="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label for="">Subject :</label>
                        <input type="text" class="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label for="">Phone :</label>
                        <input type="text" class="form-control" id=""/>
                        </div>
                        <div className="contact-form-area">
                        <label for="">Comment :</label>
                        <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="text-center">
                            <button className ='btn  btn-danger contact-btn'>Send</button>
                        </div>
                    </form>
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;