import React from 'react'

import './TeamComponent.css'

const TeamComponent = ({name, title, img}) => {
    console.log(name)
    return (
        <div className='team-component'>
            <img className='team-img' src={img} alt='team member' /><br/>
            <span className='heading-1 member-name'>{name}</span>
            <span className='light-text member-title'>{title}</span><br/>
        </div>
    )
}

export default TeamComponent
