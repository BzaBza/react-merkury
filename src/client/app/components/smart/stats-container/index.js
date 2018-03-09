import React, {component} from 'react';
import Stats from "../../dumb/stats/index";

class StatsContainer extends React.Component {

    render() {
        let chartData1 = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    scaleLabel: false,
                    ticks: false,
                    gridLines: false,
                    fill: false,
                    lineTension: 1,
                    backgroundColor: '#f83c7b',
                    borderColor: '#f83c7b',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#f83c7b',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#f83c7b',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 111]

                }
            ]
        };
        let chartData2 = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    scaleLabel: false,
                    ticks: false,
                    gridLines: false,
                    fill: false,
                    lineTension: 1,
                    backgroundColor: '#5584ff',
                    borderColor: '#5584ff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#5584ff',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#5584ff',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 111]

                }
            ]
        };

        return (
            <section>
               <div className="d-flex align-items-center border col-11 statistics-line-chart">
                   <div className="text-center gray">
                       <h3>1,560</h3>
                       <p>Sales</p>
                   </div>
                   <div className="col-10">
                       <Stats chartData = {chartData1}/>
                   </div>
               </div>
                <div className="d-flex align-items-center border col-11 statistics-line-chart">
                    <div className="text-center gray">
                        <h3>3,230</h3>
                        <p>Views</p>
                    </div>
                    <div className="col-10">
                        <Stats chartData = {chartData2}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default StatsContainer;