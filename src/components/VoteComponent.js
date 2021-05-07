import React,{useContext} from 'react';
import axios from 'axios';
import {VoteContext} from '../utils/VoteContext';
import {AuthContext} from '../utils/AuthContext';
import './VoteComponent.css';

const VoteComponent = ({img, name, party, description}) => {

    const [user, setUser] = useContext(AuthContext);
    const [voted, setVoted] = useContext(VoteContext);
    const voteHandler = () =>{
        const key = prompt('Enter your secret key.')
        const data = {email:user.user.email, key:key, votedFor:name}
        try{axios({
            method: 'POST',
            url: 'http://localhost:5000/vote',
            headers: {
                'Content-Type': 'application/json',
                    },
            data: data,
        })
        .then(response => {
            if(response.data.message=='Your vote has been recorded. Thank you for voting!'){
                setVoted(true)
                alert('Your vote has been recorded. Thanks for voting.')
            }
            else{
            alert('Something went wrong! You either entered a wrong key or you have already voted!')
            }
        })}
        catch(e){
            console.log(e)
        }
    }

    return (
        <div className='grid-container vote-component'>
            <div>
                <img className='candidate-img' src={img}/>
            </div>
            <div className='candidate-details'>
                <span className='heading-1 candidate-name'>{name}</span><br/>
                <span className='heading-1 political-party'>Political party: {party}</span><br/>
                <div style={{paddingTop:'5px'}}><span className='light-text agenda'>General Agenda: {description}</span></div>
            </div>
            <div className='vote-button'>
                <button className='btn btn-vote' onClick={voteHandler}>Vote</button>
            </div>
        </div>
    )
}

export default VoteComponent
