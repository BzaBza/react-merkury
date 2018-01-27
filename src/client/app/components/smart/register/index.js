import React from 'react';
import AuthenticationHeader from "../../dumb/header/index";
import Title from "../../dumb/title/index";
import MainButton from "../../dumb/main-button/index";


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            pass: '',
            tel: ''
        };
        this.handelEmailChange = this.handelEmailChange.bind(this);
        this.handelPasswordChange = this.handelPasswordChange.bind(this);
        this.handelNumberChange = this.handelNumberChange.bind(this);
        this.handelLoginChange = this.handelLoginChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submitted!');
    }

    handelEmailChange(event) {
        console.log('email was changed', this);
        this.setState({email: event.target.value});
    };

    handelPasswordChange(event) {
        console.log('Password was changed', this);
        this.setState({pass: event.target.value});
    };

    handelNumberChange(event) {
        console.log('Number was changed', this);
        this.setState({tel: event.target.value});
    };

    handelLoginChange(event) {
        console.log('Login was changed', this);
        this.setState({login: event.target.value});
    };

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <div className="d-flex justify-content-center flex-wrap">
                        <AuthenticationHeader/>
                        <Title title1='Registration ' title2='!'/>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                placeholder="Login"
                                value={this.state.login}
                                onChange={this.handelLoginChange}
                                className="row"
                            />
                            <input
                                type='email'
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handelEmailChange}
                                className="row"
                            />
                            <input
                                type='password'
                                placeholder="Password"
                                value={this.state.pass}
                                onChange={this.handelPasswordChange}
                                className="row"
                            />
                            <input
                                type='tel'
                                placeholder="Phone-number"
                                value={this.state.tel}
                                onChange={this.handelNumberChange}
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