import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../dumb/logo/index";


class Navigation extends React.Component {

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
            <aside className={this.props.navToggle ? 'sidebar': 'close-nav'}>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, index) => {
                            return <li key={index}>
                                <Link to={value.path.toLowerCase()}
                                      className={value.linkName.toLowerCase()} >{this.props.navToggle ? value.linkName : ''}</Link></li>
                        })}
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Navigation;