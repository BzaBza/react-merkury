import React from 'react';
import ActiveUsers from "../../components/dumb/active-users/index";
import Stats from "../../components/dumb/stats/index";

class Statistics extends React.Component {


    render() {
        return (
            <section className="containers">
                <div className="d-flex">
                    <div className="co-4">
                        <Stats/>
                        <Stats/>
                    </div>
                    <div><ActiveUsers/></div>
                </div>
            </section>
        )
    }
}

export default Statistics;