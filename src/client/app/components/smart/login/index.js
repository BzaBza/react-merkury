import React from 'react';
import AuthenticationHeader from "../../dumb/header/index";
import Title from "../../dumb/title/index";
import MainButton from "../../dumb/main-button/index";


class Register extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        login: '',
        password: ''

    };

    this.handelPasswordChange = this.handelPasswordChange.bind(this);
    this.handelLoginChange = this.handelLoginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

    handleSubmit(event) {
        event.preventDefault();
        let userLoginInfo = {
            login: this.state.login,
            password: this.state.password
        };
        let userData = localStorage.getItem('userData');
        let userRegistrationData = JSON.parse(userData);
        if (userLoginInfo.login === userRegistrationData.login && userRegistrationData.password === userLoginInfo.password) {
            console.log('EEEEBOY')
        }
    }


    handelPasswordChange(event) {
        this.setState({password: event.target.value});
    };


    handelLoginChange(event) {
        this.setState({login: event.target.value});
    };

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <div className="d-flex justify-content-center flex-wrap">
                        <AuthenticationHeader/>
                        <Title title1='LOGIN ' title2='!'/>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                placeholder="Login"
                                value={this.state.login}
                                onChange={this.handelLoginChange}
                                className="row"
                            />
                            <input
                                type='password'
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handelPasswordChange}
                                className="row"
                            />
                            <MainButton type='submit' value='Enter >'/>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;