import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Container} from './styles';


const Graph = ()=>{
  const defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'right',
    location:'City'
  }

  const chartData = {
        labels: ['254', '254', '254', '254', '254', '254'],
        datasets:[
          {

            data:[
            2555.224,
            2555.227,
            2555.229,
            2555.322,
            2555.224,
            2555.227
            ],
            backgroundColor:'#282544'
          }
        ]
      }

  return(
    <Container>
    <div className="graph">
    <Line
            data={chartData}
            options={{
              title:{
                display:defaultProps.displayTitle,
                fontSize:25
              },
              legend:{
                display:defaultProps.displayLegend,
                position:defaultProps.legendPosition
              }
            }}
          />
    </div>
    <div className="marked_order">
    <div>
    <div className='headers'><span>Market order</span><span>Limit order</span><span>Stop order</span></div>
    </div>

    <div className='table-secttion'>
    <div className='left-table'>
   <div className='table-items'><span><img src="/quick.png" className='q-icon' />Quick buy</span></div>
   <div className='table-items'><span>I want to buy</span><span className='spec'>25544.25545</span><span className='ETH'>ETH</span><span style={{color:' #282544'}}>dommmm</span></div>

   <div className='table-items'><span>I want to buy</span><span className='spec'>25544.25545</span><span className='ETH'>ETH</span><span className='buy'>Buy</span></div>

    </div>
    <div className='right-table'>

    <div className='table-items'><span><img src="/quick.png" className='q-icon' />Quick Sell</span></div>
    <div className='table-items'><span>I want to buy</span><span className='spec'></span><span className='ETH'>ETH</span><span style={{color:' #282544'}}>domm</span></div>

    <div className='table-items'><span>I want to buy</span><span className='spec'></span><span className='ETH'>ETH</span><span className='sell'>Sell</span></div>

    </div>
    </div>
    </div>
    </Container>
  )
}

export default Graph;
