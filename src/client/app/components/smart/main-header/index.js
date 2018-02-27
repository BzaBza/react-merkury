import React from 'react';

import FaSearch from 'react-icons/lib/fa/search';
import GoTriangleLeft from 'react-icons/lib/go/triangle-left';
import FaBars from 'react-icons/lib/fa/bars';
import GoMail from 'react-icons/lib/go/mail';
import TiBell from 'react-icons/lib/ti/bell';

import UserMenu from "../../dumb/user-menu/index";

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: true,
            searchToggle: true
        };
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleNavClick() {
        this.setState({navToggle: !this.state.navToggle});
        this.props.handleClick(this.state.navToggle)
    };

    handleSearchClick(event) {
        this.setState({searchToggle: !this.state.searchToggle});
    };

    render() {
        return (
            <header className="main-header-wrap">
                <div className="main-header d-flex justify-content-between  align-content-center flex-wrap">
                    <div  className="d-flex">
                        <button type="button" className="drop-menu" onClick={this.handleNavClick}>
                         <GoTriangleLeft className="triangle-left"/>   <FaBars  className="icon"/>
                        </button>
                        <button type="button" className="drop-menu" onClick={this.handleSearchClick}>
                            <FaSearch className="icon"/>
                        </button>

                        <input type="text" className={this.state.searchToggle ? 'hiden':''}/>
                    </div>
                    <div className="d-flex flex-wrap header-side-menu">
                        <button type="submit" className="button btn btn-primary">+ Add project</button>
                        <button className="drop-menu"><GoMail className="icon"/></button>
                        <button className="drop-menu"><TiBell className="icon"/></button>
                        <UserMenu/>
                    </div>
                    <button type="button" className="header-side-menu-drop"/>
                </div>
            </header>
        )
    }
}

export default MainHeader;