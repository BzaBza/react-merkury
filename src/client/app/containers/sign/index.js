import React, {Component} from 'react';

import {TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import Register from "../../components/smart/register/index";
import Login from "../../components/smart/login/index";
import Logo from "../../components/dumb/logo/index";

class Sign extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'login',
            userData:{}
        };

        this.toggleTab = this.toggleTab.bind(this);
        this.setRootUserData = this.setRootUserData.bind(this);
    }

    toggleTab(tab) {
        if (this.state.currentTab !== tab) {
            this.setState({
                currentTab: tab
            });
        }

    }

    setRootUserData(userData){
        this.setState({userData: userData});
        this.props.setUserData(userData)
    }

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="col-5">
                    <header className="authentication-header d-flex justify-content-between align-items-center">
                        <Logo/>
                        <Nav tabs className="pointer sign-nav">
                            <NavItem className={ (this.state.currentTab === 'register') ?
                                'active-link' : '' }>
                                <NavLink
                                    className={ (this.state.currentTab === 'register') ?
                                        'active-link' : '' } onClick={ () => {
                                    this.toggleTab('register');
                                }}>
                                    Register
                                </NavLink>
                            </NavItem>
                            <NavItem className={ (this.state.currentTab === 'login') ?
                                'active-link' : '' }>
                                <NavLink
                                    className={ (this.state.currentTab === 'login') ?
                                        'active-link' : '' } onClick={ () => {
                                    this.toggleTab('login');
                                }}>
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </header>
                    <TabContent activeTab={this.state.currentTab}>
                        <TabPane tabId="register">
                            <Register />
                        </TabPane>
                        <TabPane tabId="login">
                            <Login routeProps={this.props.routeProps} setRootUserData={this.setRootUserData}/>
                        </TabPane>
                    </TabContent>
                </div>
            </section>
        );
    }
}

export default Sign;