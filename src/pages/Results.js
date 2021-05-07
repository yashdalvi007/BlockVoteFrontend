import React, {useState, useEffect} from 'react'
import Chart from '../components/Chart'
import ResultCard from '../components/ResultCard'
import Navbar from '../components/Navbar'
import axios from 'axios';

import './Results.css'

const Results = () => {
    const [a, setA] = useState(0)
    const [b, setB] =  useState(0)
    useEffect(() => {      
    try{axios({
        method: 'GET',
        url: 'http://localhost:5000/poll',
    })
    .then(response => {
        setA(response.data["b5e779be30d096e1f9d5b19cfa7e191f7eae180e83a5077f00b57649194731fd"])
        setB(response.data["a734f84147ca4902d1a2c86d6ac977499203223a60bf7a82da47a30679c8b822"])
    })}
    catch(e){
        console.log(e)
    }
});

    return (
        <div>
        <Navbar />
        <div className='flex-container result'>
            <div><ResultCard name="Joe Biden" per={((a/(a+b))*100).toFixed(2)} />
            <ResultCard name="Donald Trump" per={((b/(a+b))*100).toFixed(2)} /></div>
            <div className='chart1'><Chart a={a} b={b} /></div>
        </div>
        </div>
    )
    
}

export default Results
