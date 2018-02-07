import React from 'react';
import Logo from '../../dumb/logo/index';
import { Link } from 'react-router-dom';

class AuthenticationHeader extends React.Component {
    render() {
        return (
            <div className="authentication-header d-flex justify-content-between align-items-center">
                <Logo/>
                <ul className="d-flex align-items-center">
                    <li><Link to='/registration'>Register</Link></li>
                    <li><Link to='/'>Login</Link></li>
                </ul>
            </div>
        )
    }
}

export default AuthenticationHeader;