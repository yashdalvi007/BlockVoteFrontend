import React from 'react'

import './AboutUsComponent.css'

const AboutUsComponent = ({img, title, description, swap}) => {
    return (
        <div className='about-us-component'>
            <div className='flex-container about-us-flex'  style={{flexDirection:swap}}>
                <div className='about-us-content'>
                    <span className='heading-1'>{title}</span><br/>
                    <span className='light-text'>{description}</span>
                </div>
                <div className='about-us-image'>
                    <img src={img} alt='about-us' />
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent
