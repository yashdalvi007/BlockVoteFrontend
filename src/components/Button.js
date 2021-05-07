import React from 'react'

const Button = ({text}) => {
    return (
        <div className='button'>
            <button type='submit'>{text}</button>
        </div>
    )
}

export default Button
