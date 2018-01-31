import React from 'react';
import Logo from '../logo/index';
import { Link } from 'react-router-dom';

class AuthenticationHeader extends React.Component {
    render() {
        return (
            <header className="authentication-header d-flex justify-content-between align-items-center">
                <Logo/>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to='/registration'>Register</Link>
                    <Link to='/'>Login</Link>
                </div>
            </header>
        )
    }
}

export default AuthenticationHeader;