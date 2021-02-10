import React from 'react';

import './LandingCard.css'

const LandingCard = ({img, text}) => {
    return (
        <div className='landing-card'>
            <img src={img} />
            <p className='landing-card-text'>{text}</p>
        </div>
    )
}


export default LandingCard;