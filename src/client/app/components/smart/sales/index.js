import React, {component} from 'react';
import UserSales from "../../dumb/pie-chart-with-padding-angle/index";
import DropPeriod from "../../dumb/drop-period/index";

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: '1,560'
        };
    }

    render() {
        return (
            <section className="home-component">
                <div className="d-flex justify-content-around align-items-center">
                    <h3 className="home-title">Your Sales</h3>
                    <div className="sales text-center">
                        <h3>{this.state.sales}</h3>
                        <p>Sales</p>
                    </div>
                    <DropPeriod/>
                </div>
               <div className="d-flex align-items-center">
                   <UserSales/>
                   <ul className="sales-list align-items-center">
                       <li>Websites</li>
                       <li>Logo</li>
                       <li>Social Media</li>
                       <li>Adwords</li>
                   </ul>
               </div>
            </section>
        )
    }
}

export default Sales;