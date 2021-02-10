import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
        <div className='flex-container footer-component'>
            <div>
                <span className='heading-1 footer-logo'>BLOCKVOTE</span>
            </div>
            <div>
                <span className='heading-1 footer-copyright'>&#169; Copyright 2021 BlockVote. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
