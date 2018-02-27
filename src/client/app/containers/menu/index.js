import React from 'react';
import Navigation from "../../components/smart/navigation/index";
import MainHeader from "../../components/smart/main-header/index";


class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(navToggle) {
        this.setState({navToggle: navToggle});
    };

    render() {
        return (
            <div className="d-flex menu">
                <aside className={this.state.navToggle ? 'hiden' : 'sidebar'}>
                    <Navigation />
                </aside>
                <MainHeader handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default Menus;