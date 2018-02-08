import React, { component } from 'react';
import UserSales from "../../dumb/pie-chart-with-padding-angle/index";
import DropPeriod from "../../dumb/drop-period/index";



class Sales extends React.Component {


    render() {
        return (
            <section className="home-component">
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