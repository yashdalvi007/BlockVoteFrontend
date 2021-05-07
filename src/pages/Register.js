import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import register_img from '../statics/Register.svg'
import logo from '../statics/Logo.svg'
import { Link } from 'react-router-dom';
import {Alert} from 'react-alert';
import {auth} from '../utils/Firebase'
import axios from 'axios';

import './Register.css'

const Register = () => {
    const history = useHistory(); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                const data = JSON.stringify({email:email, password:password});
                const reg_url = 'http://localhost:5000/register/'
                try{axios({
                    method: 'POST',
                    url: reg_url,
                    headers: {
                        'Content-Type': 'application/json',
                            },
                    data: data,
                })
                .then(response => {
                    alert('Your secret key for voting will be given shortly. Keep this key secure at all costs, as without this you will not be allowed to vote')
                    alert(response.data.ENC_KEY);
                })}
                catch(e){
                    console.log(e)
                }
            }
        })
    }

    return (
        <div className='flex-container register-flex'>
            <div className='flex-container left-flex'>
                <div className='reg-logo'><Link to='/'><img src={logo} /></Link></div>
                <span className='heading-1 reg-logo-text'>Voting for the digital generation.</span>
                <img className='reg-img' src={register_img} />
            </div>
            <div className='right-flex'>
                <div className='right-flex-head'>
                <span className='heading-1 reg-heading'>Sign Up to BlockVote</span><br/>
                <span className='light-text reg-text'>Already registered? <Link to='/login'>Login</Link></span>
                </div>
                <div className='reg-flex-field'>
                <form onSubmit={onSubmitHandler}>
                <div className='div-label'><span className='heading-1 reg-label'>Name:</span></div>
                <input placeholder='First and last name' value={name} type='text' onChange={e=>setName(e.target.value)} required />
                <div className='div-label'><span className='heading-1 reg-label'>Email:</span></div>
                <input placeholder='xyz@gmail.com' value={email} type='email' onChange={e=>setEmail(e.target.value)} required />
                <div className='div-label'><span className='heading-1 reg-label'>Password:</span></div>
                <input placeholder='********' value={password} type='password' onChange={e=>setPassword(e.target.value)} required/><br/>
                <div className='div-but'>
                <input type='submit' value='Submit' className='btn'/>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register
