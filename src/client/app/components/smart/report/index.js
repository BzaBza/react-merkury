import React from 'react';
import ActiveUsers from '../../dumb/active-users/index';
import DropPeriod from '../../dumb/drop-period/index';

class Report extends React.Component {
    render() {
        return (
            <div className="home-component col-md-5">
                <div className="d-flex justify-content-around align-items-center">
                    <h3 className="home-title">Report</h3>
                    <DropPeriod/>
                </div>
                <ActiveUsers/>
            </div>
        );
    }
}
export default Report;
