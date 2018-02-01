import React from 'react';
import DropDownButton from "../../dumb/dropdown-button/index";
import MainButton from "../../dumb/main-button/index";
import UserMenu from "../../dumb/user-menu/index";

class MainHeader extends React.Component {

    render() {
        return (
            <header className="col-md-12">
                <div className="d-flex justify-content-between  col-md-11 align-content-center">
                    <div className="d-flex">
                        <button type="button" onClick={this.props.menuVisibility}/>
                        <DropDownButton/>
                    </div>
                    <div className="d-flex">
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