import React from 'react'

import './ResultCard.css'

const ResultCard = ({name, per}) => {
    return (
        <div className='grid-containerRes resCard'>
            <div>
            <span className='light-text'>Candidate Name:</span><br/>
            <span className='heading-1 nameRes'>{name}</span>
            </div>
            <div className='per'>
                <span className='light-text'>% votes</span><br/>
            <span className='heading-1 nameRes'>{per}%</span>
            </div>
        </div>
    )
}

export default ResultCard
