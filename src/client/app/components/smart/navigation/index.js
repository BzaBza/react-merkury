import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../../dumb/logo/index";


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
            menus: [
                {linkName: 'Home', path: '/home'},
                {linkName: 'Workflow', path: '/Workflow'},
                {linkName: 'Statistics', path: '/Statistics'},
                {linkName: 'Calendar', path: '/Calendar'},
                {linkName: 'Users', path: '/Users'},
                {linkName: 'Settings', path: '/Settings'}
            ],
        };

        this.handleNavClick = this.handleNavClick.bind(this);
        // this.addActive = this.addActive.bind(this);
    }

    handleNavClick(navToggle) {
        this.setState({navToggle: !this.state.navToggle});
    };

    // addActive(event) {
    //     const menus = this.state.menus;
    //     console.log(($('a').val($(this))));
    //     for (let i = 0; i < menus.length; i++) {
    //         if (menus[i].linkName.toLowerCase() === $('a').val($(this)).className) {
    //
    //
    //
    //             console.log($('a').val($(this)).className);
    //         }else {console.log('not work');}
    //
    //     }
    // }

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
            <aside className='sidebar'>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, index) => {
                            return <li key={index}>
                                <Link to={value.path.toLowerCase()}
                                      className={value.linkName.toLowerCase()} >{value.linkName}</Link></li>
                        })}
                    </ul>
                </nav>
            </aside>
        )
    }
}

export default Navigation;