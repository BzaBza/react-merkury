import React from 'react';
import Navigation from "../../components/smart/navigation/index";
import MainHeader from "../../components/smart/main-header/index";


class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: true,
        };
        this.handleNav = this.handleNav.bind(this);
    }
    handleNav(handleNavClick) {
        this.setState({navToggle: !this.state.navToggle});
    };

    render() {
        return (
            <div className="d-flex menu">
                <Navigation handleNav={this.handleNavClick}/>
                <MainHeader/>
            </div>
        )
    }
}

export default Menus;