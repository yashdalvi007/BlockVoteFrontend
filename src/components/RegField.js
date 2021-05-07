import React from 'react'

import './RegField.css'

const RegField = ({label, placeholder, type}) => {
    return (
        <div className='reg-field'>
            <div className='div-label'><span className='heading-1 reg-label'>{label}</span></div>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}

export default RegField
