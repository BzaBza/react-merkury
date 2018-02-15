import React from 'react';
import Report from "../../components/smart/report/index";
import Sales from "../../components/smart/sales/index";
import Tasks from "../../components/smart/tasks/index";
import Activity from "../../components/smart/activity/index";
import Message from "../../components/smart/message/index";


class HomePage extends React.Component {
    render() {
        return (
            <section className="containers justify-content-center">
                <div className="col-12 justify-content-center text-center">
                    <h1 className="text-left">Hello {this.props.userData.username}!</h1>
                    <div className="home-content col-md-12 d-flex flex-wrap justify-content-between">
                        <div className="col-12 d-flex justify-content-between">
                            <Sales/>
                            <Report/>
                        </div>
                        <div className="d-flex justify-content-between col-12">
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