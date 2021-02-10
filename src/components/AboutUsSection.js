import React from 'react';

import AboutUsComponent from './AboutUsComponent';

import ab1 from '../statics/ab1.svg';
import ab2 from '../statics/ab2.svg';
import ab3 from '../statics/ab3.svg';

import './AboutUsSection.css';

const AboutUsSection = () => {
    return (
        <div className='about-us-section'>
            <AboutUsComponent img={ab1} 
            title='Who are we?' 
            description='We are a small team of developers who came together with a perspective of building a safe and trust worthy system for using digital platforms for voting.'
            swap='row'
            />
            <AboutUsComponent img={ab2} 
            title='What do we provide?' 
            description='We work to provide a platform which is completely decentralized and trustworthy for users as well as administrators creating an ecosystem of trust among all.'
            swap='row-reverse'
            />
            <AboutUsComponent img={ab3} 
            title='What makes us so secure?' 
            description='Our security system design of using safe and unbreachable algorithms with keyed cryptography along with leveraging blockchain technology is what makes our system so secure to use and trustworthy. Safety of users and privacy are the performance standards we never take for granted while providing services.'
            swap='row'
            />
        </div>
    )
}

export default AboutUsSection
