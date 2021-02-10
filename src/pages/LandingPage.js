import React from 'react';

import LandingCardSection from '../components/LandingCardSection';
import Navbar from '../components/Navbar';

import Landing from '../statics/Landing.svg';
import Landing2 from '../statics/Landing_2.svg';
import arrow from '../statics/Arrow.svg';

import './LandingPage.css'

const LandingPage = () =>{
return(
    <div className='container'>
        <Navbar/>
    <div className='flex-container landing'>
        <div className='content'>
            <span className='heading-1 landing-heading'>Now vote on a click.</span><br/>
            <div className='sm-description'><span className='light-text'>BlockVote presents a secure way to cast your vote for your favorite candidate from the comfort of your couch.</span></div><br/>
            <span className='getstarted'>Get Started</span>
            <div className='arrow'><img src={arrow} alt='Arrow' /></div>
        </div>
        <div className='image-1'>
            <img src={Landing} alt='Landing Image' />
        </div>
    </div>
    <div className='landing-mid'>
    <span className='heading-1 mid-heading'>Now vote from the leisure of your couch.</span>
    <div className='flex-container mid-section'>
        <div>
            <span className='mid-head'>NO QUEUES.</span><br />
            <span className='mid-head'>NO TAMPERING.</span>
            <LandingCardSection />
        </div>
        <div className='svg2'>
        <img src={Landing2} />
        </div>
    </div>
    </div>
    </div>
)
}

export default LandingPage