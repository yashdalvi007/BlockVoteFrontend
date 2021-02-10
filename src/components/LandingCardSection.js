import React from 'react';
import LandingCard from './LandingCard';
import img1 from '../statics/Mid-1.svg';
import img2 from '../statics/Mid-2.svg';
import img3 from '../statics/Mid-3.svg';

import './LandingCardSection.css'

const LandingCardSection = () => {
    return (
        <div className='landing-card-section'>
            <LandingCard img={img1} text='Secure'/>
            <LandingCard img={img2} text='Fast'/>
            <LandingCard img={img3} text='Private'/>
        </div>
    )
}

export default LandingCardSection
