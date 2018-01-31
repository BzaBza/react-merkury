import React from 'react';
import AuthenticationHeader from '../../dumb/authentication-header/index';
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
        }
        else {}
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
                <div className="authentication-wrap col-md-6">
                    <div className="d-flex justify-content-center flex-wrap">
                        <AuthenticationHeader/>
                        <Title title1='LOGIN ' title2='!'/>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                placeholder="Username"
                                value={this.state.username}
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

export default Login;