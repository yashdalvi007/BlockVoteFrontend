import React from 'react';

import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import Landing from '../statics/Landing.svg';
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
            <Link to='/register'><span className='getstarted'>Get Started</span>
            <div className='arrow'><img src={arrow} alt='Arrow' /></div></Link>
            
        </div>
        <div className='image-1'>
            <img src={Landing} alt='Landing Image' />
        </div>
    </div>
    </div>
)
}

export default LandingPage