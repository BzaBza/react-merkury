import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo-wrap">
                <Link to='/home'><h1 className="logo"/></Link>
            </div>
        )
    }
}

export default Logo;