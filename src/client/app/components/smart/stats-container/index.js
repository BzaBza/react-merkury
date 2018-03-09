import React, {component} from 'react';
import Stats from "../../dumb/stats/index";
import lineChartData from '../../../config/line-stats-charts-config'

class StatsContainer extends React.Component {

    render() {
        return (
            <section>
               <div className="d-flex align-items-center border col-11 statistics-line-chart">
                   <div className="text-center gray">
                       <h3>1,560</h3>
                       <p>Sales</p>
                   </div>
                   <div className="col-10">
                       <Stats chartData = {lineChartData.chartData1}/>
                   </div>
               </div>
                <div className="d-flex align-items-center border col-11 statistics-line-chart">
                    <div className="text-center gray">
                        <h3>3,230</h3>
                        <p>Views</p>
                    </div>
                    <div className="col-10">
                        <Stats chartData = {lineChartData.chartData2}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default StatsContainer;