import React, {useContext} from 'react';
import logo from '../statics/Logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from '../utils/AuthContext';
import {VoteContext} from '../utils/VoteContext';
import {auth} from '../utils/Firebase'
import './Navbar.css'

const Navbar = () => {

    const history = useHistory();
    const [user, setUser] = useContext(AuthContext);
    const [voted, setVoted] = useContext(VoteContext);
    const logoutHandler = () =>{
        if(user){
            auth.signOut();
            setUser(null);
            history.push('/');
        }
    }

    return (
        
        <nav>
        <ul>
        <div className='navbar container'>
        <div className="logo">
        <li><Link to='/'><img src={logo} alt='Logo' /></Link></li>
        </div>
        <div className="items">
        <li><Link to={user?'/vote':'/register'}>{user? 'VOTE':'REGISTER'}</Link></li>
        <li><Link to={!user&&'/login'}><div onClick={logoutHandler}>{user? 'LOGOUT':'LOGIN'}</div></Link></li>
        <li><Link to='about-us'>ABOUT</Link></li>
        {voted?<li> <Link to='/explore'>EXPLORE</Link></li>:null}
        </div>
        </div>
        </ul>
        </nav>
        
    )
}

export default Navbar;