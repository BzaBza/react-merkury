import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import lineChartData from '../../../config/line-home-chartdata-config'

class ActiveUsers extends Component {
    render() {
        return (
            <div className="chart">
                <div>
                    <Line
                        data={lineChartData}
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