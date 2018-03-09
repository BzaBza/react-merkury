import React from 'react';
import ActiveUsers from "../../components/dumb/active-users/index";
import DropPeriod from "../../components/dumb/drop-period/index";
import StatSales from "../../components/smart/pie-stats-sales/index";
import StatsContainer from "../../components/smart/stats-container/index";

class Statistics extends React.Component {


    render() {
        return (
            <section className="containers">
                <header className="d-flex justify-content-between tasks-title">
                    <h2>Lorem Ipsum Stats</h2>
                    <div className="d-flex justify-content-between col-3">
                        <DropPeriod/>
                        <DropPeriod/>
                    </div>
                </header>
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <div className="col-3">
                        <StatsContainer/>
                    </div>
                    <div className="col-6 border">
                        <h4 className="home-title">Active users</h4>
                        <ActiveUsers/>
                    </div>
                </div>
                <div className="border">
                    <h3 className="gray">Total sales</h3>
                    <StatSales/>
                </div>
            </section>
        )
    }
}

export default Statistics;