import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import FaBars from 'react-icons/lib/fa/bars';
import MainButton from "../../dumb/main-button/index";
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

    handleNavClick(event) {
        this.setState({navToggle: !this.state.navToggle});
    };
    handleSearchClick(event) {
        this.setState({searchToggle: !this.state.searchToggle});
    };

    render() {
        return (
            <header className="col-md-10">
                <div className="d-flex justify-content-between  col-md-12 align-content-center flex-wrap">
                    <div  className="d-flex">
                        <button type="button" className="drop-menu" onClick={this.handleNavClick}>
                            <FaBars/>
                        </button>
                        <div className={this.state.navToggle ? 'hiden':''}>TOGLLEEE</div>
                        <button type="button" className="drop-menu" onClick={this.handleSearchClick}>
                            <FaSearch/>
                        </button>

                        <input type="text" className={this.state.searchToggle ? 'hiden':''}/>
                    </div>
                    <div className="d-flex flex-wrap">
                        <MainButton value="+ Add project"/>
                        <button>message</button>
                        <button>bell</button>
                        <UserMenu/>
                    </div>
                </div>
            </header>
        )
    }
}

export default MainHeader;