import React, {component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import MdAccessTime from 'react-icons/lib/md/access-time';
import userPhoto1 from '../../../icons/users/johhn-doe.png';
import userPhoto2 from '../../../icons/users/alex-smith.png';
import userPhoto3 from '../../../icons/users/nina-jones.png';
import userPhoto4 from '../../../icons/users/ann-cloony.png';
import PieChartSales from "../../dumb/pie-chart-sales/index";

class StatSales extends React.Component {

    render() {
        let chartData1 =
            {
                labels: [
                    '',
                    'Sales',
                ],
                datasets: [{
                    borderWidth: 0,
                    data: [100, 100],
                    backgroundColor: [
                        '#CED2D4',
                        '#5584ff',
                    ],
                }]
            };
        let chartData2 =
            {
                labels: [
                    '',
                    'Sales',
                ],
                datasets: [{
                    borderWidth: 0,
                    data: [300, 100],
                    backgroundColor: [
                        '#CED2D4',
                        '#faff14',
                    ],
                }]
            };
        let chartData3 =
            {
                labels: [
                    '',
                    'Sales',
                ],
                datasets: [{
                    borderWidth: 0,
                    data: [200, 100],
                    backgroundColor: [
                        '#CED2D4',
                        '#ff1837',
                    ],
                }]
            };


        return (
            <section className="d-flex flex-wrap justify-content-around">
                <div className="d-flex align-items-center">
                    <PieChartSales chartData={chartData1}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>2,300$</h4>
                        <p>Direct Sales</p>
                    </div>
                </div>
                <div className="d-flex  align-items-center">
                    <PieChartSales chartData={chartData2}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>980$</h4>
                        <p>Channel Sales</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <PieChartSales chartData={chartData3}/>
                    <div className="gray statistics-pie-cart-info">
                        <h4>1,250$</h4>
                        <p>Channel Sales</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default StatSales;