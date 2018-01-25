import React from 'react';
import Logo from "../logo/index";

class AuthenticationHeader extends React.Component {
    render() {
        return (
            <header className="authentication-header d-flex justify-content-between align-items-center">
                <Logo/>
                <ul className="d-flex justify-content-around align-items-center">
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </header>
        )
    }
}

export default AuthenticationHeader;