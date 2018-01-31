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
            {linkName: 'Settings', path: 'Settings'}
        ];
        return (
            <aside>
                <Logo/>
                <nav>
                    <ul>
                        {menus.map((value, index) => {
                            return <li key={index}><Link to={value.path.toLowerCase()}>{value.linkName}</Link></li>
                        })}
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Navigation;