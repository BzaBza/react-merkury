import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ActiveUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{}
        }

    }
    getChartData(){
        this.setState({
            chartData:{
                labels: ['', '', '', '', '', '', ''],
                datasets: [
                    {
                        fill: false,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 1,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        })
    }
    componentWillMount(){
        this.getChartData();
    }

    render() {
        return (
            <div className="chart">
                <div>
                    <Line
                        data={this.state.chartData}
                        height={320}
                        width={720}
                        options={{
                            legend: false
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ActiveUsers;