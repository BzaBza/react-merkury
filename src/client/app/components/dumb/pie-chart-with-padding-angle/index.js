import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class UserSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [
                'Websites',
                'Logo',
                'Social Media',
                'Adwords'
            ],
            datasets: [{
                data: [300, 50, 100, 20],
                backgroundColor: [
                    '#5584ff',
                    '#25396e',
                    '#3755a4',
                    '#4b74e0'
                ],
            }]
        }
    }


    render() {
        return (
            <div className="chart">
                <Doughnut
                    data={this.state}
                    height={320}
                    width={720}
                    options={{
                        legend:{
                            position:'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default UserSales;