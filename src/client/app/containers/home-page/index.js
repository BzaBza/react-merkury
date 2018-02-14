import React from 'react';
import Report from "../../components/smart/report/index";
import Sales from "../../components/smart/sales/index";
import Tasks from "../../components/smart/tasks/index";
import Activity from "../../components/smart/activity/index";
import Message from "../../components/smart/message/index";


class HomePage extends React.Component {
    render() {
        console.log(this.props.userData);
        return (
            <section className="containers">
                <div className="container">
                    <h1>Hello {this.props.userData.username}!</h1>
                    <div className="home-content col-md-12 d-flex flex-wrap justify-content-between">
                        <div className="col-md-5"><Sales/></div>
                        <div className="col-md-6"><Report/></div>
                        <div className="d-flex flex-wrap">
                            <Tasks/>
                            <Activity/>
                            <Message/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomePage;