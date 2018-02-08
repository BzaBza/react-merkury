import React, { component } from 'react';
import AuthenticationHeader from "../authentication-header/index";

import TiAt from 'react-icons/lib/ti/at';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdCallEnd from 'react-icons/lib/md/call-end';
import MdHttps from 'react-icons/lib/md/https';

import Title from "../../dumb/title/index";
import MainButton from "../../dumb/main-button/index";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            tel: ''
        };

        this.handelEmailChange = this.handelEmailChange.bind(this);
        this.handelPasswordChange = this.handelPasswordChange.bind(this);
        this.handelNumberChange = this.handelNumberChange.bind(this);
        this.handelLoginChange = this.handelLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let userInfo = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            tel: this.state.tel
        };
        let userData = JSON.stringify(userInfo);
        localStorage.setItem('userData',
            userData
        );
    }

    handelEmailChange(event) {
        this.setState({email: event.target.value});
    };

    handelPasswordChange(event) {
        this.setState({password: event.target.value});
    };

    handelNumberChange(event) {
        this.setState({tel: event.target.value});
    };

    handelLoginChange(event) {
        this.setState({username: event.target.value});
    };


    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <div className="d-flex justify-content-center flex-wrap">
                        <AuthenticationHeader/>
                        <Title title1='Registration ' title2='!'/>
                        <form onSubmit={this.handleSubmit}  className="justify-content-center">
                           <div className="d-flex inputs">
                               <MdAccountCircle className="authentication-icon"/>
                               <input
                                   type='text'
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.handelLoginChange}
                                   className="authentication-input"
                               />
                           </div>
                           <div className="d-flex inputs">
                               <TiAt className="authentication-icon"/>
                               <input
                                   type='email'
                                   placeholder="Email"
                                   value={this.state.email}
                                   onChange={this.handelEmailChange}
                                   className="authentication-input"
                               />
                           </div>
                           <div className="d-flex inputs">
                               <MdHttps className="authentication-icon"/>
                               <input
                                   type='password'
                                   placeholder="Password"
                                   value={this.state.password}
                                   onChange={this.handelPasswordChange}
                                   className="authentication-input"
                               />
                           </div>
                            <div className="d-flex inputs">
                                <MdCallEnd className="authentication-icon"/>
                                <input
                                    type='tel'
                                    placeholder="Phone-number"
                                    value={this.state.tel}
                                    onChange={this.handelNumberChange}
                                    className="authentication-input"
                                />
                            </div>
                            <MainButton type='submit' value='Enter >'/>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;