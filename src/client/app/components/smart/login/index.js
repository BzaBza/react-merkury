import React from 'react';

import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdHttps from 'react-icons/lib/md/https';

import AuthenticationHeader from '../authentication-header/index';
import Title from '../../dumb/title/index';
import MainButton from '../../dumb/main-button/index';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handelPasswordChange = this.handelPasswordChange.bind(this);
        this.handelLoginChange = this.handelLoginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        let userLoginInfo = {
            username: this.state.username,
            password: this.state.password
        };
        let userData = localStorage.getItem('userData');
        let userRegistrationData = JSON.parse(userData);

        if (userLoginInfo.username === userRegistrationData.username && userRegistrationData.password === userLoginInfo.password) {
            this.props.history.push("/home");
            this.props.username = userLoginInfo.username;
        }
        else {
            alert('Login failed')
        }
    }


    handelPasswordChange(event) {
        this.setState({password: event.target.value});
    };


    handelLoginChange(event) {
        this.setState({username: event.target.value});
    };

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6 d-flex justify-content-center flex-wrap">
                    <AuthenticationHeader/>
                    <Title title1='Welcome ' title2='back!'/>
                    <form onSubmit={this.handleSubmit} className="justify-content-center text-center">
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
                            <MdHttps className="authentication-icon"/>
                            <input
                                type='password'
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handelPasswordChange}
                                className="authentication-input "
                            />
                        </div>
                        <MainButton type='submit' value='Enter >'/>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login;