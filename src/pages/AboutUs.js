import React from 'react';

import Navbar from '../components/Navbar';
import AboutUsSection from '../components/AboutUsSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='nav-container'>
                <Navbar />
            </div>
            <div className='about-us-title'>
                <span className='mid-head about-us-heading'>About Us</span>
            </div>
            <div className='about-us-component-section'>
                <AboutUsSection />
            </div>
            <div className='about-us-team'>
                <span className='heading-1 meet-team'>MEET OUR TEAM</span>
                <TeamSection />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs
