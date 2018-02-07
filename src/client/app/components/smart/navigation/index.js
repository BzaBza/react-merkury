import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../dumb/logo/index";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: true
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }
    handleNavClick(event) {
        this.setState({navToggle: !this.state.navToggle});
    };

    render() {
        let menus = [
            {linkName: 'Home', path: '/home'},
            {linkName: 'Workflow', path: '/Workflow'},
            {linkName: 'Statistics', path: '/Statistics'},
            {linkName: 'Calendar', path: '/Calendar'},
            {linkName: 'Users', path: '/Users'},
            {linkName: 'Settings', path: '/Settings'}
        ];

        return (
            <aside  className={this.state.navToggle ? 'sidebar':'hiden'}>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, index) => {
                            return <li key={index}>
                                <Link to={value.path.toLowerCase()} className={value.linkName.toLowerCase()}>{value.linkName}</Link></li>
                        })}
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Navigation;