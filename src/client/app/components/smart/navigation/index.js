import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../dumb/logo/index';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        const menus = [
            { linkName: 'Home', path: '/home' },
            { linkName: 'Workflow', path: '/Workflow' },
            { linkName: 'Statistics', path: '/Statistics' },
            { linkName: 'Calendar', path: '/Calendar' },
            { linkName: 'Users', path: '/Users' },
            { linkName: 'Settings', path: '/Settings' },
        ];
        return (
            <aside className={this.props.navToggle ? 'sidebar' : 'close-nav'}>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, index) => <li key={index}>
                            <Link to={value.path.toLowerCase()} onClick={this.toggleClass}
                                className={value.linkName.toLowerCase()} >{this.props.navToggle ? value.linkName : ''}</Link></li>)}
                    </ul>
                </nav>
            </aside>
        );
    }
}
Navigation.propTypes = {
    navToggle: PropTypes.bool,
};
Navigation.defaultProps  = {
    navToggle: false,
};
export default Navigation;
