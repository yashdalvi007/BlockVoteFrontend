import React,{useEffect, useState} from 'react';

import VoteComponent from '../components/VoteComponent';
import Navbar from '../components/Navbar';

import biden from '../statics/biden.jpg';
import trump from '../statics/trump.jpg';

const Vote = () => {

    const calculateTimeLeft = () =>{
        var d = new Date(2021, 4, 7, 17, 00, 00);
        var d2 = new Date()
        let diff = d.getTime()-d2.getTime()
        console.log(d)
        console.log(d2)
        var timeLeft1 = {};

        if (diff > 0) {
        timeLeft1 = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
        }
        return timeLeft1
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });

      const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }

    timerComponents.push(
        <span>
        {timeLeft[interval]} {interval}{" "}
        </span>
    );
    });

    return (
        <div>
            <Navbar />
            <div className='vote-heading'>
                <span className='heading-1'>Vote for your favorite candidate!!</span><br/>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
        <div classname='vote-section'>
            <VoteComponent img={biden} name='Joe Biden' party='Democrats' description='Biden has supported campaign finance reform including the Bipartisan Campaign Reform Act and overturning Citizens United; the 1994 Violent Crime Control and Law Enforcement Act; the American Recovery and Reinvestment Act of 2009; student tax credits; carbon emissions cap and trade; the increased infrastructure spending proposed by the Obama administration; mass transit; renewable energy subsidies; student loan forgiveness; and reversals of Republican tax cuts for the wealthy and corporations. He supports building upon the Affordable Care Act through a public health insurance option instead of a single-payer system. He supports decriminalizing cannabis at the federal level and the right for states to legalize it.' />
            <VoteComponent img={trump} name='Donald Trump' party='Republicans' description='As president, Trump has pursued sizable income tax cuts, deregulation, increased military spending, rollbacks of federal health-care protections, and the appointment of conservative judges consistent with conservative (Republican Party) policies. However, his anti-globalization policies of trade protectionism cross party lines. In foreign affairs he has described himself as a nationalist. Trump has said that he is "totally flexible on very, very many issues."' />
        </div>
        </div>
    )
}

export default Vote
