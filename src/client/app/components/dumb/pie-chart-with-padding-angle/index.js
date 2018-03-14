import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import pieChartData from '../../../config/pie-home-charts-config';

class UserSales extends Component {
    render() {
        return (
            <div className="chart">
                <Doughnut
                    data={pieChartData}
                    height={320}
                    width={720}
                    options={{
                        legend: {
                            position: 'right',
                        },
                    }}
                />
            </div>
        );
    }
}

export default UserSales;
