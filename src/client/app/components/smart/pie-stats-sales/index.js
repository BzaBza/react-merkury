import React, { component } from 'react';
import PieChartSales from '../../dumb/pie-chart-sales/index';
import pieChartData from '../../../config/pie-chart-sales-config';

class StatSales extends React.Component {
    render() {
        return (
            <section className="d-flex flex-wrap justify-content-around">
                <div className="d-flex align-items-center">
                    <PieChartSales chartData={pieChartData.chartData1}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>2,300$</h4>
                        <p>Direct Sales</p>
                    </div>
                </div>
                <div className="d-flex  align-items-center">
                    <PieChartSales chartData={pieChartData.chartData2}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>980$</h4>
                        <p>Channel Sales</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <PieChartSales chartData={pieChartData.chartData3}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>1,250$</h4>
                        <p>Channel Sales</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default StatSales;
