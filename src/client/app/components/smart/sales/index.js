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
            <section className="home-component col-md-5 col-sm-12">
                <div className="d-flex justify-content-around align-items-center">
                    <h3 className="home-title">Your Sales</h3>
                    <DropPeriod/>
                </div>
                   <UserSales/>
            </section>
        )
    }
}

export default Sales;