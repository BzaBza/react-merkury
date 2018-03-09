import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class PieChartSales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{}
        }
    }
    getChartData(){
        this.setState({
            chartData: this.props.chartData
        })
    }
    componentWillMount(){
        this.getChartData();
    }

    render() {
        return (
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    height={100}
                    width={210}
                    options={{
                        legend: false
                    }}
                />
            </div>
        );
    }
}

export default PieChartSales;