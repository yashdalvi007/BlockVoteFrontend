import React from 'react'

import TeamComponent from './TeamComponent';

import './TeamSection.css'

import team1 from '../statics/Team1.png';
import team2 from '../statics/Team2.png';
import team3 from '../statics/Team3.png';

const team = [
    {
        id:1,
        name:'Yash Dalvi',
        title:'Full-stack Developer',
        img : team1
    },
    {
        id:2,
        name:'Pawan Sharma',
        title:'Full-stack Developer',
        img : team2
    },
    {
        id:3,
        name:'Shivam Jaiswal',
        title:'Full-stack Developer',
        img : team3
    }
];

const TeamSection = () => {
    return (
        <div className='flex-container team-section'>
            {team.map((member)=>{
               return(
                <TeamComponent key={member.id} name={member.name} title={member.title} img={member.img} />
            )})}
            
        </div>
    )
}

export default TeamSection
