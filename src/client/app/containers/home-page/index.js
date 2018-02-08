import React from 'react';
import Report from "../../components/smart/report/index";
import Sales from "../../components/smart/sales/index";


class HomePage extends React.Component {

    render() {
        return (
            <section className="containers">
                <h1>Hello</h1>
                <div className="col-md-12 d-flex flex-wrap justify-content-around">
                    <div><Sales/></div>
                    <div><Report/></div>
                </div>
            </section>
        )
    }
}

export default HomePage;