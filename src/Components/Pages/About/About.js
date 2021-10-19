import React from 'react';
import aboutImg from '../../../image/abour-banner.jpg'
import './About.css'

const About = () => {
    return (
        <div id="about">
            <div className="about-area mb-5">
                <h2 style={{color:'goldenrod'}}>About us</h2>
            </div>

            
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img">
                            <img style={{width:'100%'}} src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                        <h2>About us</h2>
                        <p>we are always give best facalitis to our patients .Seniors and people with disabilities have robust access to medicines in Medicare Part D due in large part to a protection known as the “noninterference clause.” The noninterference clause prohibits the Secretary of Health and Human Services from interfering in the private negotiations – which already occur in Medicare Part D – between pharmaceutical manufacturers and Part D insurance plans or pharmacy benefit managers (PBMs). Unfortunately, some in Congress want to repeal this important element of Part D. Without this protection, government “negotiations” could directly and negatively impact access to lifesaving medicines for patients</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>


    );
};

export default About;