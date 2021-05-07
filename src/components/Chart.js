import React from 'react';
import {Bar} from 'react-chartjs-2';


const Chart = ({a,b}) => {
const state = {
    labels: ['Joe Biden', 'Donald Trump'],
    datasets: [
      {
        label: 'Votes',
        backgroundColor: 'rgba(38, 70, 83,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [Number(a),Number(b)]
      }
    ]
  }
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Vote polls',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }

  export default Chart