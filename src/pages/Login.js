import React, {useState, useContext} from 'react'
import login_img from '../statics/Login.svg'
import logo from '../statics/Logo.svg'
import { Link } from 'react-router-dom';

import {auth} from '../utils/Firebase'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../utils/AuthContext';

import './Login.css'

const Register = () => {

    const [user, setUser] = useContext(AuthContext);

    const history = useHistory(); 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = e =>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            if(auth){
            setUser(auth);
            history.push('/')
            }
        })
        .catch(e => alert('Somethings not right'))
    }

    return (
        <div className='flex-container register-flex'>
            <div className='flex-container left-flex'>
                <div className='reg-logo'><Link to='/'><img src={logo} /></Link></div>
                <span className='heading-1 reg-logo-text'>Voting for the digital generation.</span>
                <div className='login-text'>
                <span className='heading-1 login-heading'>Login to vote!!</span><br/>
                <span className='light-text login-text'>Don't have an account yet? <Link to='/register'>Register</Link></span>
                </div>
                <img className='reg-img' src={login_img} />
            </div>
            <div className='right-flex'>
                <div className='form-container'>
            <form onSubmit={onSubmitHandler}>
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
