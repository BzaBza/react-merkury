import React, { component } from 'react';

import TiAt from 'react-icons/lib/ti/at';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdCallEnd from 'react-icons/lib/md/call-end';
import MdHttps from 'react-icons/lib/md/https';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import Title from '../../dumb/title/index';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            tel: '',
        };

        this.handelEmailChange = this.handelEmailChange.bind(this);
        this.handelPasswordChange = this.handelPasswordChange.bind(this);
        this.handelNumberChange = this.handelNumberChange.bind(this);
        this.handelLoginChange = this.handelLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem('userData', JSON.stringify(this.state));
        this.login.value = '';
        this.password.value = '';
        this.tel.value = '';
        this.email.value = '';
    }

    handelEmailChange(event) {
        this.setState({ email: this.email.value });
    }

    handelPasswordChange(event) {
        this.setState({ password: this.password.value });
    }

    handelNumberChange(event) {
        this.setState({ tel: this.tel.value});
    }

    handelLoginChange(event) {
        this.setState({ username: this.login.value });
    }


    render() {
        return (
            <section>
                <div className="authentication-wrap">
                    <div className="d-flex justify-content-center flex-wrap">
                        <Title title1='Registration ' title2='!'/>
                        <form onSubmit={this.handleSubmit} className="justify-content-center text-center col-6">
                            <div className="d-flex inputs">
                                <MdAccountCircle className="authentication-icon"/>
                                <input
                                    type='text'
                                    placeholder="Username"
                                    ref={(input => {this.login = input})}
                                    onChange={this.handelLoginChange}
                                    className="authentication-input"
                                />
                            </div>
                            <div className="d-flex inputs">
                                <TiAt className="authentication-icon"/>
                                <input
                                    type='email'
                                    placeholder="Email"
                                    ref={(input => {this.email = input})}
                                    onChange={this.handelEmailChange}
                                    className="authentication-input"
                                />
                            </div>
                            <div className="d-flex inputs">
                                <MdHttps className="authentication-icon"/>
                                <input
                                    type='password'
                                    placeholder="Password"
                                    ref={(input  =>{this.password = input})}
                                    onChange={this.handelPasswordChange}
                                    className="authentication-input"
                                />
                            </div>
                            <div className="d-flex inputs">
                                <MdCallEnd className="authentication-icon"/>
                                <input
                                    type='tel'
                                    placeholder="Phone-number"
                                    ref={(input  =>{this.tel = input})}
                                    onChange={this.handelNumberChange}
                                    className="authentication-input"
                                />
                            </div>
                            <button type="submit" className="button btn btn-primary authentication-button">Enter <FaAngleRight className="authentication-button-icon"/></button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;
