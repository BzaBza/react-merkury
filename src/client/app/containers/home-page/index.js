import React from 'react';
import Report from "../../components/smart/report/index";
import Sales from "../../components/smart/sales/index";
import HomePageBottom from "../../components/smart/home-page-footer/index";


class HomePage extends React.Component {
    render() {
        return (
            <section className="containers justify-content-center">
                <div className="col-12 justify-content-center text-center">
                    <h1 className="text-left">Hello {this.props.userData.username}!</h1>
                    <div className="home-content col-md-12 d-flex flex-wrap justify-content-between">
                        <div className="d-flex flex-wrap justify-content-between col-12">
                            <Sales/>
                            <Report/>
                        </div>
                        <HomePageBottom/>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomePage;