import React from 'react';

import FaSearch from 'react-icons/lib/fa/search';
import GoTriangleLeft from 'react-icons/lib/go/triangle-left';
import FaBars from 'react-icons/lib/fa/bars';
import GoMail from 'react-icons/lib/go/mail';
import TiBell from 'react-icons/lib/ti/bell';

import UserMenu from '../../dumb/user-menu/index';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
            searchToggle: true,
        };
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleNavClick() {
        this.setState({navToggle: !this.state.navToggle});
        this.props.handleClick(this.state.navToggle);

        const containers = document.querySelector('.containers').style;
        const mainHeaderWrap = document.querySelector('.main-header-wrap').style;

        if (this.state.navToggle === false) {
            containers.marginLeft = '2.6cm';
            mainHeaderWrap.paddingLeft = '2.6cm';
        } else {
            mainHeaderWrap.paddingLeft = '6.5cm';
            containers.marginLeft = '6.5cm';
        }
    }

    handleSearchClick() {
        this.setState({searchToggle: !this.state.searchToggle});
    }

    render() {
        return (
            <header className="main-header-wrap">
                <div
                    className={`${this.state.navToggle ? 'col-xl-11 col-lg-10 col-md-9 ' : 'col-xl-12 col-lg-9 col-md-8 '}
                    ${'main-header d-flex align-content-center justify-content-between'}`}>
                    <div className="d-flex">
                        <button type="button" className="drop-menu" onClick={this.handleNavClick}>
                            <GoTriangleLeft className="triangle-left"/><FaBars className="icon"/>
                        </button>
                        <button type="button" className="drop-menu" onClick={this.handleSearchClick}>
                            <FaSearch className="icon"/>
                        </button>
                        <input type="text" className={this.state.searchToggle ? 'hide' : ''}/>
                    </div>
                    <div className="d-flex header-side-menu align-items-center col-4">
                        <button type="submit" className="button btn btn-primary"><span className="gray">+</span> Add
                            project
                        </button>
                        <button className="drop-menu"><GoMail className="icon"/></button>
                        <button className="drop-menu"><TiBell className="icon"/></button>
                        <UserMenu/>
                    </div>
                    <button type="button" className="header-side-menu-drop"/>
                </div>
            </header>
        );
    }
}
export default MainHeader;
