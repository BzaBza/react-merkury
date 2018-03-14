import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
        };
    }

    getChartData() {
        this.setState({
            chartData: this.props.chartData,
        });
    }
    componentWillMount() {
        this.getChartData();
    }

    render() {
        return (
            <div>
                <Line
                    data={this.state.chartData}
                    options={{
                        legend: false,
                    }
                    }

                />
            </div>
        );
    }
}
export default Stats;
